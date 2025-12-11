---
title: Costs
description: A project cost management application to track budgets, services and expenses with an intuitive interface.
date: "2025-12-11"
image: "/images/posts/costs.png"
tags:
  - React
  - JavaScript
  - Front-End
  - LocalStorage
slug: costs
githubURL: "https://github.com/nicolas4pitz/reactCosts"
liveSiteURL: "https://reactcostsproject.vercel.app/"
---

Costs is a project management application designed to help users track budgets and control expenses. It allows creating projects with defined budgets, adding services with individual costs, and monitoring the total spending in real-time.

The application is built with **React 18** and **React Router 6**, featuring a clean and responsive interface. All data is persisted locally using the browser's **localStorage**, making it fully functional without the need for an external backend.

The project follows a modular component structure, separating concerns between layout components, form elements, and page views. Each project can have multiple services attached, with automatic cost calculation and budget validation to prevent overspending.


## Features
- Create and manage multiple projects with custom budgets
- Add, edit and remove services within each project
- Real-time cost tracking and budget validation
- Category-based project organization
- Fully offline data persistence with localStorage
- Clean, responsive UI with modular CSS


## Future Improvements
- Add data export/import functionality
- Implement project search and filtering
- Add charts for visual cost analysis
- Support for multiple users with cloud sync


## Technologies
- React 18
- React Router 6
- React Icons
- CSS Modules
- localStorage API