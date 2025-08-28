# 🌐 Personal Portfolio Website

A full-stack **MERN Portfolio Website** with an interactive **Admin Dashboard** for managing skills, projects, blogs, and messages.  
This project showcases my work, skills, and journey in AI/ML, Web Development, and Generative AI.  

---

## 🚀 Tech Stack

- **Frontend:** React.js, TailwindCSS, Framer Motion, Lucide Icons, Recharts  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **State Management:** React Context API + Reducers  
- **API Calls:** Axios (with JWT Authorization)  
- **Other:** React Hot Toast, Responsive & Animated UI  

---

## 📑 Features

- 🔐 **Admin Authentication (JWT)** – secure login for managing content  
- 🏠 **Homepage** – modern, animated hero section with intro and highlights  
- 👤 **About Page** – details about me, my skills, and career journey  
- 📰 **Blog Page** – CRUD blogs with admin access  
- 💼 **Projects Page** – portfolio projects with details and categories  
- ✉️ **Contact Page** – message form + message management in dashboard  
- 📊 **Admin Dashboard**  
  - Overview with animated stats & charts (skills, blogs, projects, messages)  
  - CRUD operations for Skills, Projects, Blogs, and Messages  
  - Responsive design with beautiful animations  

---

## 📂 Project Structure

```bash
my-portfolio/
│── backend/              # Express + MongoDB API
│   ├── models/           # Mongoose Models (Project, Skill, Blog, Message)
│   ├── routes/           # API Routes
│   ├── controllers/      # Business Logic
│   ├── middleware/       # JWT Auth Middleware
│   └── server.js         # Backend Entry
│
│── frontend/             # React + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/   # Reusable Components
│   │   ├── pages/        # Pages (Home, About, Blog, Contact, Project, Dashboard)
│   │   ├── context/      # Context API (Auth, Blogs, Projects, etc.)
│   │   ├── hooks/        # Custom Hooks
│   │   └── App.js        # Entry
│   └── package.json
│
└── README.md
