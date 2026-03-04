from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/api/papers", tags=["papers"])

class User(BaseModel):
    id: str
    email: str

class PaperImport(BaseModel):
    title: str
    authors: str
    year: str
    abstract: str

async def get_current_user():
    return User(id="user_123", email="user@example.com")

async def query_academic_databases(query: str) -> List[dict]:
    return [
        {
            "title": f"Agentic AI Research related to '{query}'",
            "authors": "Abhishek, et al.",
            "year": "2024",
            "abstract": "This paper discusses the integration of Groq models into autonomous workflows."
        },
        {
            "title": f"Advanced FastApi Architectures",
            "authors": "Jane Doe",
            "year": "2023",
            "abstract": "Exploring optimal router and dependency injection patterns."
        }
    ]

async def store_paper(paper_data: PaperImport, user_id: str):
    imported_dict = paper_data.dict()
    imported_dict["user_id"] = user_id
    imported_dict["id"] = "db_paper_999"
    return imported_dict

@router.get("/search")
async def search_papers(
    query: str = Query(..., alias="q"),
    current_user: User = Depends(get_current_user)
):
    search_results = await query_academic_databases(query)
    return search_results

@router.post("/import")
async def import_paper(
    paper_data: PaperImport,
    current_user: User = Depends(get_current_user)
):
    imported_paper = await store_paper(paper_data, current_user.id)
    return {"message": "Paper imported successfully", "paper": imported_paper}