from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 1. Setup CORS (Cross-Origin Resource Sharing)
# This is crucial! It allows your Next.js app (running on :3000) 
# to securely request data from your FastAPI app (running on :8000).
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],
)

# 2. Define Routes
@app.get("/")
async def root():
    return {"message": "Helo World from FastAPI"}
