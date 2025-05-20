# Lobby Schedule Display

A full-stack web application designed to display upcoming appointments in a clear, "airport schedule" style, suitable for waiting rooms in clinics, salons, or any service business managing daily appointments.

![Lobby Schedule Display Screenshot](<https://github.com/Anas-JH/lobby-schedule-display/blob/f22cb339fed587b63c21a3a5aff971755b37c4ab/Screenshot%20(428).png>) 

---

## 🎯 Purpose

*   To provide a clean, easily readable public display of scheduled appointments for a given day.
*   To improve the client/patient experience by keeping them informed.
*   To serve as a practical full-stack development project, integrating a Python/Django backend with a React frontend.

---

## ✨ Features

*   **Backend Admin Interface:** Appointments are managed (created, updated, deleted) via the robust Django admin panel.
*   **Frontend Display Page:**
    *   Displays appointments for a selected date.
    *   Defaults to showing today's appointments.
    *   Styled to resemble a clear, dark-themed schedule board.
    *   Automatically refreshes appointment data periodically (polling).
*   **Date Filtering:** Users can select a date to view appointments for that specific day.
*   **API for Appointments:** A RESTful API built with Django REST Framework serves appointment data to the frontend.
    *   Supports listing and filtering appointments (e.g., by date, status).

---

## 🛠️ Tech Stack

**Backend:**
*   Python 3.11+
*   Django 5.2+
*   Django REST Framework (for API)
*   `django-filter` (for API filtering)
*   `django-cors-headers` (for Cross-Origin Resource Sharing)
*   SQLite (as the database for development)

**Frontend:**
*   React 18+ (with Vite)
*   JavaScript (ES6+)
*   CSS3 (custom styling for components)
*   Axios (for API calls)

**Development Environment:**
*   Python Virtual Environment (`venv`)
*   Node.js and npm
*   Git for version control

---

## 🚀 Setup and Run Instructions

To get this project up and running locally, follow these steps:

**Prerequisites:**
*   Python 3.11+ and Pip
*   Node.js (which includes npm)
*   Git

**1. Clone the Repository:**
```bash
git clone https://github.com/Anas-JH/lobby-schedule-display.git
cd lobby-schedule-display

**2. Backend Setup:**
```bash
# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv env
source env/Scripts/activate
```


```bash
# Apply database migrations
python manage.py makemigrations appointments
python manage.py migrate

# Create a superuser to access the Django admin
python manage.py createsuperuser 
# (Follow the prompts to set a username, email, and password)

# Run the Django development server 
python manage.py runserver
```
*   You can now access the Django admin at /admin/ to add/manage appointments.

**3. Frontend Setup:**
```bash
# Open a new terminal or navigate out of the backend directory
# Navigate to the frontend directory (from the project root)
cd frontend

# Install frontend dependencies
npm install

# Run the React development server
npm run dev
```
*   Open your browser and navigate to the port specified by Vite to see the lobby display.

---

## 🧠 Development Journey & Challenges Overcome

This project was a valuable learning experience, and like any development process, it came with its share of challenges:

1.  **Initial Python Environment and Django Setup:**
    *   **Challenge:** Ensuring VS Code's Python interpreter was correctly linked to the project's virtual environment to resolve import errors for Django modules (e.g., `Import "django.urls" could not be resolved`).
    *   **Solution:** Manually selecting the interpreter path (`backend/env/Scripts/python.exe`) within VS Code's command palette (`Python: Select Interpreter`). Understanding that Pylance needs to see the packages installed *within* the venv.

2.  **Django Migrations:**
    *   **Challenge:** Understanding the necessity and workflow of `makemigrations` (generating the schema change instructions) and `migrate` (applying those changes to the database). Initially, I wanted to skip this to learn as I went, but quickly realized models are unusable without corresponding database tables.
    *   **Solution:** Stepping through the process: defining the model, running `makemigrations <app_name>`, inspecting the generated migration file to understand its purpose, and then running `migrate`.

3.  **Django REST Framework API URL Configuration:**
    *   **Challenge:** Getting a 404 error when trying to access the API endpoint (`/api/appointments/`). The error message "Using the URLconf defined in `core.urls`, Django tried these URL patterns... The current path... didn't match any of these" was key.
    *   **Solution:** Realizing that the project-level `core/urls.py` was missing the `include()` for the `appointments` app's URLs. Correctly structuring `core/urls.py` to delegate `api/` paths to `appointments/urls.py`, and then setting up the DRF `DefaultRouter` in `appointments/urls.py`.

4.  **Filtering with `django-filter`:**
    *   **Challenge:** An initial `TypeError: 'Meta.fields' must not contain non-model field names: appointment_datetime__date` when trying to use a `__date` lookup directly in `filterset_fields` of the `ModelViewSet`.
    *   **Solution:** Creating a custom `FilterSet` class (`AppointmentFilter` in `filters.py`) to explicitly define the `DateFilter` for `appointment_datetime` using `lookup_expr='date'`, providing more control and a cleaner URL parameter (`appointment_date`).

5.  **Cross-Origin Resource Sharing (CORS):**
    *   **Challenge:** Frontend (React on `localhost:5173`) being unable to fetch data from the backend (Django on `localhost:8000`) due to browser security policies.
    *   **Solution:** Installing and configuring `django-cors-headers` in the Django backend: adding it to `INSTALLED_APPS` and `MIDDLEWARE`, and specifying `CORS_ALLOWED_ORIGINS` in `settings.py` to include the frontend's development server URL.

6.  **Styling Approach (Tailwind CSS vs. Pure CSS):**
    *   **Challenge:** Initial attempt to use Tailwind CSS encountered some setup friction.
    *   **Solution:** Pivoting to a pure CSS approach using separate CSS files for components (`App.css`, `ScheduleBoard.css`, `ScheduleRow.css`). This allowed for more direct control and quicker progress given comfort levels, while still achieving the desired dark-themed "airport board" aesthetic. Careful structuring of CSS classes and imports was key.

---

## 💡 Future Enhancements (Potential Next Steps)

*   More dynamic frontend status updates (e.g., "Now Showing", "Delayed" based on current time).
*   Visual cues for different statuses (e.g., flashing, more distinct colors).
*   User authentication for accessing/modifying API endpoints (beyond admin).
*   Support for multiple rooms/locations with dedicated displays.
*   Real-time updates using WebSockets instead of polling.
*   Enhanced accessibility features.

---

Thank you for checking out Lobby Schedule Display!
```
