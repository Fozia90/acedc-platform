from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.schemas.abonne import AbonneCreate, AbonneResponse
from app.services.abonne_service import AbonneService
from app.routers.auth import get_current_user

router = APIRouter(prefix="/abonnes", tags=["Abonnés"])


@router.get("")
def list_abonnes(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Liste tous les abonnés"""
    service = AbonneService(db)
    return service.get_all_abonnes()


@router.post("", status_code=status.HTTP_201_CREATED)
def create_abonne(
    data: AbonneCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    """Crée un nouvel abonné"""
    if current_user.role not in ["admin", "admin_supreme"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Accès refusé",
        )
    
    service = AbonneService(db)
    
    try:
        abonne = service.create_abonne(data.model_dump())
        return {
            "message": "Abonné enregistré avec succès",
            "abonne": {
                "id": abonne.id,
                "nom": abonne.nom,
                "prenom": abonne.prenom,
                "frequence": abonne.frequence,
            },
        }
    except PermissionError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))