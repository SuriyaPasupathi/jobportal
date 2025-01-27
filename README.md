<<<<<<< HEAD
# Job Portal Project

A full-stack job portal application that connects employers and job seekers. Built with Django REST Framework backend and React frontend.

## Project Overview

This job portal allows:
- Employers to post and manage job listings
- Job seekers to search and apply for positions
- User authentication and profile management
- Resume upload and management
- Application tracking system

## Project Structure
```
project-root/
├── backend/
│   ├── jobportal/
│   │   ├── employer/          # Employer related views and models
│   │   ├── jobseeker/         # Job seeker related views and models
│   │   ├── jobs/              # Job posting related functionality
│   │   └── core/              # Core application settings
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Job_post/      # Job posting components
    │   │   ├── Auth/          # Authentication components
    │   │   └── Profile/       # Profile management components
    │   ├── pages/
    │   └── App.js
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
# Create virtual environment
python -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
Create `.env` file in backend directory:
```env
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
```

5. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

6. Create admin user:
```bash
python manage.py createsuperuser
```

7. Start backend server:
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:8000/api
```

4. Start development server:
```bash
npm start
```

## Main Features

### For Employers
- Post job openings
- Manage job listings
- View applications
- Search candidate profiles
- Schedule interviews

### For Job Seekers
- Search jobs by category/location
- Apply for positions
- Upload/manage resume
- Track application status
- Save favorite jobs

### Admin Features
- User management
- Content moderation
- Analytics dashboard
- Report generation

## API Endpoints

### Authentication
```
POST /api/auth/register/     # Register new user
POST /api/auth/login/        # Login user
POST /api/auth/logout/       # Logout user
```

### Jobs
```
GET    /api/jobs/           # List jobs
POST   /api/jobs/           # Create job
GET    /api/jobs/{id}/      # Job details
PUT    /api/jobs/{id}/      # Update job
DELETE /api/jobs/{id}/      # Delete job
```

### Applications
```
POST   /api/jobs/{id}/apply/    # Apply for job
GET    /api/applications/       # List applications
```

## Tech Stack

### Backend
- Django 4.x
- Django REST Framework
- PostgreSQL
- JWT Authentication

### Frontend
- React 18
- Redux for state management
- Material-UI components
- Axios for API calls

## Running Tests

### Backend Tests
```bash
python manage.py test
```

### Frontend Tests
```bash
npm test
```

## Deployment

1. Backend Production Settings:
```python
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
CORS_ALLOWED_ORIGINS = ['https://yourdomain.com']
```

2. Frontend Production Build:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
=======
# Job_Portal
>>>>>>> origin/develop
