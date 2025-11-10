import os
from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, APIRouter
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import create_db_and_tables
from app.routers import (
    auth, users, farms, climate, activities,
    soil, forum, climate_actions, chatbot,
    badges, notifications
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting up and creating database tables...")
    create_db_and_tables()
    yield
    print("Shutting down...")

app = FastAPI(lifespan=lifespan)

# --- ✅ UPDATED CORS SETUP ---
prod_origin = os.getenv("CORS_ORIGIN", "https://mitti-verse.vercel.app")

origins = [
    prod_origin,
    "https://mitti-verse.vercel.app",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Static Files ---
app.mount("/static", StaticFiles(directory="static"), name="static")


# --- ROUTER CONFIGURATION ---
api_router = APIRouter(prefix="/api")

api_router.include_router(auth.router)
api_router.include_router(users.router)
api_router.include_router(farms.router)
api_router.include_router(climate.router)
api_router.include_router(activities.router)
api_router.include_router(soil.router)
api_router.include_router(forum.router)
api_router.include_router(climate_actions.router)
api_router.include_router(chatbot.router)
api_router.include_router(badges.router)
api_router.include_router(notifications.router)


app.include_router(api_router)



# --- Root Route ---
@app.get("/")
def read_root():
    return {"message": "Welcome to the MittiVerse API"}
