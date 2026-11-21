from sqlalchemy import Column, Integer, String, Date, DateTime
from datetime import datetime, date
from app.db.database import Base


class Abonne(Base):
    __tablename__ = "abonnes"

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(50), nullable=False)
    prenom = Column(String(50), nullable=False)
    telephone = Column(String(20), nullable=False)
    adresse = Column(String(100), nullable=False)
    sexe = Column(String(10), nullable=False)
    montant = Column(Integer, nullable=False)
    frequence = Column(Integer, default=2)  # ✅ nouveau
    
    date_inscription = Column(Date, nullable=False, default=date.today)
    date_expiration = Column(Date, nullable=False)
    
    created_at = Column(DateTime, default=datetime.utcnow)