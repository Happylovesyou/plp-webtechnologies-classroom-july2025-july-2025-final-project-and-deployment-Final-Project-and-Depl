# MINI-ITU-App

**MINI ITU APP** is a simplified, functional demo version of the full **ITU App**, designed as a proof-of-concept for deployment and PLP submission. While the full ITU App is intended to help individuals, students, businesses, parents, and organizations **save money efficiently** and achieve their financial goals, the MINI-ITU-App demonstrates the core functionality in a web application that can be tested and deployed.

---

## **Project Overview**

The MINI-ITU-App focuses on **financial discipline and goal-oriented savings**. In the full ITU App:

* Users set a daily or target-specific saving goal.
* Accounts automatically “close” or restrict further withdrawals once the intended daily target is reached, minimizing the misuse of funds.
* The system helps users build consistent saving habits and reach their desired monetary goals.

The MINI-ITU-App, presented in this repository, is a **demo version** that mimics basic interactions of the full ITU App, showing:

* A working frontend and backend integration
* Submission and tracking of basic user data
* The foundation for more advanced savings features in future development

This project demonstrates the feasibility of the ITU App concept and lays the groundwork for the full application, which will require more development time to implement all the intended features.

---

## **Purpose of the MINI-ITU-App**

1. **Proof-of-Concept:** Demonstrates the ITU App idea in a deployable, testable form.
2. **Financial Discipline Simulation:** Shows how automated saving logic could work in a real app.
3. **PLP Submission Ready:** Provides a working full-stack application for Power Learn Project requirements.
4. **Foundation for Expansion:** Structured to support future enhancements, including account linking, automatic withdrawals, notifications, and analytics.

### **Tech Highlights**
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- API communication using Axios
- Cross-Origin Resource Sharing enabled with `cors`
- Environment variables managed using `dotenv`

## 📁 Project Structure

MINI-ITU-APP/
├── Backend/ # Backend server
│ ├── server.js # Express server entry point
│ ├── package.json # Backend dependencies
│ └── .env # Environment variables (MONGO_URI, PORT)
├── Client/ # React frontend
│ ├── public/ # Static files
│ ├── src/
│ │ ├── Components/ # React components
│ │ │ └── DataFetcher.js
│ │ ├── services/ # API service (Axios)
│ │ │ └── api.js
│ │ ├── App.js
│ │ └── index.js
│ └── package.json # Frontend dependencies
└── README.md

## ⚙️ Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/Happylovesyou/MINI-ITU-APP.git
cd MINI-ITU-APP

### ***2. Backend set up
   cd Backend
   npm install
   
Creeate .env file:
MONGO_URI=mongodb+srv://Happylovesyou:Happylovesyou@cluster0.tmzx1uo.mongodb.net/ITU_DB?retryWrites=true&w=majority
PORT=5000

Start the backend server
    *npm start*

 Expected Outpu:
    Server running on port 5000
    MongoDB connected

### ***3. Frontend Setup
   cd ../Client
   npm install
    npm start

. Frontend will run at http://localhost:3000
 .It fetches data from backend API automatically.

🧩 Usage:
.Open the frontend in your browser (localhost:3000)
 .Fill out the report form and submit
 .Open the admin page (/admin) to view submitted reports

 🌐 Deployment
The MINI-ITU-App is ready for deployment. You can deploy using Render or Vercel:

Backend
 .Type: Node.js Web Service
 .Environment Variables:
    -MONGO_URI → MongoDB Atlas
    - PORT → 5000
  .Start Command: node server.js

Frontend
 .Type: Static Site
 .Build Command: npm run build
 .Publish Directory: Client/build

📚 Key Notes:
  .This project was built as a proof-of-concept PLP project.
  .Designed to showcase full-stack development, frontend-backend integration, and deployment skills.
  .Includes environment variable management for security.
  .Structured for easy scaling into a full ITU App in the future.


 🔗 Live Demo
Frontend: 
Backend API:https://mini-itu-app.onrender.com

📦 Dependencies
Backend:
  -express
  -mongoose
  -cors
  -dotenv

Frontend:
  -react
  -react-dom
  -axios

  📝 Author
Rose Maina – Power Learn Project (PLP)
GitHub: https://github.com/Happylovesyou
