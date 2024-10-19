# This file can be left empty
from fastapi import FastAPI
from src.api.routers import users

app = FastAPI()

app.include_router(users.router)
