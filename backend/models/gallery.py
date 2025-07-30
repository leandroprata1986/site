from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid


class Gallery(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    image: str
    order: int = 0
    active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class GalleryCreate(BaseModel):
    title: str
    image: str
    order: int = 0
    active: bool = True

class GalleryUpdate(BaseModel):
    title: Optional[str] = None
    image: Optional[str] = None
    order: Optional[int] = None
    active: Optional[bool] = None