Project Video Link Task 1:
==================== Project Description ====================

![Screenshot 2024-09-30 192244](https://github.com/user-attachments/assets/71684dd9-e9fd-43d4-b026-f90fc48436dd)

![Screenshot 2024-09-30 192259](https://github.com/user-attachments/assets/82133ada-44e0-4860-a059-2be261d6259a)

![Screenshot 2024-09-30 192716](https://github.com/user-attachments/assets/da467257-8fc7-435b-8ff6-5558be80b817)


### **Objective:

Create a multi-page web application with a frontend using EJS (Embedded JavaScript) for templating and a backend built with Node.js, Express, and MongoDB. The project should follow the **MVC (Model-View-Controller)** architecture.

### **Requirements:**

1. **Pages to Implement:**
    - **Home** (e.g., a welcoming page with an introduction to the website).
    - **About** (a page with information about the website/company).
    - **Contact** (a form to collect user queries; data should be saved in MongoDB).
    - **Product** (a list of products retrieved from MongoDB, displayed on the frontend).
2. **Backend:**
    - Use **Node.js** and **Express** to handle server-side logic.
    - **MongoDB** should be used for storing dynamic data (like product information or contact form submissions).
    - Follow the **MVC pattern** to structure your application:
        - **Models:** Handle the database schema and interactions.
        - **Views:** Create EJS templates for each page.
        - **Controllers:** Manage the logic for each route and interact with the models.
    - Set up the application so that the root URL ("/") serves the Home page.
3. **Frontend (EJS):**
    - Use **EJS** to render dynamic content on all pages.
    - Pass data from the controllers to the views using EJS.
    - Ensure that each page (Home, About, Contact, Product) has a consistent layout (e.g., a common header and footer).
4. **Database (MongoDB):**
    - Store dynamic data like:
        - **Products**: Each product should have fields like name, price, description, and image URL.
        - **Contact submissions**: Save user queries in a collection with fields like name, email, and message.
    - Set up a **MongoDB connection** using the `mongoose` library.
5. **Routing:**
    - Implement routing using Express for each page:
        - GET `/` → Home Page
        - GET `/about` → About Page
        - GET `/contact` → Contact Page
        - POST `/contact` → Handle form submission and save it to MongoDB.
        - GET `/products` → Display a list of products from MongoDB..

### **Instructions:**

1. **Setup:**
    - Initialize your project using `npm init`.
    - Install the necessary dependencies: `express`, `mongoose`, `ejs`, and any other libraries you may need (e.g., `dotenv`).
    - Create a `.gitignore` file to exclude `node_modules` and sensitive files (e.g., `.env`).

    
3. **Submission:**
    - Upload your project to GitHub.
    - Provide a link to your GitHub repository along with any additional instructions on how to run the project locally.

### **Evaluation Criteria:**

1. **Correct Implementation of MVC Pattern (25%)**
2. **Proper Use of EJS for Templating (20%)**
3. **Working MongoDB Integration (20%)**
4. **Routing and Form Handling (20%)**
5. **Code Quality and Project Structure (15%)**
