# ShopSphere – Full Stack E-Commerce Website

## Project Overview

ShopSphere is a full-stack eCommerce web application designed to provide a smooth online shopping experience. Users can browse products, view product details, manage their shopping cart, register, log in, place orders, view order history and print invoices.

## Live Demo

**Website:** https://ecommerce-platform-1ssocahgd-rutujashenduretech.vercel.app/

**GitHub Repository:** https://github.com/RutujaShenduretech/Ecommerce-Platform.git

## Technologies Used

### Frontend
- Next.js
- React.js
- JavaScript and TypeScript
- HTML5
- Tailwind CSS
- shadcn/ui

### Backend
- Next.js API Routes
- Node.js
- REST APIs

### Database
- PostgreSQL
- Neon Database
- Drizzle ORM

### Tools and Deployment
- Git and GitHub
- VS Code
- Postman
- Vercel

## Features

1. User registration and login.
2. Product listing and product details.
3. Product categories including Running, Women, Kids, Lifestyle and New Arrivals.
4. Shopping cart management.
5. Quantity updates and cart calculations.
6. Checkout and order placement.
7. Order history and dashboard.
8. Customer invoice generation and printing.
9. Responsive user interface.
10. PostgreSQL database integration.

## Project Structure

```text
ecommerce-website/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── login/
│   │   ├── register/
│   │   └── dashboard/
│   ├── components/
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   └── lib/
├── drizzle/
├── drizzle.config.ts
├── package.json
├── README.md
└── .gitignore
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd ecommerce-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root.

```env
DATABASE_URL="YOUR_NEON_POOLED_CONNECTION_STRING"
DIRECT_URL="YOUR_NEON_DIRECT_CONNECTION_STRING"
```

Add any other authentication or application environment variables required by the project.

Never commit actual database credentials to GitHub.

### 5. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Database Configuration

ShopSphere uses PostgreSQL with Drizzle ORM.

The database includes:

- users
- products
- cart_items
- orders
- order_items
- bills
- bill_items

Neon provides the hosted PostgreSQL database.

## Testing

The project uses Vitest for unit testing.

Run tests:

```bash
npm test -- --run
```

Create a production build:

```bash
npm run build
```

## Deployment

The frontend and Next.js application are deployed using Vercel.

The PostgreSQL database is hosted on Neon.

Deployment environment variables must be configured securely in Vercel.

## Author

**Rutuja Shendure**

Full Stack Developer | React.js | Next.js

## Conclusion

ShopSphere demonstrates the development of a full-stack eCommerce application using modern web technologies. It integrates frontend development, backend API functionality, database management, authentication, shopping cart operations, order processing and cloud deployment.