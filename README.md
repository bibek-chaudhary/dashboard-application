# Dashboard Application (React + Redux)

A responsive **Dashboard-style web application** built using **React, Redux Toolkit, and TailwindCSS**.  
This project demonstrates real-world frontend skills such as **API integration, state management, pagination, search, filtering, responsive UI**, and a **professional Git workflow**.

The application is deployed on **Vercel** and uses a publicly available API (**DummyJSON**) for data.

---

## Live Demo

**View the deployed app:**  
https://dashboard-application-jade.vercel.app

> Open the link in desktop and mobile view to see responsive behavior.

---

## Project Objective

To build a dashboard application that:
- Fetches and displays data from a public API
- Allows searching, filtering, and pagination
- Uses Redux for predictable state management
- Follows clean code practices and version control standards
- Is fully responsive and production-ready

---

## Features

### Dashboard Layout
- Responsive layout built with **TailwindCSS**
- Sidebar navigation with:
  - **Home**
  - **Products**
- Sidebar collapses into a hamburger menu on small devices

---

### Home Page
- Simple dashboard landing page
- Overview-style layout
- Clean and minimal UI

---

### Products Page
- Fetches products from **DummyJSON API**
- Displays data in a responsive table
- **Search** products by name
- **Filter** products by category
- **Pagination** to navigate large datasets
- Loading indicators while fetching data
- User-friendly error handling for API failures

---

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for small screens
- Fully usable on desktop, tablet, and mobile

---

### State Management
- Global state handled using **Redux Toolkit**
- Centralized handling for:
  - Products
  - Pagination
  - Search
  - Filtering
  - Loading & error states

---

## Tech Stack

- **Frontend:** React 18
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Styling:** TailwindCSS
- **API:** DummyJSON (https://dummyjson.com)
- **Version Control:** Git & GitHub
- **Deployment:** Vercel

---


## How to Run the Project Locally

```b
1 Clone the Repository
git clone https://github.com/bibek-chaudhary/dashboard-application.git
cd dashboard-application
2️ Install Dependencies
npm install

3️ Start the Development Server
npm start

The app will be available at:
http://localhost:5173
