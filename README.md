# Simple Retrieval-Augmented Generation (RAG) Web App

## Frontend (ReactJS + Vite)
    - Single-page chat app
    - Maintains sessionId (UUID) locally
    - Displays conversation between user and AI

## 🛠 Technologies Used
- **Frontend**: ReactJS (Vite)

---
##  Setup Frontend Project
```shell
# Create project
npm create vite@latest rag-spa -- --template react

cd rag-spa

# Install dependencies
npm install

# Add UUID library for sessions
npm install uuid
```

## 🚀 How to Run

### Backend
```bash
cd rag-api
./mvnw spring-boot:run
```
### Frontend
````shell
cd rag-spa
npm install
npm run dev

Frontend URL: http://localhost:5173
````