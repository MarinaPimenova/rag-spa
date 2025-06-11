# Simple Retrieval-Augmented Generation (RAG) Web App

## Frontend (ReactJS + Vite)
    - Single-page chat app
    - Maintains sessionId (UUID) locally
    - Displays conversation between user and AI

## 🛠 Technologies Used
- **Frontend**: ReactJS (Vite)

---
## Requirements
1. Node 18 or higher
2. Git 2.0 or higher
3. NPM 10 or higher
 
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
#### Build
```shell
npm run build
```