# ShopSphere — Week 2 Front-End Development

## YuvaIntern Junior Full Stack Developer Internship

### Week 2: Front-End Application Development

ShopSphere is a modern, responsive eCommerce front-end application inspired by premium sports and lifestyle shopping experiences.

The project focuses on creating a clean, interactive, responsive, and user-friendly shopping interface using Next.js, React, TypeScript, and Tailwind CSS.

---

## 1. Project Overview

**Project Name:** ShopSphere

**Project Type:** eCommerce Web Application

**Internship:** YuvaIntern — Junior Full Stack Developer Intern

**Week:** Week 2 — Front-End Application Development

ShopSphere provides users with an interactive shopping experience where they can browse products, explore different categories, view product details, add products to a shopping cart, manage cart quantities, and navigate between different sections of the website.

The interface is designed with a premium sports-fashion aesthetic and responsive layouts for desktop, tablet, and mobile devices.

---

## 2. Objectives

The main objectives of Week 2 were:

* Build a functional eCommerce front-end.
* Create multiple interconnected pages.
* Implement responsive layouts.
* Create reusable React components.
* Implement product browsing and product details.
* Implement shopping cart functionality.
* Add interactive navigation.
* Provide a premium and modern UI.
* Maintain clean and modular project structure.
* Ensure the application works across different screen sizes.

---

## 3. Technologies Used

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML5
* CSS3

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm
* Browser Developer Tools

### Frontend Concepts

* Next.js App Router
* React Components
* React Hooks
* Client Components
* Context API
* State Management
* Local Storage
* Responsive Design
* Dynamic Routes

---

## 4. Main Features

### Home Page

The homepage provides:

* Premium hero section
* Promotional content
* Category sections
* Featured products
* Responsive navigation
* Call-to-action buttons
* Product discovery sections

---

### Shop / Products Page

The Shop page provides:

* Product listing
* Product cards
* Product images
* Product names
* Prices
* Ratings
* Product categories
* Product navigation
* Responsive product grid

---

### Product Details Page

Each product has a dedicated dynamic page.

Features include:

* Product image
* Product name
* Product category
* Product price
* Previous price
* Product rating
* Product description
* Color selection
* Size selection
* Quantity selection
* Add to Cart functionality
* Wishlist button
* Product information

Dynamic route:

```text
/products/[id]
```

Example:

```text
/products/1
```

---

### Running Collection

A dedicated Running section provides products and content focused on running and active lifestyles.

Route:

```text
/products/running
```

---

### Lifestyle Collection

The Lifestyle section provides casual and everyday products.

Route:

```text
/products/lifestyle
```

---

### Women's Collection

The Women's section provides a dedicated premium shopping experience with:

* Hero section
* Category cards
* Featured products
* Responsive layouts
* Product navigation
* Promotional sections

Route:

```text
/women
```

---

### Kids Collection

The Kids section provides:

* Kids-focused hero section
* Kids categories
* Sports and lifestyle sections
* Kids product collection
* Responsive product cards
* Promotional CTA sections

Route:

```text
/kids
```

---

### Shopping Cart

The shopping cart is implemented using React Context API.

Users can:

* Add products to cart
* Increase quantity
* Decrease quantity
* Remove products
* View subtotal
* View total quantity
* Continue shopping
* Proceed to checkout

Route:

```text
/cart
```

Cart data is persisted using browser Local Storage.

---

### Navigation

The website includes a responsive navigation bar with links to:

* Home
* Shop
* Running
* Lifestyle
* Women
* Kids
* Login
* Register
* Cart

The cart icon dynamically displays the number of products currently in the cart.

---

## 5. Cart Management

ShopSphere uses React Context API for global cart management.

The cart context provides:

```text
addToCart()
removeFromCart()
updateQuantity()
clearCart()
cartCount
subtotal
```

Cart information is stored in:

```text
localStorage
```

using the key:

```text
shopsphere-cart
```

This allows cart information to remain available after refreshing the page.

---

## 6. Project Structure

```text
shopsphere/
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── running/
│   │   │   │   └── page.tsx
│   │   │   ├── lifestyle/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── women/
│   │   │   └── page.tsx
│   │   │
│   │   ├── kids/
│   │   │   └── page.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx
│   │   │
│   │   ├── support/
│   │   │   └── page.tsx
│   │   │
│   │   ├── company/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── HomeHero.tsx
│   │   ├── WomenHero.tsx
│   │   ├── LifestyleHero.tsx
│   │   └── RunningHero.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   └── types/
│       └── product.ts
│
├── public/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 7. Reusable Components

The project uses reusable components to reduce duplicate code.

### Navbar

Handles:

* Website navigation
* Desktop menu
* Mobile menu
* Cart count
* Authentication links

### Footer

Provides:

* Company information
* Navigation links
* Support links
* Social links
* Copyright information

### ProductCard

Reusable component for displaying:

* Product image
* Product name
* Price
* Rating
* Category
* Wishlist
* Product navigation

### Hero Components

Separate hero components are used for different sections to keep the code modular.

---

## 8. Responsive Design

The application is designed for:

* Mobile phones
* Tablets
* Laptops
* Desktop screens

Responsive Tailwind CSS utilities are used throughout the application.

Examples include:

```text
sm:
md:
lg:
xl:
```

The layouts automatically adjust based on screen size.

---

## 9. User Flow

The main shopping flow is:

```text
Home
  ↓
Shop
  ↓
Product Listing
  ↓
Product Details
  ↓
Select Size / Color
  ↓
Add to Cart
  ↓
Cart
  ↓
Review Items
  ↓
Checkout
```

Users can also navigate directly between product categories using the navigation bar.

---

## 10. Accessibility and Usability

The project includes basic accessibility and usability considerations:

* Semantic HTML elements
* Descriptive image alt text
* Keyboard-friendly buttons and links
* Clear navigation
* Responsive layouts
* Readable typography
* Adequate button sizes
* Visible interactive states
* Mobile-friendly navigation

---

## 11. UI/UX Design

The ShopSphere interface follows a premium minimalist sports-fashion design.

Design characteristics include:

* Large typography
* High-quality product imagery
* Rounded cards
* Minimal color palette
* Strong visual hierarchy
* Smooth hover interactions
* Responsive layouts
* Clear calls to action
* Spacious layouts
* Modern navigation

---

## 12. Interactive Features

The application includes several interactive features:

* Mobile navigation menu
* Hero slider
* Product selection
* Size selection
* Color selection
* Quantity controls
* Add to Cart
* Remove from Cart
* Cart count
* Local Storage persistence
* Hover animations
* Responsive product grids
* Dynamic product pages

---

## 13. Installation

Clone or download the project and open it in Visual Studio Code.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in the browser:

```text
http://localhost:3000
```

---

## 14. Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 15. Testing Checklist

The following functionality was tested during development:

* [x] Homepage loads correctly
* [x] Navigation works
* [x] Mobile navigation works
* [x] Product listing works
* [x] Product details work
* [x] Dynamic product routes work
* [x] Size selection works
* [x] Color selection works
* [x] Add to Cart works
* [x] Cart count updates
* [x] Cart page displays products
* [x] Quantity controls work
* [x] Remove from cart works
* [x] Cart subtotal updates
* [x] Local Storage saves cart data
* [x] Responsive layouts work
* [x] Category navigation works

---

## 16. Week 2 Deliverable

The Week 2 deliverable contains:

* Complete source code
* Responsive frontend
* Reusable React components
* Product pages
* Category pages
* Shopping cart
* Navigation system
* Local Storage cart persistence
* README documentation

---

## 17. Future Improvements

The following features can be implemented in future development phases:

* Backend API
* Database integration
* User authentication
* Real checkout system
* Payment gateway
* Order management
* Product search
* Advanced filtering
* Product reviews
* Wishlist persistence
* Admin dashboard
* Order tracking
* Backend validation

---

## 18. Conclusion

ShopSphere demonstrates the implementation of a modern eCommerce front-end using Next.js, React, TypeScript, and Tailwind CSS.

The project focuses on responsive design, reusable components, interactive shopping functionality, dynamic product pages, and a premium user experience.

The Week 2 implementation establishes the front-end foundation required for future backend and full-stack development.

---

## Week 3

**Rutuja Shendure**

MCA Graduate
Junior Full Stack Developer Intern — YuvaIntern

**Project:** ShopSphere
**Phase:** Week 3— REST API and CRUD  Application Development with Authentication

````

**One important correction before you submit:** your current product details page uses `@/data/product`, while your project structure/data file has been `products.ts`. Make sure the import matches the actual filename:

```tsx
import { products } from "@/data/products";
````

Also, because your Week 2 deliverable is a ZIP, include **`README.md` at the project root**, at the same level as `package.json`.


ShopSphere – Full Stack E-Commerce Application
ShopSphere is a modern, responsive e-commerce web application built using Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Drizzle ORM.
The project was developed as part of the YuvaIntern Junior Full Stack Developer Internship and demonstrates frontend development, backend REST APIs, database integration, authentication, CRUD operations, validation, and responsive UI design.
________________________________________
1. Project Overview
ShopSphere is a Nike-inspired e-commerce platform with an original interface and design.
The application allows users to:
•	Browse products
•	View product details
•	Add products to cart
•	Update product quantities
•	Remove products from cart
•	Register an account
•	Login securely
•	Logout
•	View user profile
•	Select payment methods
•	Place orders
•	View order information
The backend provides RESTful APIs for products, authentication, cart, and orders.
________________________________________
2. Objectives
The main objectives of this project are:
•	Build a responsive e-commerce frontend
•	Develop RESTful backend APIs
•	Implement CRUD operations
•	Connect the application with PostgreSQL
•	Use Drizzle ORM for database operations
•	Implement user authentication
•	Implement session management using HTTP-only cookies
•	Validate user input
•	Handle API errors properly
•	Test APIs using Postman
•	Maintain modular and reusable code
•	Document backend APIs and project setup
________________________________________
3. Technologies Used
Frontend
•	Next.js
•	React
•	TypeScript
•	Tailwind CSS
•	HTML5
•	CSS3
Backend
•	Next.js App Router
•	REST APIs
•	TypeScript
•	Server-side API routes
Database
•	PostgreSQL
•	Drizzle ORM
•	Drizzle Kit
Authentication
•	HTTP-only cookies
•	Password hashing using PBKDF2
•	Session-based authentication
Development Tools
•	Visual Studio Code
•	Git
•	GitHub
•	Postman
•	npm
________________________________________
4. Main Features
Product Management
•	Create products
•	Read products
•	Read a single product
•	Update products
•	Delete products
•	Product validation
•	Database persistence
User Authentication
•	User registration
•	User login
•	User logout
•	User profile
•	Password hashing
•	Session cookie
•	Protected backend routes
Shopping Cart
•	Add products to cart
•	View cart
•	Update quantity
•	Remove products
•	Calculate subtotal
•	Apply promotional discount
•	Calculate shipping charges
Orders
•	Create orders
•	View user orders
•	View individual order
•	Store order information
•	Associate orders with authenticated users
Checkout
Supported payment methods:
•	UPI
•	Credit/Debit Card
•	Net Banking
•	Cash on Delivery
The current checkout is a demonstration flow. No real payment gateway or real payment transaction is processed.
________________________________________
5. Project Structure
ecommerce-website/
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   ├── products/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── register/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── logout/
│   │   │   │   │   └── route.ts
│   │   │   │   └── profile/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── cart/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   └── orders/
│   │   │       ├── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   │
│   │   ├── products/
│   │   ├── women/
│   │   ├── support/
│   │   ├── company/
│   │   ├── login/
│   │   ├── register/
│   │   ├── cart/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── HomeHero.tsx
│   │   ├── WomenHero.tsx
│   │   └── LifestyleHero.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── db/
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   └── seed.ts
│   │
│   ├── lib/
│   │   └── auth.ts
│   │
│   └── types/
│       └── product.ts
│
├── drizzle/
│
├── drizzle.config.ts
├── .env
├── .env.example
├── package.json
├── README.md
└── API_DOCUMENTATION.md
________________________________________
6. Database Setup
ShopSphere uses PostgreSQL as the relational database.
Drizzle ORM is used to communicate with PostgreSQL.
Database
Create a PostgreSQL database named:
shopsphere
The application uses the following connection format:
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/shopsphere"
Replace:
YOUR_PASSWORD
with your local PostgreSQL password.
Do not upload the .env file containing your actual password to GitHub.
________________________________________
7. Environment Variables
Create a .env file in the project root.
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/shopsphere"
For the Google authentication implementation, if enabled, add:
NEXT_PUBLIC_GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
Keep secret values private.
________________________________________
8. Installation
Clone or download the project.
Open the project folder in VS Code.
Install dependencies:
npm install
________________________________________
9. Database Configuration
Make sure PostgreSQL is running.
Then push the Drizzle schema to PostgreSQL:
npx drizzle-kit push
If a seed file is configured, run the project's seed command or execute the seed script according to the current implementation.
________________________________________
10. Run the Application
Start the development server:
npm run dev
Open the application in your browser:
http://localhost:3000
________________________________________
11. Backend REST API
The backend uses Next.js App Router API routes.
Main API groups:
/api/products
/api/auth
/api/cart
/api/orders
________________________________________
Products API
Get All Products
GET /api/products
Returns the available products.
________________________________________
Get Product by ID
GET /api/products/:id
Example:
GET /api/products/1
________________________________________
Create Product
POST /api/products
Example request:
{
  "name": "Aero Run Pro",
  "category": "Running",
  "price": 4999,
  "image": "/products/aero-run-pro.jpg"
}
________________________________________
Update Product
PUT /api/products/:id
Example:
PUT /api/products/1
________________________________________
Delete Product
DELETE /api/products/:id
Example:
DELETE /api/products/1
The API validates the product ID and returns an appropriate response when the product does not exist.
________________________________________
12. Authentication API
Register
POST /api/auth/register
Example:
{
  "name": "Rutu",
  "email": "user@example.com",
  "password": "Password123"
}
The password is processed securely before being stored.
__________________________________
Login
POST /api/auth/login
Example:
{
  "email": "user@example.com",
  "password": "Password123"
}
On successful authentication, the application creates an HTTP-only session cookie.
________________________________________
Logout
POST /api/auth/logout
This clears the user's session cookie.
________________________________________
Profile
GET /api/auth/profile
Returns information about the currently authenticated user.
________________________________________
13. Cart API
Get Cart
GET /api/cart
Returns the current user's cart.
________________________________________
Add to Cart
POST /api/cart
Example:
{
  "productId": 1,
  "quantity": 1
}
________________________________________
Update / Remove Cart Item
DELETE /api/cart/:id
Removes the selected cart item.
________________________________________
14. Orders API
Create Order
POST /api/orders
Example:
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    }
  ],
  "paymentMethod": "upi",
  "totalAmount": 8998
}
The backend should verify that the user is authenticated before creating an order.
________________________________________
Get Orders
GET /api/orders
Returns orders associated with the authenticated user.
________________________________________
Get Single Order
GET /api/orders/:id
Returns details for a specific order.
________________________________________
15. Authentication Flow
The authentication flow works as follows:
User
 │
 ▼
Register
 │
 ▼
Validate Input
 │
 ▼
Hash Password
 │
 ▼
Save User in PostgreSQL
 │
 ▼
Login
 │
 ▼
Verify Email + Password
 │
 ▼
Create HTTP-only Session Cookie
 │
 ▼
Authenticated User
 │
 ├── Browse Products
 ├── Manage Cart
 └── Place Order
The backend must verify the session rather than relying only on frontend route protection.
________________________________________
16. Password Security
Passwords are not stored as plain text.
The authentication implementation uses:
•	Random salt
•	PBKDF2
•	SHA-256
•	100,000 iterations
•	256-bit derived key
The stored password value contains the generated salt and derived password hash.
________________________________________
17. Validation and Error Handling
The backend validates incoming requests before performing database operations.
Examples of validation include:
•	Required fields
•	Valid email format
•	Password requirements
•	Valid product ID
•	Valid quantity
•	Valid payment method
•	Existing product/user checks
•	Duplicate email detection
The API returns appropriate HTTP status codes.
Examples:
200 OK
201 Created
400 Bad Request
401 Unauthorized
404 Not Found
409 Conflict
500 Internal Server Error
________________________________________
18. Frontend Validation
The checkout page also provides user-friendly validation.
Examples:
•	Payment method required
•	Valid UPI ID
•	16-digit card number
•	MM/YY expiry format
•	3-digit CVV
•	Bank selection for net banking
The interface uses custom popup messages:
Error
Red popup:
!
Invalid Card Number

Card number must contain exactly 16 digits.
Success
Green popup:
✓
Payment Successful

Your payment details have been successfully verified.
________________________________________
19. Cart and Checkout
The cart supports:
•	Product quantity updates
•	Product removal
•	Subtotal calculation
•	Shipping calculation
•	Promo code
•	Discount calculation
•	Final total
•	Payment method selection
•	Order confirmation
Promo Code
The demo application supports:
SHOP10
This provides a 10% discount.
Shipping
Orders below ₹5000:
₹199 shipping
Orders of ₹5000 or more:
FREE shipping
________________________________________
20. API Testing Using Postman
The backend APIs can be tested using Postman.
Recommended testing sequence:
1. Register
POST /api/auth/register
2. Login
POST /api/auth/login
3. Get Profile
GET /api/auth/profile
4. Get Products
GET /api/products
5. Create Product
POST /api/products
6. Update Product
PUT /api/products/:id
7. Delete Product
DELETE /api/products/:id
8. Add Cart Item
POST /api/cart
9. Get Cart
GET /api/cart
10. Create Order
POST /api/orders
11. Get Orders
GET /api/orders
________________________________________
21. HTTP Status Codes
Status	Meaning
200	Request successful
201	Resource created
400	Invalid request
401	Authentication required
404	Resource not found
409	Conflict
500	Internal server error
________________________________________
22. Responsive Design
The application is designed to work across:
•	Desktop
•	Laptop
•	Tablet
•	Mobile
Tailwind CSS responsive utilities are used to create adaptive layouts.
________________________________________
23. Accessibility
The application includes:
•	Semantic HTML
•	Accessible buttons
•	Form labels
•	Input placeholders
•	Keyboard-friendly controls
•	Alternative text for product images
•	Responsive navigation
________________________________________
24. Error Handling
Errors are handled using:
try/catch
API errors return JSON responses containing useful messages.
Example:
{
  "message": "Product not found"
}
The frontend displays user-friendly error messages using custom popups.
________________________________________
25. Security Considerations
The application follows basic security practices:
•	Passwords are not stored as plain text
•	Authentication uses HTTP-only cookies
•	User sessions are validated on the backend
•	Input validation is performed
•	Database operations use Drizzle ORM
•	Sensitive environment variables are stored in .env
•	.env should not be committed to GitHub
•	Card/CVV information is not stored
________________________________________
26. Git and GitHub
Recommended Git workflow:
git init
git add .
git commit -m "Initial ShopSphere project"
Add the GitHub repository:
git remote add origin YOUR_GITHUB_REPOSITORY_URL
Push the project:
git branch -M main
git push -u origin main
________________________________________
27. Important Files
File	Purpose
src/db/schema.ts	Database schema
src/db/index.ts	Database connection
src/db/seed.ts	Database seed data
src/lib/auth.ts	Authentication/session utilities
src/app/api/products/route.ts	Product API
src/app/api/products/[id]/route.ts	Single product operations
src/app/api/auth/register/route.ts	Registration API
src/app/api/auth/login/route.ts	Login API
src/app/api/auth/logout/route.ts	Logout API
src/app/api/auth/profile/route.ts	User profile API
src/app/api/cart/route.ts	Cart API
src/app/api/orders/route.ts	Orders API
src/context/CartContext.tsx	Frontend cart state
src/app/cart/page.tsx	Cart and checkout UI
drizzle.config.ts	Drizzle configuration
.env	Environment variables
________________________________________
28. How to Submit
The final submission should contain the complete project source code.
Recommended structure:
ShopSphere/
│
├── src/
├── drizzle/
├── public/
├── package.json
├── package-lock.json
├── drizzle.config.ts
├── README.md
├── API_DOCUMENTATION.md
└── .env.example
Do not include:
node_modules/
.env
The .env file may contain database credentials and should remain private.
________________________________________
29. Future Improvements
Possible future improvements include:
•	Real payment gateway integration
•	Product image upload
•	Admin dashboard
•	Product search
•	Product filtering
•	Product reviews and ratings
•	Wishlist
•	Email order confirmation
•	Order tracking
•	Inventory management
•	Refresh-token authentication
•	Google authentication
•	Deployment to production
•	Automated API tests
________________________________________
30. Conclusion
ShopSphere demonstrates a complete full-stack e-commerce application using modern web technologies.
The project covers:
•	Responsive frontend development
•	RESTful API development
•	CRUD operations
•	PostgreSQL database integration
•	Drizzle ORM
•	Authentication
•	Session management
•	Cart management
•	Checkout
•	Order management
•	Validation
•	Error handling
•	API testing
•	Documentation
The project provides practical experience in building and connecting frontend, backend, and database components into a single full-stack application.

