### 🍬 Sweet Shop Management System – Frontend

### 📌 Project Overview
Sweet Shop Management System Frontend ek modern, responsive Single Page Application (SPA) hai jo users aur admins ko sweets browse, purchase aur manage karne ki facility deta hai.  
Yeh frontend secure backend APIs ke saath integrate hota hai aur role-based access follow karta hai.

---

### 🎯 Key Objectives
- Clean and intuitive UI
- Secure authentication flow
- Real-time inventory updates
- Admin & User role separation
- Production-ready deployment

---

### 🛠 Tech Stack
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- JavaScript (ES6+)

---

### 📁 Folder Structure
src/
│
├── auth/
│ ├── Login.jsx → Login screen (User & Admin)
│ ├── Register.jsx → User registration
│ └── ProtectedRoute.jsx → Route protection (JWT + Role)
│
├── components/
│ ├── Navbar.jsx → Top navigation bar
│ ├── SweetCard.jsx → Sweet display card
│ └── SearchBar.jsx → Search & filter input
│
├── pages/
│ ├── Landing.jsx → Public landing page
│ ├── Dashboard.jsx → User dashboard
│ └── AdminPanel.jsx → Admin-only management panel
│
├── services/
│ └── api.js → Axios configuration & interceptors
│
├── App.jsx → Route definitions
├── main.jsx → App bootstrap
└── index.css → Tailwind styles


---

### 🔐 Authentication & Authorization
- JWT-based authentication
- Token stored securely in `localStorage`
- Axios interceptor automatically attaches token
- Protected routes for authenticated users
- Admin-only routes restricted using role check

---

### 👤 User Features
- Register & Login
- View all available sweets
- Search sweets by name or category
- Purchase sweets (quantity auto-decreases)
- Purchase disabled when stock is zero
- Real-time feedback using toast notifications

---

### 👑 Admin Features
- Admin login using role-based authentication
- View all sweets
- Add new sweets
- Update price & quantity
- Delete sweets
- Inventory management panel

---

### 🔄 API Integration
All API communication is handled via Axios.

```js
baseURL = VITE_API_BASE_URL
Authorization = Bearer <JWT_TOKEN>


Handled API actions:

Auth (login/register)

Fetch sweets

Purchase sweet

Admin CRUD operations

🎨 UI & UX Design

Fully responsive layout

Tailwind CSS utility-first styling

Hover effects & smooth transitions

Clear empty states & loading states

User-friendly error & success toasts

🌍 Environment Variables

Create a .env file in frontend root:

VITE_API_BASE_URL= https://sweet-shop-management-system-backend-3.onrender.com/api

🚀 Running Locally
# Install dependencies
npm install

# Start dev server
npm run dev


Frontend runs at: https://sweet-shop-management-system-fronte-neon.vercel.app/

http://localhost:5173 //Locally

☁️ Deployment

Platform: Vercel

Auto-deploy on GitHub push

Environment variables configured in Vercel dashboard

Optimized Vite production build

🧪 Testing Strategy (Planned)

Component-level testing

Auth flow validation

Protected route testing

API error handling checks

🤖 My AI Usage
Tools Used

ChatGPT (OpenAI)

How AI Was Used

UI structure planning

Debugging React & CORS issues

Improving component structure

Writing clean README documentation

Reflection

AI helped speed up development and problem-solving, but all final architectural decisions, logic flow, and UI behavior were manually reviewed and implemented to ensure correctness and deep understanding.

✅ Conclusion

This frontend application is:

✔ Clean & scalable

✔ Secure & role-based

✔ User-friendly & responsive

✔ Production-ready

It demonstrates strong frontend engineering practices and real-world application design.
