# ExpensePilot — AI Expense Tracker

ExpensePilot is a full-stack MERN application for tracking personal expenses using AI-based receipt scanning and data visualization.

## Overview

This application allows users to upload receipts, automatically extract transaction details using AI, and manage expenses through a clean interface with analytics.

## Features

- User authentication (JWT)
- AI receipt scanning and data extraction
- Add, edit, and delete transactions
- Expense and income tracking
- Analytics dashboard with charts
- Date-based filtering
- Cloudinary image storage

## Tech Stack

Frontend:
- React (TypeScript)
- Tailwind CSS
- Vite

Backend:
- Node.js
- Express.js
- TypeScript

Database:
- MongoDB (Mongoose)

Services:
- Google Gemini API
- Cloudinary

## Project Structure

/backend  
  /src  
    /controllers  
    /models  
    /routes  
    /services  
    /middlewares  

/client  
  /src  
    /components  
    /pages  
    /features  
    /hooks  

## How to Run

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key
- Cloudinary account

### Setup

1. Extract the zip file and open the project folder

2. Install backend dependencies
   cd backend
   npm install

3. Install frontend dependencies
   cd client
   npm install

4. Create a .env file in /backend with:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret

5. Run the backend
   cd backend
   npm run dev

6. Run the frontend
   cd client
   npm run dev

7. Open http://localhost:5173 in your browser

## Additional Notes
- A .env.example file is included — copy it to .env and fill in your keys
- Gemini API free tier is sufficient to run this project
- Receipt scanning requires a valid image upload (JPEG/PNG)