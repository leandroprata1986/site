from .user import User, UserCreate, UserLogin, UserResponse, UserUpdate
from .course import Course, CourseCreate, CourseUpdate
from .curriculum import Curriculum, CurriculumCreate, CurriculumUpdate
from .professor import Professor, ProfessorCreate, ProfessorUpdate

__all__ = [
    'User', 'UserCreate', 'UserLogin', 'UserResponse', 'UserUpdate',
    'Course', 'CourseCreate', 'CourseUpdate',
    'Curriculum', 'CurriculumCreate', 'CurriculumUpdate',
    'Professor', 'ProfessorCreate', 'ProfessorUpdate'
]