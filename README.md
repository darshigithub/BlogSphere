📖 BlogSphere

BlogSphere is a full-stack blogging platform built with ReactJS (frontend) and Spring Boot + MySQL (backend). It allows users to signup, login, create blogs, view blogs, and delete blogs, with a modern Bootstrap-styled UI.

🚀 Features

🔑 User Authentication (Signup/Login)

✍️ Create and Manage Blogs

📜 View All Blogs or Individual Blog Details

🗑️ Delete Blog (only by the creator)

🎨 Styled UI with Bootstrap

🛠️ Tech Stack

Frontend: ReactJS, Axios, Bootstrap Backend: Spring Boot, REST API, JPA, MySQL Database: MySQL Deployment Ready: AWS EC2 / S3

⚡ Getting Started Backend (Spring Boot)

Navigate to backend project
cd blog-backend

Build & run
mvn spring-boot:run

Runs on: http://localhost:8080

Frontend (ReactJS)

Navigate to frontend
cd blog-frontend

Install dependencies
npm install

Start React app
npm start

Runs on: http://localhost:3000

📂 API Endpoints

POST /api/auth/signup → Register user

POST /api/auth/login → User login

POST /api/blogs → Create blog

GET /api/blogs → Get all blogs

GET /api/blogs/{id} → Get blog by ID

DELETE /api/blogs/{id} → Delete blog

🌐 Deployment

Frontend → Host on AWS S3 / Vercel / Netlify

Backend → Deploy on AWS EC2 / Elastic Beanstalk

Database → MySQL on AWS RDS

