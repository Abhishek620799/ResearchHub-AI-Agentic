from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import papers  # Import the router you just created

app = FastAPI(title="ResearchHub AI API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(papers.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to ResearchHub AI API"}