# User Management System with Multi-Role Support

This project is a **User Management System** built using **JavaScript** (Node.js) and **PostgreSQL**. It supports multiple user roles, providing role-based access control (RBAC).

## Features

- **User Authentication**: Secure login/logout functionality.
- **Role-Based Access Control (RBAC)**: Different permissions for Admin, Manager, and User roles.
- **CRUD Operations**:
  - Create, Read, Update, Delete users.
  - Manage roles and permissions.
- **Database Integration**: PostgreSQL as the database.
- **API Architecture**: RESTful API design for modularity and scalability.

---

## Screenshots

### Authentication Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/loginpage.png" alt="Image 1" width="40%">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/registerpage.png" alt="Image 2" width="40%">
</div>

### Admin Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/admindashboardrole.png" alt="Image 1" width="40%">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/admindashboardproduct.png" alt="Image 2" width="40%">
</div>

### User Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/userdashboard.png" alt="Image 1" width="40%">
</div>

---

## Demo

Check out the live demo of the project:

[Live Demo](https://auth-user-6m52.vercel.app/)

---


## Prerequisites

- **Node.js** (v16 or later)
- **PostgreSQL** (v12 or later)
- Package manager: **npm** or **yarn**
- Code editor: **Visual Studio Code** or equivalent

---

## Getting Started

### 1. Clone the Repository
```bash
$ git clone https://github.com/wahyurifia/auth-user.git
$ cd auth-user
```

### 2. Install Dependencies
```bash
$ npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL="postgresql://postgres.hijqneieqtjcuznkdexk:authUser!23@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.hijqneieqtjcuznkdexk:authUser!23@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
PORT=5000
SESSION_SECRET="asdasdklamklfsaklfmsaklfmskalmdsasdhjefhjkjfnakjdsoosadn"
```

### 4. Database Setup
Run the SQL migrations to set up the database schema:

```bash
$ npm run migrate
```

### 5. Start the Application
```bash
$ npm run dev
```

The application will be available at `http://localhost:5000`.

---

## Example Account

Use the following example credentials to test the application:

- **Admin Account**:
  - Email: `admin@gmail.com`
  - Password: `admin123`

---

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login a user.
- `POST /api/auth/register` - Register a user.
- `POST /api/auth/logout` - Logout a user.

### Users
- `GET /user` - Get all users (Admin only).
- `POST /users` - Create a new user (Admin only).
- `GET /user/:id` - Get user details by ID.
- `PUT /user/:id` - Update user details (Admin/Manager).
- `DELETE user/:id` - Delete a user (Admin only).

  ### products
- `GET /product` - Get all users (Admin only).
- `POST /product` - Create a new user (Admin only).
- `GET /product/:id` - Get user details by ID.
- `PUT /product/:id` - Update user details (Admin/Manager).
- `DELETE /product/:id` - Delete a user (Admin only).

### Product All User
- `GET /products` - Get all products (Admin only).
- `PUT /product/:id` - Update product another user (Admin only).
- `DELETE /product/:id` - Delete product another user (Admin only).

## Technologies Used
- **Frontend**: React.js with Tailwindcss
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **Database Migration**: Prisma
- **Deployment**: Supabase

---

## Screenshots

### Authentication Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/loginpage.png" alt="Image 1" width="40%">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/registerpage.png" alt="Image 2" width="40%">
</div>

### Admin Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/admindashboardrole.png" alt="Image 1" width="40%">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/admindashboardproduct.png" alt="Image 2" width="40%">
</div>

### User Page

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/wahyurifia/auth-user/blob/main/client/public/img/userdashboard.png" alt="Image 1" width="40%">
</div>

---

## Contact

For questions or collaboration, please contact:

- **Name**: Wahyu Rifia Rizki
- **Email**: wahyurifia927@gmail.com
- **GitHub**: [wahyurifia](https://github.com/wahyurifia)
