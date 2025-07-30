from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid


class Professor(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    specialty: str
    credentials: str
    image: str
    order: int = 0
    active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProfessorCreate(BaseModel):
    name: str
    specialty: str
    credentials: str
    image: str
    order: int = 0
    active: bool = True

class ProfessorUpdate(BaseModel):
    name: Optional[str] = None
    specialty: Optional[str] = None
    credentials: Optional[str] = None
    image: Optional[str] = None
    order: Optional[int] = None
    active: Optional[bool] = None