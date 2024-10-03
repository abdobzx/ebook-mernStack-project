

# E-Book Project (MERN Stack with Vite)

## Description
This project is an e-book platform built for a Canadian client. The application allows users to browse, purchase, and read e-books online. It is developed using the MERN stack (MongoDB, Express, React, Node.js), and Vite is used as the frontend build tool for fast development.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (signup/login)
- Browse e-books by categories, authors, and ratings
- Purchase e-books using a payment gateway (Stripe integration)
- Read e-books directly in the browser (reader mode)
- Admin panel for managing e-books, users, and orders
- Responsive design for all devices

## Technologies
- **Frontend**: React with Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe
- **Hosting**: AWS (EC2 for backend, S3 for file storage, CloudFront for CDN)

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud database like MongoDB Atlas)
- Stripe account for payment processing

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/abdobzx/ebook-project.git
   cd ebook-project
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Set up environment variables (see below).

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server with Vite:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Environment Variables
Create a `.env` file in the `server` directory with the following:

```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

## Usage

- Run the backend server:
  ```bash
  cd server
  npm start
  ```

- Run the frontend server:
  ```bash
  cd client
  npm run dev
  ```

- Open the application in your browser at `http://localhost:3000`.

## API Endpoints
Here are some example API routes:

### Auth
- `POST /api/auth/signup` - Create a new user
- `POST /api/auth/login` - Log in a user

### Books
- `GET /api/books` - Get a list of books
- `POST /api/books` - Add a new book (Admin)

### Orders
- `POST /api/orders` - Create an order
- `GET /api/orders` - Get user orders

## Contributing
If you want to contribute to this project, feel free to open a pull request or create an issue. Please follow the standard guidelines for code contributions.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

