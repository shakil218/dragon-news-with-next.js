# 📰 Dragon News

Dragon News is a modern online news platform built with Next.js, React, MongoDB, and Better Auth. The platform allows users to browse the latest news, explore categorized articles, read detailed news content, and securely authenticate to access personalized features.

## 🚀 Live Demo

🔗 https://dragon-news-with-next-js.vercel.app

---

## 📌 Features

### 📰 News Management
- Browse latest news articles
- Read detailed news content
- Category-based news filtering
- Trending and breaking news sections
- Dynamic news pages

### 🔐 Authentication & Security
- User Registration
- User Login
- Session Management
- Protected Routes
- Secure Authentication using Better Auth

### 🎨 User Experience
- Fully Responsive Design
- Mobile-Friendly Layout
- Modern UI Components
- Toast Notifications
- Fast Navigation
- News Marquee for Breaking Headlines

### ⚡ Performance
- Server-Side Rendering with Next.js
- Optimized Image Loading
- Fast Page Navigation
- SEO-Friendly Architecture

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- React
- Lucide React
- React Icons
- React Toastify
- React Fast Marquee

### Backend
- Next.js Server Components
- Better Auth

### Database
- MongoDB
- Better Auth Mongo Adapter

### Utilities
- date-fns

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── page.js
│   ├── login/
│   ├── register/
│   ├── news/
│   └── categories/
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── NewsCard
│   ├── BreakingNews
│   └── Sidebar
│
├── lib/
│   ├── auth.js
│   └── mongodb.js
│
├── providers/
│
└── utils/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/shakil218/dragon-news-with-next.js.git
```

### Navigate to Project

```bash
cd dragon-news
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

### Start Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:3000
```

---

## 📦 Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run Linting

```bash
npm run lint
```

---

## 🔑 Authentication Flow

1. User registers an account.
2. Credentials are securely stored.
3. Better Auth manages sessions.
4. Protected pages require authentication.
5. Users remain logged in through session persistence.

---

## 🌟 Core Functionalities

- Homepage news feed
- Breaking news ticker
- News category browsing
- Dynamic article details page
- User authentication
- Secure session handling
- Responsive navigation
- Real-time notifications

---

## 📱 Responsive Design

Dragon News is optimized for:

- Desktop 💻
- Tablet 📱
- Mobile 📱

---

## 🔮 Future Improvements

- Search Functionality
- User Profile Dashboard
- Bookmark Articles
- Dark Mode
- Comments System
- News Reactions
- Admin Dashboard
- Newsletter Subscription

---

## 👨‍💻 Developer

**Md Shakil Islam**

GitHub:
https://github.com/shakil218

LinkedIn:
https://linkedin.com/in/md-shakil-islam-sagor

---

### ⭐ If you like this project, consider giving it a star on GitHub!
