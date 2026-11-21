from sqlalchemy import Column, Integer, String, Boolean, DateTime
from datetime import datetime
from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=True)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(20), nullable=False, default="admin")
    # Rôles possibles : "admin_supreme", "admin", "user"

    nom = Column(String(50), nullable=True)
    prenom = Column(String(50), nullable=True)
    telephone = Column(String(20), nullable=True)

    # Lien vers un abonné si role == "user"
    abonne_id = Column(Integer, nullable=True)

    actif = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    last_login = Column(DateTime, nullable=True)