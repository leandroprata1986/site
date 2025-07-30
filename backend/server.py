from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List
from datetime import timedelta

# Import models
from models.user import User, UserCreate, UserLogin, UserResponse, UserUpdate
from models.course import Course, CourseCreate, CourseUpdate
from models.curriculum import Curriculum, CurriculumCreate, CurriculumUpdate
from models.professor import Professor, ProfessorCreate, ProfessorUpdate
from models.gallery import Gallery, GalleryCreate, GalleryUpdate
from models.contact import Contact, ContactCreate, ContactUpdate
from models.testimonial import Testimonial, TestimonialCreate, TestimonialUpdate

# Import auth
from auth import (
    verify_password, get_password_hash, create_access_token,
    get_current_user, require_admin, ACCESS_TOKEN_EXPIRE_MINUTES
)

# Import database
from database import connect_to_mongo, close_mongo_connection, get_database

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(title="Beit Nevi'im API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

security = HTTPBearer()

# Database dependency
async def get_db():
    return await get_database()

# ==================== AUTH ROUTES ====================

@api_router.post("/auth/register", response_model=UserResponse)
async def register(user_data: UserCreate, db=Depends(get_db)):
    """Register a new user."""
    # Check if user already exists
    existing_user = await db.users.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Hash password and create user
    hashed_password = get_password_hash(user_data.password)
    user = User(
        name=user_data.name,
        email=user_data.email,
        password=hashed_password,
        role=user_data.role
    )
    
    # Insert user to database
    await db.users.insert_one(user.dict())
    
    return UserResponse(**user.dict())

@api_router.post("/auth/login")
async def login(login_data: UserLogin, db=Depends(get_db)):
    """Login user and return JWT token."""
    # Find user
    user = await db.users.find_one({"email": login_data.email})
    if not user or not verify_password(login_data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["id"]}, expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": UserResponse(**user)
    }

@api_router.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: UserResponse = Depends(get_current_user)):
    """Get current user information."""
    return current_user

# ==================== COURSE ROUTES ====================

@api_router.get("/course", response_model=Course)
async def get_course(db=Depends(get_db)):
    """Get course information."""
    course = await db.courses.find_one()
    if not course:
        raise HTTPException(status_code=404, detail="Course information not found")
    return Course(**course)

@api_router.put("/course", response_model=Course)
async def update_course(course_data: CourseUpdate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Update course information (admin only)."""
    course = await db.courses.find_one()
    if not course:
        raise HTTPException(status_code=404, detail="Course information not found")
    
    update_data = {k: v for k, v in course_data.dict().items() if v is not None}
    if update_data:
        await db.courses.update_one({}, {"$set": update_data})
        course.update(update_data)
    
    return Course(**course)

# ==================== CURRICULUM ROUTES ====================

@api_router.get("/curriculum", response_model=List[Curriculum])
async def get_curriculum(db=Depends(get_db)):
    """Get curriculum data."""
    curriculum = await db.curriculum.find().sort("order", 1).to_list(100)
    return [Curriculum(**item) for item in curriculum]

@api_router.post("/curriculum", response_model=Curriculum)
async def create_curriculum(curriculum_data: CurriculumCreate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Create new curriculum item (admin only)."""
    curriculum = Curriculum(**curriculum_data.dict())
    await db.curriculum.insert_one(curriculum.dict())
    return curriculum

@api_router.put("/curriculum/{curriculum_id}", response_model=Curriculum)
async def update_curriculum(curriculum_id: str, curriculum_data: CurriculumUpdate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Update curriculum item (admin only)."""
    curriculum = await db.curriculum.find_one({"id": curriculum_id})
    if not curriculum:
        raise HTTPException(status_code=404, detail="Curriculum not found")
    
    update_data = {k: v for k, v in curriculum_data.dict().items() if v is not None}
    if update_data:
        await db.curriculum.update_one({"id": curriculum_id}, {"$set": update_data})
        curriculum.update(update_data)
    
    return Curriculum(**curriculum)

@api_router.delete("/curriculum/{curriculum_id}")
async def delete_curriculum(curriculum_id: str, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Delete curriculum item (admin only)."""
    result = await db.curriculum.delete_one({"id": curriculum_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Curriculum not found")
    return {"message": "Curriculum deleted successfully"}

# ==================== PROFESSOR ROUTES ====================

@api_router.get("/professors", response_model=List[Professor])
async def get_professors(db=Depends(get_db)):
    """Get all active professors."""
    professors = await db.professors.find({"active": True}).sort("order", 1).to_list(100)
    return [Professor(**prof) for prof in professors]

@api_router.post("/professors", response_model=Professor)
async def create_professor(professor_data: ProfessorCreate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Create new professor (admin only)."""
    professor = Professor(**professor_data.dict())
    await db.professors.insert_one(professor.dict())
    return professor

@api_router.put("/professors/{professor_id}", response_model=Professor)
async def update_professor(professor_id: str, professor_data: ProfessorUpdate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Update professor (admin only)."""
    professor = await db.professors.find_one({"id": professor_id})
    if not professor:
        raise HTTPException(status_code=404, detail="Professor not found")
    
    update_data = {k: v for k, v in professor_data.dict().items() if v is not None}
    if update_data:
        await db.professors.update_one({"id": professor_id}, {"$set": update_data})
        professor.update(update_data)
    
    return Professor(**professor)

@api_router.delete("/professors/{professor_id}")
async def delete_professor(professor_id: str, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Delete professor (admin only)."""
    result = await db.professors.update_one({"id": professor_id}, {"$set": {"active": False}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Professor not found")
    return {"message": "Professor deactivated successfully"}

# ==================== GALLERY ROUTES ====================

@api_router.get("/gallery", response_model=List[Gallery])
async def get_gallery(db=Depends(get_db)):
    """Get all active gallery items."""
    gallery = await db.gallery.find({"active": True}).sort("order", 1).to_list(100)
    return [Gallery(**item) for item in gallery]

@api_router.post("/gallery", response_model=Gallery)
async def create_gallery_item(gallery_data: GalleryCreate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Create new gallery item (admin only)."""
    gallery_item = Gallery(**gallery_data.dict())
    await db.gallery.insert_one(gallery_item.dict())
    return gallery_item

@api_router.delete("/gallery/{gallery_id}")
async def delete_gallery_item(gallery_id: str, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Delete gallery item (admin only)."""
    result = await db.gallery.update_one({"id": gallery_id}, {"$set": {"active": False}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    return {"message": "Gallery item deleted successfully"}

# ==================== TESTIMONIAL ROUTES ====================

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials(db=Depends(get_db)):
    """Get all active testimonials."""
    testimonials = await db.testimonials.find({"active": True}).sort("order", 1).to_list(100)
    return [Testimonial(**item) for item in testimonials]

@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(testimonial_data: TestimonialCreate, db=Depends(get_db), admin_user=Depends(require_admin)):
    """Create new testimonial (admin only)."""
    testimonial = Testimonial(**testimonial_data.dict())
    await db.testimonials.insert_one(testimonial.dict())
    return testimonial

# ==================== CONTACT ROUTES ====================

@api_router.post("/contact", response_model=Contact)
async def create_contact(contact_data: ContactCreate, db=Depends(get_db)):
    """Submit contact form."""
    contact = Contact(**contact_data.dict())
    await db.contacts.insert_one(contact.dict())
    return contact

@api_router.get("/contact", response_model=List[Contact])
async def get_contacts(db=Depends(get_db), admin_user=Depends(require_admin)):
    """Get all contact messages (admin only)."""
    contacts = await db.contacts.find().sort("created_at", -1).to_list(100)
    return [Contact(**item) for item in contacts]

# ==================== LEGACY ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "Beit Nevi'im API is running!"}

# Include the router in the main app
app.include_router(api_router)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Event handlers
@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()
    logger.info("Connected to MongoDB and initialized data")

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()
