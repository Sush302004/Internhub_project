# InternHub — Setup & Run Guide

## Project Structure

```
internhub-project/
└── backend/                  ← Everything runs from here
    ├── core/                 ← Django project config + page views
    ├── courses/              ← REST API (courses & certificates)
    ├── templates/            ← HTML pages (served by Django)
    ├── static/
    │   ├── css/style.css
    │   └── js/app.js
    ├── manage.py
    └── requirements.txt
```

---

## ✅ Prerequisites

- **Python 3.10+** — https://python.org  
- No Node.js, no npm, no build step needed.

---

## 🚀 Run Everything with ONE Command

Open **one terminal** and run:

```bash
# 1. Go into the backend folder
cd internhub-project/backend

# 2. Create a virtual environment
python -m venv venv

# 3. Activate it
#    Windows:
venv\Scripts\activate
#    Mac / Linux:
source venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Apply database migrations
python manage.py migrate

# 6. Start the server
python manage.py runserver
```

Open your browser at: **http://localhost:8000**

That's it. Frontend + Backend = one server, one port.

---

## 📋 Pages

| Page            | URL                                     |
|-----------------|-----------------------------------------|
| Home            | http://localhost:8000/                  |
| Login           | http://localhost:8000/login/            |
| Register        | http://localhost:8000/register/         |
| Internships     | http://localhost:8000/internships/      |
| Courses         | http://localhost:8000/courses/          |
| Applications    | http://localhost:8000/applications/     |
| Assessments     | http://localhost:8000/assessments/      |
| Resume Upload   | http://localhost:8000/resume/           |
| Django Admin    | http://localhost:8000/admin/            |

## 🔌 API Endpoints

| Method | URL                       | Description                  |
|--------|---------------------------|------------------------------|
| GET    | /api/courses/             | List all courses              |
| POST   | /api/courses/complete/    | Submit quiz, get certificate  |

---

## ⚙️ Notes

- Uses **SQLite** — no database install needed.
- Auth (login/register) is stored in browser `sessionStorage`.
- Do NOT open HTML files directly in browser — always use http://localhost:8000
