from pydantic import BaseModel
from datetime import date
from typing import Optional


class AbonneCreate(BaseModel):
    nom: str
    prenom: str
    telephone: str
    adresse: str
    sexe: str
    montant: int
    frequence: int = 2
    date_inscription: Optional[date] = None
    password: str  # mot de passe admin pour valider


class AbonneResponse(BaseModel):
    id: int
    nom: str
    prenom: str
    telephone: str
    adresse: str
    sexe: str
    montant: int
    frequence: int
    date_inscription: date
    date_expiration: date

    class Config:
        from_attributes = True