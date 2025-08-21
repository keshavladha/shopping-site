# 🛒 Shopping Site - Payment Gateway

A simple **Payment Gateway Form** built with **Node.js (Express)**, **MySQL2**, and **EJS**.  
It collects user details (name, email, address, etc.) and stores them into a MySQL database.

---

## 🚀 Features
- User-friendly Bootstrap form
- Stores details in MySQL database
- Confirmation page after form submission
- `/payments` endpoint to view saved data (JSON)

---

## 📂 Project Structure
Shopping Site/
│── index.js # Main server file
│── package.json
│── package-lock.json
│── README.md
│── .gitignore
│── .env # Environment variables (not pushed to GitHub)
│
├── views/ # EJS templates
│ ├── payment.ejs
│ └── success.ejs
└── node_modules/

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone repo
```bash
git clone https://github.com/your-username/shopping-site.git
cd shopping-site
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup MySQL database
sql
Copy
Edit
CREATE DATABASE shoppingdb;
USE shoppingdb;

CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name  VARCHAR(50) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  address    VARCHAR(255) NOT NULL,
  city       VARCHAR(100) NOT NULL,
  state      VARCHAR(50)  NOT NULL,
  zip        VARCHAR(20)  NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
4. Add environment variables
Create a .env file:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=shoppingdb
PORT=8080
5. Run project
bash
Copy
Edit
node index.js
Visit 👉 http://localhost:8080/payment

📌 API Endpoints
GET /payment → Payment form

POST /payment → Save data

GET /payments → Show all payments (JSON)

👨‍💻 Author
Keshav Ladha
📧 Email: keshavladha24@gmail.com
🔗 GitHub: [https://github.com/keshavladha]

