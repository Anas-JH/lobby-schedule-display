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
git clone <your_repository_url>
cd lobby-schedule-display
