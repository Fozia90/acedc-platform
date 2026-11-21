from sqlalchemy.orm import Session
from datetime import datetime
from app.models.user import User
from app.core.security import verify_password, create_access_token


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def login(self, username: str, password: str) -> dict:
        """Authentifie un utilisateur et retourne un token"""
        # Chercher l'utilisateur
        user = self.db.query(User).filter(User.username == username).first()
        
        if not user:
            raise ValueError("Identifiants incorrects")
        
        if not user.actif:
            raise ValueError("Compte désactivé")
        
        if not verify_password(password, user.password_hash):
            raise ValueError("Identifiants incorrects")
        
        # Mettre à jour la dernière connexion
        user.last_login = datetime.utcnow()
        self.db.commit()
        
        # Créer le token
        token_data = {
            "sub": str(user.id),
            "username": user.username,
            "role": user.role,
        }
        access_token = create_access_token(token_data)
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "username": user.username,
                "role": user.role,
                "nom": user.nom,
                "prenom": user.prenom,
                "telephone": user.telephone,
                "abonne_id": user.abonne_id,
            }
        }

    def get_user_by_id(self, user_id: int) -> User:
        """Récupère un utilisateur par son ID"""
        user = self.db.query(User).filter(User.id == user_id).first()
        if not user:
            raise ValueError("Utilisateur introuvable")
        return user