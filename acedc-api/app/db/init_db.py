from app.db.database import SessionLocal
from app.models.user import User
from app.core.security import hash_password


def create_default_users():
    """Crée les utilisateurs par défaut si la base est vide"""
    db = SessionLocal()
    try:
        # Vérifier si des utilisateurs existent
        count = db.query(User).count()
        
        if count == 0:
            print("🔄 Création des utilisateurs par défaut...")
            
            users = [
                User(
                    username="supreme",
                    password_hash=hash_password("SUP2026"),
                    role="admin_supreme",
                    nom="Fortuna",
                    prenom="Ziata",
                    telephone="+243841351095",
                    actif=True,
                ),
                User(
                    username="admin",
                    password_hash=hash_password("ADM2026"),
                    role="admin",
                    nom="Admin",
                    prenom="ACEDC",
                    telephone="+243841351095",
                    actif=True,
                ),
            ]
            
            for user in users:
                db.add(user)
            
            db.commit()
            print(f"✅ {len(users)} utilisateurs créés")
            print("   👤 supreme / SUP2026 (admin suprême)")
            print("   👤 admin / ADM2026 (admin normal)")
        else:
            print(f"ℹ️  {count} utilisateur(s) déjà existant(s)")
    except Exception as e:
        print(f"❌ Erreur : {e}")
    finally:
        db.close()