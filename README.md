# Restaurant Management System

A full-stack web application for managing restaurant reservations, menus, and customer orders. Built with **React** for the frontend, **Spring Boot** for the backend, and **MySQL** for the database. Features include real-time table booking, user authentication, and an admin dashboard.

**Key Features:**
Real-time table availability updates
Interactive menu with add-to-cart functionality
Role-based access control (admin, customer)

**Technologies Used:**
- Frontend: React, Bootstrap
- Backend: Spring Boot, REST APIs
- Database: MySQL
- Tools: Git, Docker, Postman

  Database Design
User Table

id (BIGINT - Primary Key): This field serves as the primary key, ensuring each user has a unique identifier.
username (VARCHAR(255)): Stores the username of the user.
password (VARCHAR(255)): Represents the hashed and salted password of the user.
email (VARCHAR(255)): Contains the email address of the user.
role (VARCHAR(50)): Denotes the role of the user, which can be "Admin," "Normal User," or "Visitor."
is_signed_up (BOOLEAN): Indicates whether the user is signed up (true) or not (false).
is_signed_in (BOOLEAN): Indicates whether the user is currently signed in (true) or not (false).
created_at (TIMESTAMP): Records the timestamp of when the user account was created.


Food Item Table

id (BIGINT - Primary Key): A unique identifier for each food item.
name (VARCHAR(255)): The name of the food item.
description (TEXT): Provides a detailed description of the food item.
price (DECIMAL(10,2)): Stores the price of the food item with two decimal places.
type (VARCHAR(50)): Represents the type of food item (e.g., "Appetizer," "Main Course").


Order Table

id (BIGINT - Primary Key): A unique identifier for each order.
user_id (BIGINT - Foreign Key): A foreign key referencing the user who placed the order.
food_item_id (BIGINT - Foreign Key): A foreign key referencing the ordered food item.
status (VARCHAR(50)): Indicates the status of the order, such as "Placed" or "Delivered."
order_date (TIMESTAMP): Records the timestamp when the order was placed.


Dependencies
The project utilizes the following dependencies:

Spring Boot Starter Data JPA: Simplifies database access using Spring Data repositories.

Spring Boot Starter Web: Provides support for building web applications, including RESTful APIs.

MySQL Connector/J (Runtime Dependency): The MySQL JDBC driver for connecting to MySQL databases.

Project Lombok (Optional): A library for reducing boilerplate code, such as getters and setters.

Spring Boot Starter Test (For Testing): Provides support for testing Spring Boot applications.

Springdoc OpenAPI (Swagger UI): Adds Swagger UI for documenting and testing API endpoints.

Spring Boot Starter Validation: Includes validation support for request data binding and response data rendering.

JavaMail API: Used for sending emails.

Spring Security: Ensures secure authentication and authorization for your application.

**Live Demo:** [View Demo](https://restaurant-management-system.com)

**How to Get Started:**
1. Clone the repository:
   ```bash
   git clone https://github.com/Tejadeep1/restaurant-management-system.git
