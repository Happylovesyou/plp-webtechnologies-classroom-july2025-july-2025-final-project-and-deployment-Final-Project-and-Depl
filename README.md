# MINI-ITU-App

**Mini ITU App** is a lightweight, fully functional web application built to simulate the functionalities of the ITU reporting system. It allows users to submit reports about issues in their community and view reports through an admin dashboard. This project serves as a proof-of-concept for deployment and full-stack integration.

---

## 🛠 Features

### **User Features**
- Submit reports with:
  - Name
  - Location
  - Issue description
- Confirmation message after successful submission.

### **Admin Features**
- View all reports submitted.
- Display report details:
  - Name
  - Location
  - Issue
  - Date of submission

### **Tech Highlights**
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- API communication using Axios
- Cross-Origin Resource Sharing enabled with `cors`
- Environment variables managed using `dotenv`

---

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


---

## ⚙️ Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/Happylovesyou/MINI-ITU-APP.git
cd MINI-ITU-APP

### ***2. Backend set up
   cd Backend
   npm install
   
Creeate .env file:
MONGO_URI=<your MongoDB Atlas connection string>
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
Frontend: [Add your deployed frontend URL here]
Backend API: [Add your deployed backend URL here]

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
