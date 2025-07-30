from motor.motor_asyncio import AsyncIOMotorClient
from typing import Dict, Any
import os
import logging

logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    database = None

database = Database()

async def get_database():
    """Get database instance."""
    return database.database

async def connect_to_mongo():
    """Create database connection."""
    try:
        database.client = AsyncIOMotorClient(os.environ["MONGO_URL"])
        database.database = database.client[os.environ["DB_NAME"]]
        
        # Test the connection
        await database.client.admin.command('ping')
        logger.info("Successfully connected to MongoDB")
        
        # Initialize collections if they don't exist
        await init_collections()
        
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise e

async def close_mongo_connection():
    """Close database connection."""
    if database.client:
        database.client.close()
        logger.info("Disconnected from MongoDB")

async def init_collections():
    """Initialize collections with indexes and sample data."""
    db = database.database
    
    # Create indexes
    await db.users.create_index("email", unique=True)
    await db.curriculum.create_index("order")
    await db.professors.create_index("order")
    await db.gallery.create_index("order")
    await db.testimonials.create_index("order")
    
    # Check if we need to initialize with sample data
    course_count = await db.courses.count_documents({})
    if course_count == 0:
        await populate_initial_data()

async def populate_initial_data():
    """Populate database with initial data from mock.js."""
    db = database.database
    
    # Course information
    course_data = {
        "id": "course-beit-nevim",
        "name": "Curso Teológico Beit Nevi'im",
        "description": "Um curso completo de teologia com base bíblica sólida e perspectiva profética contemporânea.",
        "duration": "2 anos",
        "modality": "Presencial e Online",
        "price": "R$ 350,00/mês",
        "next_start": "Março 2025"
    }
    await db.courses.insert_one(course_data)
    
    # Curriculum data
    curriculum_data = [
        {
            "id": "1",
            "semester": "1º Semestre",
            "subjects": [
                "Introdução à Teologia",
                "História Bíblica do Antigo Testamento",
                "Hermenêutica Bíblica",
                "Grego Bíblico I"
            ],
            "order": 1
        },
        {
            "id": "2", 
            "semester": "2º Semestre",
            "subjects": [
                "História Bíblica do Novo Testamento",
                "Teologia Sistemática I",
                "Homilética I",
                "Grego Bíblico II"
            ],
            "order": 2
        },
        {
            "id": "3",
            "semester": "3º Semestre",
            "subjects": [
                "Teologia Sistemática II",
                "Escatologia",
                "Ministério Pastoral",
                "Hebraico Bíblico I"
            ],
            "order": 3
        },
        {
            "id": "4",
            "semester": "4º Semestre",
            "subjects": [
                "Teologia Prática",
                "Apologética",
                "Missões",
                "Hebraico Bíblico II"
            ],
            "order": 4
        }
    ]
    await db.curriculum.insert_many(curriculum_data)
    
    # Professors data
    professors_data = [
        {
            "id": "1",
            "name": "Dr. Samuel Oliveira",
            "specialty": "Teologia Sistemática",
            "credentials": "PhD em Teologia, 15 anos de experiência",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            "order": 1,
            "active": True
        },
        {
            "id": "2",
            "name": "Dra. Maria Santos",
            "specialty": "Hermenêutica Bíblica",
            "credentials": "Mestre em Estudos Bíblicos, 12 anos de experiência",
            "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            "order": 2,
            "active": True
        },
        {
            "id": "3",
            "name": "Rev. João Silva",
            "specialty": "Homilética e Oratória",
            "credentials": "Bacharel em Teologia, 20 anos de ministério",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            "order": 3,
            "active": True
        },
        {
            "id": "4",
            "name": "Pr. Ana Costa",
            "specialty": "Línguas Bíblicas",
            "credentials": "Especialista em Hebraico e Grego, 10 anos de ensino",
            "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            "order": 4,
            "active": True
        }
    ]
    await db.professors.insert_many(professors_data)
    
    # Gallery data
    gallery_data = [
        {
            "id": "1",
            "title": "Aula de Teologia Sistemática",
            "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
            "order": 1,
            "active": True
        },
        {
            "id": "2",
            "title": "Biblioteca do Instituto",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            "order": 2,
            "active": True
        },
        {
            "id": "3",
            "title": "Estudos em Grupo",
            "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
            "order": 3,
            "active": True
        },
        {
            "id": "4",
            "title": "Cerimônia de Formatura",
            "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
            "order": 4,
            "active": True
        },
        {
            "id": "5",
            "title": "Aula de Línguas Bíblicas",
            "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            "order": 5,
            "active": True
        },
        {
            "id": "6",
            "title": "Campus do Instituto",
            "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
            "order": 6,
            "active": True
        }
    ]
    await db.gallery.insert_many(gallery_data)
    
    # Testimonials data
    testimonials_data = [
        {
            "id": "1",
            "name": "Pedro Almeida",
            "role": "Ex-aluno - Turma 2023",
            "testimonial": "O curso transformou minha compreensão das Escrituras e me preparou para o ministério pastoral.",
            "active": True,
            "order": 1
        },
        {
            "id": "2",
            "name": "Mariana Ferreira",
            "role": "Ex-aluna - Turma 2022",
            "testimonial": "Professores excelentes e uma base teológica sólida que me ajuda no ministério todos os dias.",
            "active": True,
            "order": 2
        },
        {
            "id": "3",
            "name": "Carlos Rocha",
            "role": "Ex-aluno - Turma 2024",
            "testimonial": "Além do conhecimento teológico, aprendi a arte da pregação expositiva de forma prática.",
            "active": True,
            "order": 3
        }
    ]
    await db.testimonials.insert_many(testimonials_data)
    
    logger.info("Database populated with initial data")