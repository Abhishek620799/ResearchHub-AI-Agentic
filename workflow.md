# ResearchHub AI  
## Intelligent Research Paper Management and Analysis System using Agentic AI  



#  Complete System Workflow


##  User Authentication Workflow

Start  
↓  
User Registration / Login  
↓  
Password hashed using bcrypt (Passlib)  
↓  
JWT token generated using python-jose  
↓  
Token validated for protected routes  
↓  
User redirected to Dashboard  

All secured API endpoints require valid JWT authentication.

---

##  Research Paper Discovery Workflow

User enters research query  
↓  
Frontend (React + TypeScript) sends request to FastAPI backend  
↓  
Backend queries academic database APIs  
↓  
Retrieve metadata (Title, Authors, Date, Abstract)  
↓  
Return curated search results  
↓  
User selects desired paper  
↓  
One-click Import to Workspace  



##  Paper Import & Storage Workflow

Selected paper metadata saved into relational database  
↓  
Abstract/content processed  
↓  
Paper associated with selected workspace  
↓  


##  Vector Embedding & Context Preparation Workflow

Paper abstract converted into vector embeddings  
(using sentence-transformers)  
↓  
Embeddings stored in vector store  
↓  
Used for semantic similarity search  
↓  
Relevant documents retrieved during AI queries  


##  AI Chatbot Processing Workflow (Groq Integration)

User asks research-specific question  
↓  
Backend retrieves relevant papers using vector similarity  
↓  
Context prepared dynamically  
↓  
Groq Llama 3.3 70B model invoked (temperature: 0.3)  
↓  
Model generates contextual AI response  
↓  
Response sent to frontend chatbot interface  
↓  
Conversation stored in database  
↓  
Workspace-specific context maintained  



##  Workspace & Knowledge Management Workflow

User creates multiple workspaces (e.g., Deep Learning, Medical Imaging)  
↓  
Papers organized project-wise  
↓  
AI maintains workspace-specific conversation context  
↓  
Conversation history stored securely  
↓  
Research insights tracked and managed  



##  Security & System Integration Workflow

CORS configured (React: Port 3000 ↔ FastAPI: Port 8000)  
↓  
JWT-based route protection enabled  
↓  
Secure API communication ensured  
↓  
FastAPI handles concurrent requests  
↓  
Sensitive research data protected  



##  Deployment & Testing Workflow

Backend launched using:
uvicorn main:app --reload  

Frontend launched using:
npm start  

↓  
End-to-end testing performed  




#  End-to-End Flow Summary

User Login  
↓  
Search Research Papers  
↓  
Import Paper to Workspace  
↓  
Store Metadata in Database  
↓  
Generate Vector Embeddings  
↓  
Ask AI Question  
↓  
Retrieve Relevant Context  
↓  
Groq LLM Analysis  
↓  
Display AI Insights  
↓  
Store Conversation  
↓  
End  
