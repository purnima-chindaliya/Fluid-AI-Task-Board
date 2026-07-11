# Fluid AI Task Board

## Overview
This is a full-stack Task Board application developed as part of the Fluid AI assignment.

The application allows users to:
- Add tasks
- Mark tasks as completed
- Delete tasks
- Track task completion progress
- View task statistics
- Sort tasks by priority

## Tech Stack

### Frontend
- React
- Axios
- Vite

### Backend
- FastAPI
- Python
- Uvicorn

## Features
- Create tasks with priority (High, Medium, Low)
- Toggle task completion
- Delete tasks
- Progress percentage
- Total, Completed, and Pending task statistics
- Priority-based task sorting

## Project Structure

```
TaskBoardApp/
├── backend/
│   ├── main.py
│   └── requirements.txt
└── frontend/
    ├── src/
    ├── package.json
    └── App.jsx
```

## How to Run

### Backend

```bash
cd backend
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## GitHub Repository

https://github.com/purnima-chindaliya/Fluid-AI-Task-Board