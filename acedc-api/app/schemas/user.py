from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    username: str
    email: Optional[str] = None
    role: str
    nom: Optional[str] = None
    prenom: Optional[str] = None
    telephone: Optional[str] = None
    abonne_id: Optional[int] = None


class UserResponse(UserBase):
    id: int
    actif: bool
    created_at: datetime
    last_login: Optional[datetime] = None

    class Config:
        from_attributes = True