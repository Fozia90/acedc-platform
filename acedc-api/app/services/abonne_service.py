from sqlalchemy.orm import Session
from datetime import date, datetime
from dateutil.relativedelta import relativedelta
from app.models.abonne import Abonne
from app.models.user import User
from app.core.security import verify_password


class AbonneService:
    def __init__(self, db: Session):
        self.db = db

    def create_abonne(self, data: dict) -> Abonne:
        """Crée un nouvel abonné"""
        # Vérifier le mot de passe admin
        admin = self.db.query(User).filter(User.role == "admin_supreme").first()
        if not admin or not verify_password(data["password"], admin.password_hash):
            raise PermissionError("Mot de passe admin incorrect")
        
        # Date d'inscription
        if data.get("date_inscription"):
            date_inscription = data["date_inscription"]
        else:
            date_inscription = date.today()
        
        # Date d'expiration (+1 mois)
        date_expiration = date_inscription + relativedelta(months=1)
        
        # Créer l'abonné
        abonne = Abonne(
            nom=data["nom"].strip().upper(),
            prenom=data["prenom"].strip().upper(),
            telephone=data["telephone"].strip(),
            adresse=data["adresse"].strip().upper(),
            sexe=data["sexe"],
            montant=int(data["montant"]),
            frequence=int(data.get("frequence", 2)),
            date_inscription=date_inscription,
            date_expiration=date_expiration,
        )
        
        self.db.add(abonne)
        self.db.commit()
        self.db.refresh(abonne)
        
        return abonne

    def get_all_abonnes(self) -> list:
        """Récupère tous les abonnés avec leur statut"""
        today = date.today()
        result = []
        
        abonnes = self.db.query(Abonne).order_by(Abonne.id.desc()).all()
        
        for a in abonnes:
            jours = (a.date_expiration - today).days
            
            if jours < 0:
                statut = "Expiré"
            elif jours <= 5:
                statut = "Bientôt expiré"
            else:
                statut = "Actif"
            
            result.append({
                "id": a.id,
                "nom": a.nom,
                "prenom": a.prenom,
                "telephone": a.telephone,
                "adresse": a.adresse,
                "sexe": a.sexe,
                "montant": a.montant,
                "frequence": a.frequence,
                "date_inscription": a.date_inscription.strftime("%d/%m/%Y"),
                "date_expiration": a.date_expiration.strftime("%d/%m/%Y"),
                "jours_restants": jours,
                "statut": statut,
            })
        
        return result