# 📋 Student Enrollment Form — Login2Explore Micro Project

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_3-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JsonPowerDB](https://img.shields.io/badge/JsonPowerDB-JPDB-orange?style=for-the-badge)
![REST API](https://img.shields.io/badge/REST-API-green?style=for-the-badge)
![Serverless](https://img.shields.io/badge/Serverless-Architecture-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

---

## 📖 Description

**Student Enrollment Form using JPDB** is a micro-project built as part of the **Login2Explore** training program. It is a lightweight, serverless web application that allows users to enroll students into a database using the **JsonPowerDB (JPDB) REST API** — with zero backend code and zero database configuration overhead.

The form captures essential student details such as Roll Number, Full Name, Class, Birth Date, Address, and Enrollment Date. It performs real-time record lookup by Roll Number to intelligently switch between **Insert (Save)** and **Update (Change)** modes, ensuring no duplicate entries and a smooth data management experience.

This project demonstrates how modern NoSQL, REST API-based databases like JsonPowerDB can be integrated directly into a plain HTML + JavaScript frontend, eliminating the need for any traditional server-side technology.

---

## ✨ Features

- 🔍 **Smart Roll Number Lookup** — On entering a Roll Number, the form automatically queries JPDB and pre-fills existing data if a record is found
- 💾 **Save (Insert)** — Saves new student records to the JsonPowerDB database when no existing record is detected
- ✏️ **Change (Update)** — Updates existing student records in-place without creating duplicates
- 🔄 **Reset** — Clears the form and resets button states to their initial condition
- 🎯 **Intelligent Button State Management** — Save, Change, and Reset buttons are dynamically enabled/disabled based on the current form state
- ⚡ **Real-Time AJAX Requests** — All database operations use asynchronous AJAX calls for fast, non-blocking interactions
- 🌐 **Serverless Architecture** — No backend server or server-side scripting required; runs entirely in the browser
- 📱 **Responsive Layout** — Built with Bootstrap 3 for compatibility across desktop and mobile viewports
- 🔒 **Token-Based API Authentication** — Uses JPDB connection tokens to authenticate database requests securely

---

## 🗂️ Form Fields

| Field | Type | Description |
|---|---|---|
| Roll No | Text | Primary key used to identify and look up students |
| Full Name | Text | Student's complete name |
| Class | Number | Class or grade the student is enrolled in |
| Birth Date | Date | Student's date of birth |
| Address | Text | Residential address of the student |
| Enrollment Date | Date | Date the student was enrolled |

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure and form markup |
| CSS3 | Styling via Bootstrap 3 |
| JavaScript (ES5) | Client-side logic and form control |
| jQuery 3.5.1 | DOM manipulation and AJAX request handling |
| Bootstrap 3.4.1 | Responsive UI layout and button styling |
| JsonPowerDB (JPDB) | Cloud-hosted NoSQL database with REST API |
| jpdb-commons.js | Official JPDB JavaScript utility library |
| Login2Explore API | REST API endpoint for CRUD operations |

---

## 🗄️ About JsonPowerDB (JPDB)

[JsonPowerDB](https://login2explore.com/jpdb/) is a real-time, high-performance, lightweight, schema-free, and simple-to-use REST API-based multi-mode DBMS. Key characteristics relevant to this project:

- **Schema-Free** — No need to pre-define tables, columns, or relationships before inserting data
- **Real-Time & In-Memory** — Powered by the **PowerIndex** engine, one of the fastest real-time data indexing engines available
- **REST API-First** — All CRUD operations are performed via HTTP JSON requests — no SQL, no ORMs
- **True Serverless Support** — Applications connect directly from the browser to the JPDB API endpoint, cutting development and deployment time significantly
- **Multi-Mode Database** — Supports JSON document DB, Key-Value DB, RDBMS, GeoSpatial DB, and Time Series DB in a single instance
- **Multiple Security Layers** — Connection tokens ensure authenticated and authorized access to database relations
- **Minimum Development Cost** — Developers write only frontend code; the database handles all data persistence logic

**JPDB API Endpoint used in this project:**
```
http://api.login2explore.com:5577
```

---

## 📁 Project Structure

```
Micro-Project-Work_Login2Explore/
│
├── index.html          # Main application UI — student enrollment form
├── index.js            # JavaScript logic — CRUD operations via JPDB REST API
└── README.md           # Project documentation
```

### File Descriptions

**`index.html`** — Contains the Bootstrap-styled student enrollment form with six input fields and three control buttons (Save, Change, Reset). Loads jQuery, Bootstrap, the official `jpdb-commons.js` library, and the custom `index.js` script.

**`index.js`** — Contains all the JavaScript functions that power the application:
- `getStu()` — Triggered on Roll Number input change; queries JPDB to check if a record exists and populates the form or enables Save mode accordingly
- `saveData()` — Constructs a PUT request and inserts a new student record into JPDB
- `changeData()` — Constructs an UPDATE request and modifies an existing record in JPDB
- `resetForm()` — Clears all form fields and resets all button states to their default (disabled) configuration

---

## ⚙️ Prerequisites

Before running this project locally, ensure you have:

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- A **Login2Explore account** — [Register here for free](https://login2explore.com)
- A valid **JPDB Connection Token** obtained from your Login2Explore dashboard
- An active internet connection (required for JPDB API calls)

---

## 🚀 How to Run the Project Locally

### Step 1 — Clone the Repository

```bash
git clone https://github.com/sroy3333/Micro-Project-Work_Login2Explore.git
cd Micro-Project-Work_Login2Explore
```

### Step 2 — Configure Your JPDB Connection Token

Open `index.js` and replace the placeholder connection token with your own token from the Login2Explore dashboard:

```javascript
var connToken = "YOUR_CONNECTION_TOKEN_HERE";
var dbName    = "SCHOOL-DB";      // Your database name in JPDB
var relName   = "STUDENT-TABLE";  // Your relation/table name in JPDB
```

> ⚠️ **Important:** Never commit your actual connection token to a public repository. Consider using a `.env` approach or reading the token from a config file excluded via `.gitignore` for production use.

### Step 3 — Open in Browser

Since this project has no server-side dependencies, simply open `index.html` directly in your browser:

```bash
# On Linux / macOS
open index.html

# On Windows
start index.html

# Or drag and drop index.html into your browser window
```

No `npm install`, no `pip install`, no server startup required.

---

## 🔄 How the Application Works

```
User enters Roll No
        │
        ▼
getStu() fires → JPDB GET_BY_KEY request
        │
   ┌────┴────┐
   │         │
Record     No record
found       found
   │         │
   ▼         ▼
Pre-fill   Enable
  form      [Save]
Enable
[Change]
[Reset]
        │
        ▼
User submits via [Save] or [Change]
        │
   ┌────┴────┐
   │         │
 [Save]   [Change]
   │         │
   ▼         ▼
 PUT req   UPDATE req
to JPDB    to JPDB
        │
        ▼
 Success → resetForm()
```

---

## 📌 Scope of Functionalities

- ✅ Insert new student records (Save)
- ✅ Retrieve and display existing records by Roll Number
- ✅ Update existing student records (Change)
- ✅ Reset form to default state
- ✅ Prevent duplicate entries via primary key (Roll No) validation
- ✅ Real-time asynchronous database communication

---

## 💡 Examples of Use

This project pattern — a simple data-entry form backed by JPDB — can be extended or adapted for:

- **Online Examination Registration** — Capture candidate details before an exam
- **Job Application Portal** — Collect applicant information and store it instantly
- **Library Membership Forms** — Register library members with no server overhead
- **Event Registration Systems** — Real-time participant data collection for workshops, seminars, and conferences
- **Patient Intake Forms** — Basic health record entry in clinical environments
- **Employee Onboarding Forms** — HR data capture during new hire processes

---

## 📚 Resources & Documentation

| Resource | Link |
|---|---|
| JsonPowerDB Official Docs | [login2explore.com/jpdb/docs.html](http://login2explore.com/jpdb/docs.html) |
| Login2Explore Course | [Introduction to JsonPowerDB V2.0](https://careers.login2explore.com/course/view.php?id=14) |
| JPDB API Endpoint | `http://api.login2explore.com:5577` |
| jpdb-commons.js CDN | `https://login2explore.com/jpdb/resources/js/0.0.3/jpdb-commons.js` |
| Bootstrap 3 Docs | [getbootstrap.com/docs/3.4](https://getbootstrap.com/docs/3.4/) |
| jQuery Docs | [api.jquery.com](https://api.jquery.com/) |

---

## 🕓 Release History

| Version | Description |
|---|---|
| **v1.0.0** | Initial release — Student Enrollment Form with JPDB integration, Save, Change, and Reset functionality |

---

## 🏆 Certification Context

This project was developed as part of the **Login2Explore Micro Project Work** training program, which demonstrates:

- Practical understanding of **JsonPowerDB** as a REST API-based NoSQL database
- Ability to perform **CRUD operations** (Create, Read, Update) without any server-side language
- Proficiency in integrating **AJAX-based REST API calls** within a vanilla JavaScript / jQuery frontend
- Application of **serverless architecture principles** in real-world web form development

---

## 👩‍💻 Author

**Sukanya Roy**
[![GitHub](https://img.shields.io/badge/GitHub-sroy3333-181717?style=flat-square&logo=github)](https://github.com/sroy3333)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 sroy3333

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  <p>Built as part of the Login2Explore Micro Project Work program.</p>
  <p>
    <a href="https://github.com/sroy3333/Micro-Project-Work_Login2Explore/issues">Report a Bug</a> ·
    <a href="https://github.com/sroy3333/Micro-Project-Work_Login2Explore">View Repository</a> ·
    <a href="https://login2explore.com/jpdb/docs.html">JPDB Docs</a>
  </p>
</div>
