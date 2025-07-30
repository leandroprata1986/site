from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid


class Curriculum(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    semester: str
    subjects: List[str]
    order: int
    created_at: datetime = Field(default_factory=datetime.utcnow)

class CurriculumCreate(BaseModel):
    semester: str
    subjects: List[str]
    order: int

class CurriculumUpdate(BaseModel):
    semester: Optional[str] = None
    subjects: Optional[List[str]] = None
    order: Optional[int] = None