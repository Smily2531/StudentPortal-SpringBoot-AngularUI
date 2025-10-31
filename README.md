🎓 StudentPortal - Spring Boot + Angular UI
🧾 Project Overview

StudentPortal is a full-stack web application developed using Spring Boot and Angular.
It manages student records and visually represents their academic performance through a clean, dynamic table UI.

The system highlights students with marks below 50 in blood red, while others are shown in a calm aqua-blue shade, providing a clear distinction between passed and failed students.

This project demonstrates strong integration between the Spring Boot REST API (Backend) and Angular UI (Frontend) with modern, realistic styling.

🌟 Key Features

✅ Display all student records in a responsive, stylish table
✅ Dynamic row coloring based on performance
🔴 Red → Marks below 50
🩵 Peaceful Aqua Blue-Green → Marks 50 and above
✅ Modern glassmorphism design for a professional dashboard look
✅ Separate backend (Spring Boot) and frontend (Angular) folder structure
✅ Simple, clean, and user-friendly interface

🗂️ Project Structure
StudentPortal-SpringBoot-AngularUI/
│
├── backend/                       # Spring Boot backend (Eclipse project)
│   ├── src/
│   │   └── main/
│   │       ├── java/com/studentapi/
│   │       │   ├── controller/
│   │       │   ├── model/
│   │       │   └── service/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── frontend/                      # Angular frontend (VS Code project)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── student-list/
│   │   │   │       ├── student-list.component.html
│   │   │   │       ├── student-list.component.css
│   │   │   │       └── student-list.component.ts
│   │   │   └── services/
│   │   │       └── cseapiservice.service.ts
│   │   └── assets/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
└── README.md

🧰 Technologies Used
Layer	Technology
Frontend	Angular 17+, TypeScript, HTML5, CSS3
Backend	Java 17+, Spring Boot 3.x
Database	MySQL / H2
Tools	VS Code, Eclipse IDE, Postman, GitHub
💻 How to Run the Project
🧩 Backend (Spring Boot)

Open the backend folder in Eclipse or IntelliJ IDEA.

Configure the database in application.properties (optional if using H2).

Run the following command:

mvn spring-boot:run


The backend will run at:
👉 http://localhost:8084
<img width="1852" height="697" alt="image" src="https://github.com/user-attachments/assets/501073bd-a905-4e46-806e-0e43729d95b5" />

🌐 Frontend (Angular)

Open the frontend folder in VS Code.

Install dependencies using:

npm install


Start the Angular application:

ng serve --open


The UI will run at:
👉 http://localhost:4200
<img width="1676" height="768" alt="image" src="https://github.com/user-attachments/assets/75dc48b0-feeb-413b-a37c-33d745faee21" />

🖼️ Application Preview
🎓 Student Records Output

Below is the actual output from the application showing real-time color-coded student records.

🩵 Students with marks ≥ 50 are highlighted in a soft aqua blue shade
🔴 Students with marks < 50 are highlighted in deep blood red

🚀 Future Enhancements

➕ Add new student record form
✏️ Edit and update student details
❌ Delete student records
🔍 Search and filter by branch or city
📊 Analytics dashboard showing pass/fail ratio

🔗 GitHub Repository

👉 StudentPortal-SpringBoot-AngularUI

❤️ Developed By

👩‍💻 Nakka Smily
🎓 B.Tech 4th Year, Computer Science & Engineering
🏫 Aditya College of Engineering & Technology (A)
📍 Kakinada, Andhra Pradesh

✨ “A simple yet powerful student management system built with precision, clarity, and clean UI.”
