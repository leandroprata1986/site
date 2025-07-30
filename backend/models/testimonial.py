from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid


class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    testimonial: str
    active: bool = True
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class TestimonialCreate(BaseModel):
    name: str
    role: str
    testimonial: str
    active: bool = True
    order: int = 0

class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    testimonial: Optional[str] = None
    active: Optional[bool] = None
    order: Optional[int] = None