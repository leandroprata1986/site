from .user import User, UserCreate, UserLogin, UserResponse, UserUpdate
from .course import Course, CourseCreate, CourseUpdate
from .curriculum import Curriculum, CurriculumCreate, CurriculumUpdate
from .professor import Professor, ProfessorCreate, ProfessorUpdate
from .gallery import Gallery, GalleryCreate, GalleryUpdate
from .contact import Contact, ContactCreate, ContactUpdate
from .testimonial import Testimonial, TestimonialCreate, TestimonialUpdate

__all__ = [
    'User', 'UserCreate', 'UserLogin', 'UserResponse', 'UserUpdate',
    'Course', 'CourseCreate', 'CourseUpdate',
    'Curriculum', 'CurriculumCreate', 'CurriculumUpdate',
    'Professor', 'ProfessorCreate', 'ProfessorUpdate',
    'Gallery', 'GalleryCreate', 'GalleryUpdate',
    'Contact', 'ContactCreate', 'ContactUpdate',
    'Testimonial', 'TestimonialCreate', 'TestimonialUpdate'
]