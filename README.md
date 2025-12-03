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

### Local Development Debugging
- **Python: FastAPI** - Debug the backend locally
- **Next.js: Chrome** - Debug frontend in Chrome
- **Next.js: Edge** - Debug frontend in Edge
- **Next.js: Server** - Debug Next.js server-side code
- **Next.js: Full Stack** - Debug both server and client simultaneously

### Docker Container Debugging

To debug the backend running in a Docker container:

1. **Start containers with debug mode:**
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
   ```

2. **Attach debugger in VS Code:**
   - Go to "Run and Debug" (Ctrl+Shift+D)
   - Select "Python: Docker Attach"
   - Press F5 to attach to the running container
   - Set breakpoints in `backend/main.py`
   - Make a request to `http://localhost:8000/api/hello`

The debug server will wait for the debugger to attach before starting. Once attached, you can:
- Set breakpoints
- Step through code
- Inspect variables
- All while the code runs inside the Docker container

**Note:** The dev compose file also mounts source code as volumes, so changes are reflected immediately without rebuilding.
