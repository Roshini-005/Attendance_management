# Attendly Attendance Management System

A responsive React/Vite dashboard for college attendance with an Express, MongoDB, JWT backend.

## Run locally

1. Install frontend dependencies: `npm install`
2. Install API dependencies: `cd server`, then `npm install`
3. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI` and `JWT_SECRET`.
4. Start MongoDB Atlas access for your IP and create the database user.
5. Start the API: `npm run dev` in `server`.
6. Start the frontend: from the project root, run `npm run dev`.
7. Open the frontend and use **First time setup** to create the first admin account.

There is no seed script, demo account, mock user, or static attendance data. Admin creates departments, faculty, students, subjects, and enrollments through the UI. Real API calls use `VITE_API_URL`, defaulting to `http://localhost:5000/api`.

## API overview

- `POST /api/auth/login`, `POST /api/auth/register`
- `GET /api/admin/dashboard`
- `GET /api/faculty/dashboard`, `GET /api/faculty/subjects`
- `GET /api/student/dashboard`
- `GET|POST /api/students`, `PUT|DELETE /api/students/:id`
- `GET|POST /api/subjects`, `PUT|DELETE /api/subjects/:id`
- `GET|POST /api/departments`, `PUT|DELETE /api/departments/:id`
- `POST /api/enrollments`
- `GET|POST /api/attendance`

Attendance writes use an upsert keyed by student, subject, and date. The MongoDB unique index prevents duplicates. Student attendance reads are scoped to the authenticated student, and all protected routes require a JWT plus the appropriate role.

## Structure

- `src/`: responsive React dashboard, role switcher, login surface, and Axios API client.
- `server/server.js`: Express app, middleware, routes, validation/error handling, and dashboard calculations.
- `server/models.js`: Mongoose models and uniqueness indexes.
- `server/.env.example`: MongoDB Atlas and JWT configuration template.
