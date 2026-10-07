# Project setup

1. create two folder frontend and backend
2. go to frontend `cd frontend`
    - type `npm create vite@latest`
    - press `Y` if asked to install
    - enter `.` in project name
    - select 'react' as framework from arrow key
    - select JavaScript from variant by arrow key
    - select ESLint by arrow key
    - select Yes and press enter

3. setup tailwind in react project 
   - install tailwind css using `npm install tailwindcss @tailwindcss/vite`
   - open vite.config.js as below image 
   ![alt text](image.png)
   - add `@import "tailwindcss"`in index.css

   In styles can be added into html files className because class is a predefined keyword in react.

   when js function returns directly html contents, called component, 