from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Sécurité
    SECRET_KEY: str = "acedc-super-secret-key-change-me"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24h

    # Base de données
    DATABASE_URL: str = "sqlite:///./acedc.db"

    # CORS
    CORS_ORIGINS: str = "http://localhost:3000,http://localhost:8081"

    # Environnement
    ENVIRONMENT: str = "development"

    @property
    def cors_origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()