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

## Setup

Clone repository:

```bash
git clone <repo-url>
cd ExpensePilot