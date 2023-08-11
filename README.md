# Academic-Sphere-Capstone-project
Student Management System

## AUTHORS:
Paul Nadola Oyinga
Emmanuel Mang
Mike Manoti Nyambenga
Kennedy Munini Muinde
Tomno Vivian Jelagat 

# Learning Goals
Build a a school management system using React frontend and Python (flask) backend. The system should link different users in a school to access their various resources.

# Introduction
Academic Sphere is a comprehensive School Management System designed to streamline various aspects of school administration, including user management, student assessments, result tracking, and communication between different user roles. The system caters to five distinct user types: Superadmin, Admin, Teacher, Student, and Parent. Each user type is granted specific access privileges to ensure efficient and organized management of school-related tasks.

# Project Description
Academic Sphere offers an integrated platform where different users can interact with the system based on their roles. The project is divided into frontend and backend components, with the frontend built using React and Vite, while the backend is developed using Python Flask, connected to a PostgreSQL database managed through pgAdmin. Cloudinary is utilized for image storage.

# How to Install and Run the Project
# Backend Setup:
1. Ensure you have Python installed on your system.
2. Install the required Python packages by navigating to the backend directory and running:
   `pip install -r requirements.txt` 

3. Configure the PostgreSQL database settings in the config.py file.
4. Run the Flask server using the following command:
   `python app.py`

# Frontend Setup:
1. Install Node.js and npm (Node Package Manager) if not already installed.
2. Navigate to the frontend directory and install project dependencies:
   `npm install`
3. Run the development server:
   `npm run dev`
4. The frontend will be accessible at `http://localhost:5173/` 

# How to Use the Project
1. Super Admin
    i. Log in with superadmin credentials to access all features.
    ii. Manage users, including admins, teachers, students, and parents.
    iii. Monitor system activities and perform administrative tasks.
2. Admin
    i. Log in with admin credentials to access admin-specific pages.
    ii. View and manage students assigned to your admin account.
    iii. Grade students and manage assessments.
3. Teacher
    i. Log in with teacher credentials to access teacher-specific functionalities.
    ii. Record student assessments and grades.
    iii. Collaborate with students and parents through the system.
4. Student
    i. Log in as a student to access your personalized dashboard.
    ii. View assessment results and academic progress.
    iii. Interact with teachers and access learning materials.
5. Parent
    i. Log in with parent credentials to view your child's academic information.
    ii. Access student results, assessments, and communication from teachers.

For the backend, ensure you have the PostgreSQL database configured correctly in the config.py file. The backend server will run on `http://localhost:5555.` 

