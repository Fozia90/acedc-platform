from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.db.database import Base, engine
from app.models import User, Abonne  # noqa - pour créer les tables
from app.routers import auth, abonnes
from app.db.init_db import create_default_users

# 1. Créer les tables AVANT FastAPI
Base.metadata.create_all(bind=engine)

# 2. Créer l'app FastAPI
app = FastAPI(
    title="ACEDC API",
    description="API de gestion des abonnements ACEDC",
    version="1.0.0",
)

# 3. CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Créer les utilisateurs par défaut
create_default_users()

# 5. Inclure les routers
app.include_router(auth.router, prefix="/api")
app.include_router(abonnes.router, prefix="/api")


@app.get("/")
def root():
    return {
        "message": "ACEDC API",
        "version": "1.0.0",
        "status": "online",
    }


@app.get("/health")
def health():
    return {"status": "healthy"}