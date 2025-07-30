from pydantic import BaseModel, EmailStr, Field
from typing import Literal, Optional
from datetime import datetime
import uuid


class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    status: Literal['pending', 'responded'] = 'pending'
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str

class ContactUpdate(BaseModel):
    status: Optional[Literal['pending', 'responded']] = None