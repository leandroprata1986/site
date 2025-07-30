from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid


class Course(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    duration: str
    modality: str
    price: str
    next_start: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CourseCreate(BaseModel):
    name: str
    description: str
    duration: str
    modality: str
    price: str
    next_start: str

class CourseUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    duration: Optional[str] = None
    modality: Optional[str] = None
    price: Optional[str] = None
    next_start: Optional[str] = None