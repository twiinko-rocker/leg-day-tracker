# leg-day-tracker

Leg Day Tracker 🦵

A fun full-stack workout tracker that helps users set a leg day goal, track completed sessions, and visualize progress through gamified level images that evolve as consistency improves.

⸻

Features

* Set a leg day session goal
* Track completed workouts
* Progress bar visualization
* Gamified level progression images
* Password-protected frontend access
* MongoDB data persistence

⸻

Tech Stack

Frontend

* React
* Vite
* JavaScript
* CSS

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

Deployment

* Netlify (Frontend)
* Render (Backend)

⸻

Run Locally

1. Clone the repository

git clone https://github.com/twiinko-rocker/leg-day-tracker
cd leg-day-tracker

⸻

2. Install dependencies

Client

cd client
npm install

Server

cd server
npm install

⸻

.env note:

   Create a .env file in the server folder with:
   MONGODB_URI=your_mongodb_uri
   PORT=3000
   APP_PASSWORD=your_password

3. Start the development servers

Backend

cd server
node index.js

Frontend

cd client
npm run dev

⸻

Live Demo: https://tw-leg-day-tracker.netlify.app/