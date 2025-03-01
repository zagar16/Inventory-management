# Inventory Management System

A full-stack inventory management system built with Next.js, Express, and PostgreSQL, deployed on AWS.

## 🌐 Deployment
[View Application](https://master.d8aebdh7vz8yy.amplifyapp.com/)

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- React 19
- Redux Toolkit for state management
- Material-UI (MUI) for components
- TailwindCSS for styling
- Recharts for data visualization

### Backend
- Express.js
- PostgreSQL with Prisma ORM
- TypeScript

### Infrastructure
- AWS Amplify (Frontend hosting)
- AWS EC2 (Backend hosting)
- AWS RDS (PostgreSQL database)
- AWS S3 (Image storage)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/zagar16/Inventory-management.git
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install

   # Create .env file with:
   DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database_name"
   PORT=3001

   # Setup database
   npx prisma generate
   npx prisma db push
   npm run seed

   # Start server
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install

   # Create .env file with:
   NEXT_PUBLIC_BASE_URL="http://localhost:3001"

   # Start development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001
