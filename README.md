# Hello Antigravity - Docker Setup

This project consists of a Next.js frontend and a FastAPI backend, both dockerized for easy deployment.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
.
├── backend/          # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/         # Next.js frontend
│   ├── src/
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Running with Docker

### Build and run both services:

```bash
docker-compose up --build
```

This will:
- Build the backend Docker image
- Build the frontend Docker image
- Start both services
- Frontend will be available at `http://localhost:3000`
- Backend API will be available at `http://localhost:8000`

### Run in detached mode:

```bash
docker-compose up -d
```

### Stop the services:

```bash
docker-compose down
```

### View logs:

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
```

## Development (Without Docker)

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

The frontend uses `NEXT_PUBLIC_BACKEND_URL` to connect to the backend:
- **Docker**: Set to `http://backend:8000` (service name)
- **Local development**: Defaults to `http://localhost:8000`

See `.env.example` for reference.

## Debugging

VS Code launch configurations are available in `.vscode/launch.json`:
- **Python: FastAPI** - Debug the backend
- **Next.js: Chrome** - Debug frontend in Chrome
- **Next.js: Edge** - Debug frontend in Edge
- **Next.js: Server** - Debug Next.js server-side code
- **Next.js: Full Stack** - Debug both server and client simultaneously
