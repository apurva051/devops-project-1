# 🚀 DevOps Project - Cloud-Based Django & React Application

## 📌 Overview

This project demonstrates an end-to-end DevOps workflow by deploying a containerized full-stack web application on Microsoft Azure.

The application consists of:

- Django REST Framework Backend
- React Frontend
- PostgreSQL Database
- Docker & Docker Compose
- GitHub Actions CI/CD Pipeline
- Docker Hub Image Registry
- Azure Virtual Machine Deployment

The project showcases modern DevOps practices including containerization, continuous integration, continuous deployment, and cloud hosting.

---

# 🏗️ Project Architecture

```
                Developer
                    │
              Git Push (main)
                    │
                    ▼
             GitHub Repository
                    │
                    ▼
          GitHub Actions (CI/CD)
                    │
      ┌─────────────┴─────────────┐
      │                           │
Build Backend Image        Build Frontend Image
      │                           │
      └─────────────┬─────────────┘
                    │
            Push Images to Docker Hub
                    │
                    ▼
               Azure Virtual Machine
                    │
             Docker Compose Pull
                    │
             Docker Compose Up
                    │
      ┌─────────────┴─────────────┐
      │                           │
 Django Backend             React Frontend
      │
 PostgreSQL Database
```

---

# ⚙️ Tech Stack

## Backend

- Python
- Django
- Django REST Framework

## Frontend

- React
- JavaScript
- HTML
- CSS

## Database

- PostgreSQL

## DevOps

- Docker
- Docker Compose
- GitHub Actions
- Docker Hub
- Azure Virtual Machine
- Linux (Ubuntu)

---

# 📂 Project Structure

```
devops-project-1
│
├── backend/
│   ├── Dockerfile
│   └── Django Application
│
├── frontend/
│   ├── Dockerfile
│   └── React Application
│
├── .github/
│   └── workflows/
│       └── docker.yml
│
├── docker-compose.yml
├── README.md
└── requirements.txt
```

---

# 🐳 Docker

The application has been fully containerized.

Containers:

- Django Backend
- React Frontend
- PostgreSQL Database

Docker Compose is used to orchestrate all services.

---

# ☁️ Azure Deployment

The application is hosted on an Azure Ubuntu Virtual Machine.

Deployment includes:

- Docker Engine
- Docker Compose
- PostgreSQL
- Containerized Backend
- Containerized Frontend

---

# 🔄 CI/CD Pipeline

GitHub Actions automates:

- Source Code Checkout
- Docker Image Build
- Docker Hub Login
- Push Backend Image
- Push Frontend Image
- Automatic Deployment to Azure VM

Workflow:

```
Developer
    │
Git Push
    │
    ▼
GitHub Actions
    │
Build Docker Images
    │
Push Docker Hub
    │
SSH Azure VM
    │
docker compose pull
    │
docker compose up -d
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/apurva051/devops-project-1.git
```

---

## Start Application

```bash
docker compose up -d
```

---

## Stop Application

```bash
docker compose down
```

---

# 📦 Docker Images

Backend

```
apurva051/django-backend
```

Frontend

```
apurva051/react-frontend
```

---

# 🎯 Features

- Full Stack Application
- REST APIs
- PostgreSQL Integration
- Dockerized Services
- Docker Compose Orchestration
- Azure Cloud Deployment
- GitHub Actions CI/CD
- Docker Hub Integration

---

# 📚 Learning Outcomes

This project helped gain hands-on experience with:

- Docker Image Creation
- Docker Compose
- Azure Virtual Machines
- Linux Administration
- Git & GitHub
- GitHub Actions
- Continuous Integration
- Continuous Deployment
- Containerized Application Deployment

---

# 👤 Author

**Apurva Panchal**

GitHub: https://github.com/apurva051

LinkedIn: https://www.linkedin.com/in/apurvapanchal
