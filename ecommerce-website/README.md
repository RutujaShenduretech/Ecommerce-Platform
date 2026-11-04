# Ecommerce-Platform
The project is a modern Nike-style eCommerce web application.It allows users to browse and purchase products online.The application provides a clean, attractive, and responsive interface. Users can explore products through categories and collections.Each product has detailed information, images, pricing, and availability.


# ShopSphere — Week 1

## YuvaIntern Junior Full Stack Developer Internship

### Week 1: Project Planning & System Architecture

---

## 1. Project Overview

**Project Name:** ShopSphere

**Project Type:** eCommerce Web Application

**Week:** Week 1 — Project Planning & System Architecture

ShopSphere is a modern eCommerce platform designed to provide users with a premium and responsive online shopping experience for sports, lifestyle, women's, and kids' products.

The project was planned as an original sports-fashion eCommerce concept inspired by modern premium shopping platforms.

The Week 1 phase focused on understanding the requirements, defining the system architecture, planning the user experience, designing data flow, and preparing the technical foundation for front-end development.

---

## 2. Week 1 Objectives

The main objectives of Week 1 were:

* Understand the eCommerce project requirements.
* Define the project scope.
* Identify the main users and system interactions.
* Plan the website structure.
* Define major application modules.
* Design user flows.
* Prepare the system architecture.
* Design the database structure.
* Identify required APIs.
* Plan the front-end and backend technologies.
* Prepare the foundation for Week 2 implementation.

---

## 3. Problem Statement

Traditional online shopping interfaces can become difficult to navigate when products, categories, user accounts, carts, and other features are not organized properly.

ShopSphere aims to provide a structured and user-friendly eCommerce experience where users can:

* Browse products.
* Explore different categories.
* View detailed product information.
* Select product options.
* Add products to a cart.
* Manage cart items.
* Register and log in.
* Access support information.
* Continue toward the checkout process.

The system is designed with modularity and future scalability in mind.

---

## 4. Target Users

The primary users of ShopSphere are:

### Customers

Customers can:

* Browse products.
* Search and explore categories.
* View product details.
* Select sizes and colors.
* Add products to the cart.
* Manage quantities.
* View cart totals.
* Create an account.
* Log in.
* Proceed toward checkout.

### Admin

The planned future admin system can allow administrators to:

* Manage products.
* Manage categories.
* Manage users.
* Manage orders.
* Update product information.
* Monitor inventory.

---

## 5. Project Scope

### Included in the Initial Scope

* Home page
* Product listing
* Product categories
* Product details
* Shopping cart
* User registration
* User login
* Responsive navigation
* Women's collection
* Kids collection
* Running collection
* Lifestyle collection
* Support page
* Company information page

### Future Scope

* Backend API
* Database integration
* Authentication
* Payment gateway
* Order management
* Admin dashboard
* Inventory management
* Product search
* Advanced filters
* Reviews and ratings
* Order tracking

---

## 6. Main Application Modules

The application was divided into the following modules:

```text
ShopSphere
│
├── Home
├── Products
│   ├── All Products
│   ├── Running
│   ├── Lifestyle
│   ├── Women's
│   └── Kids
│
├── Product Details
│
├── Cart
│
├── Authentication
│   ├── Login
│   └── Register
│
├── Support
│
└── Company
```

---

## 7. User Flow

The main customer flow was planned as:

```text
Home
  ↓
Shop / Category
  ↓
Product Listing
  ↓
Product Details
  ↓
Select Size & Color
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Order Confirmation
```

Authentication flow:

```text
Register
   ↓
Account Created
   ↓
Login
   ↓
User Account
```

---

## 8. System Architecture

The application was planned using a modular full-stack architecture.

```text
┌──────────────────────────────┐
│          User                │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Next.js Frontend        │
│                              │
│ Home / Products / Cart       │
│ Login / Register / Support   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       API Layer              │
│                              │
│ Product API                  │
│ User API                     │
│ Cart API                     │
│ Order API                    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Database              │
│                              │
│ Users                        │
│ Products                     │
│ Categories                   │
│ Cart                         │
│ Orders                       │
│ Order Items                  │
└──────────────────────────────┘
```

---

## 9. Technology Selection

### Frontend

**Next.js**

Selected for:

* React-based development
* App Router
* Dynamic routing
* Component-based architecture
* Performance optimization

**React**

Used for:

* Reusable components
* Interactive UI
* State management
* Client-side interactions

**TypeScript**

Used for:

* Type safety
* Better maintainability
* Structured development

**Tailwind CSS**

Used for:

* Responsive design
* Utility-based styling
* Rapid UI development
* Consistent layouts

---

## 10. Planned Backend Technologies

The future backend architecture can use:

* Next.js API routes / API layer
* Node.js
* REST APIs
* PostgreSQL
* Drizzle ORM

The Week 1 architecture was designed so that the front-end can later be connected to a real backend and database.

---

## 11. Database Planning

The planned database contains the following major entities:

### Users

```text
User
├── id
├── name
├── email
├── password
└── createdAt
```

### Products

```text
Product
├── id
├── name
├── categoryId
├── price
├── oldPrice
├── description
├── image
├── rating
└── createdAt
```

### Categories

```text
Category
├── id
├── name
└── description
```

### Cart

```text
Cart
├── id
├── userId
└── createdAt
```

### Cart Items

```text
CartItem
├── id
├── cartId
├── productId
├── quantity
├── size
└── color
```

### Orders

```text
Order
├── id
├── userId
├── totalAmount
├── status
└── createdAt
```

### Order Items

```text
OrderItem
├── id
├── orderId
├── productId
├── quantity
├── price
├── size
└── color
```

---

## 12. Entity Relationships

The planned relationships are:

```text
User
 │
 ├────────── Cart
 │             │
 │             └──── Cart Items
 │                       │
 │                       └──── Product
 │
 └────────── Orders
               │
               └──── Order Items
                         │
                         └──── Product

Category
   │
   └──── Products
```

---

## 13. API Planning

The following APIs were identified during system planning.

### Product APIs

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Authentication APIs

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Cart APIs

```text
GET    /api/cart
POST   /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id
```

### Order APIs

```text
GET  /api/orders
POST /api/orders
GET  /api/orders/:id
```

---

## 14. Functional Requirements

The system should allow users to:

1. View the homepage.
2. Browse products.
3. Browse products by category.
4. View individual product details.
5. Select size and color.
6. Add products to the cart.
7. Update cart quantities.
8. Remove cart items.
9. View cart subtotal.
10. Register an account.
11. Log in to an account.
12. Access support information.
13. Navigate between all major pages.
14. Use the website on mobile and desktop devices.

---

## 15. Non-Functional Requirements

### Performance

The application should provide fast page loading and efficient rendering.

### Responsiveness

The interface should work across:

* Mobile
* Tablet
* Laptop
* Desktop

### Usability

Navigation and important actions should be easy to understand.

### Maintainability

The application should use reusable components and modular code.

### Scalability

The architecture should allow future integration of:

* Database
* Backend APIs
* Authentication
* Payments
* Orders
* Admin features

### Security

Future backend implementation should include:

* Secure authentication
* Password hashing
* Input validation
* API authorization
* Protected user data

---

## 16. UI/UX Planning

The planned design direction was:

* Premium
* Minimal
* Modern
* Sports-inspired
* Responsive
* Image-focused

The interface uses:

* Large typography
* Strong visual hierarchy
* Rounded cards
* Clean spacing
* High-quality product imagery
* Simple navigation
* Clear CTA buttons
* Responsive layouts

---

## 17. Wireframe / Page Planning

The main pages planned during Week 1 were:

### Home

```text
Navbar
   ↓
Hero Section
   ↓
Featured Categories
   ↓
Featured Products
   ↓
Promotional Section
   ↓
Footer
```

### Product Listing

```text
Navbar
   ↓
Page Header
   ↓
Category / Filter
   ↓
Product Grid
   ↓
Footer
```

### Product Details

```text
Navbar
   ↓
Product Image | Product Information
              | Price
              | Color
              | Size
              | Quantity
              | Add to Cart
   ↓
Product Information
   ↓
Footer
```

### Cart

```text
Navbar
   ↓
Cart Items
   ↓
Quantity Controls
   ↓
Subtotal
   ↓
Checkout
   ↓
Footer
```

---

## 18. Week 1 Deliverables

The Week 1 planning phase produced:

* Project idea
* Project requirements
* Functional requirements
* Non-functional requirements
* User flow
* System architecture
* Database planning
* Entity relationships
* API planning
* Page structure
* UI/UX design direction
* Technology selection
* Future development plan

---

## 19. Transition to Week 2

The Week 1 planning and architecture were used as the foundation for Week 2 Front-End Application Development.

During Week 2, the planned architecture was translated into an actual Next.js application with:

* Reusable components
* Responsive pages
* Product data
* Product details
* Navigation
* Category sections
* Shopping cart
* Cart state management
* Local Storage persistence
* Interactive UI

---

## 20. Conclusion

Week 1 established the planning and technical foundation for ShopSphere.

The project requirements, user flows, system architecture, database structure, API structure, page layouts, and technology choices were defined before beginning the front-end implementation.

This planning phase provided a clear development roadmap for the Week 2 Front-End Application Development phase.

````

### For your final ZIP

I recommend keeping both files:

```text
ShopSphere/
├── README.md       ← Week 2
├── WEEK-1.md       ← Week 1
├── package.json
├── src/
├── public/
└── ...
````

This makes it clear to the evaluator that **Week 1 planning/architecture led directly into the Week 2 implementation**.



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



Here is a ready-to-use `README.md` for your ShopSphere full-stack e-commerce project. Create or open `README.md` in your project root folder:

`C:\GithubProjects\Ecommerce-Platform\ecommerce-website\README.md`

ShopSphere – Full-Stack E-Commerce Platform

# ShopSphere – Full-Stack E-Commerce Platform

ShopSphere is a full-stack e-commerce web application built to provide a responsive shopping experience. Users can browse products, view product details, manage their shopping cart, and navigate through different shopping categories.

## Features

* Responsive homepage and product listings

* Dynamic product data fetched from backend API endpoints

* Product details pages

* Product categories, including Running, Lifestyle, Women, and Kids

* Shopping cart with quantity management

* User login and registration pages

* PostgreSQL database integration

* REST API endpoints for product operations

* Reusable React components

* Responsive user interface

## Technology Stack

### Frontend

* Next.js

* React

* TypeScript / JavaScript

* Tailwind CSS

### Backend

* Next.js API Routes

* Node.js

* REST APIs

### Database

* PostgreSQL

* Drizzle ORM (where configured)

### Development Tools

* Git and GitHub

* Visual Studio Code

* npm

* Postman (for API testing)

## Project Structure

```
ecommerce-website/
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── route.js
│   ├── products/
│   ├── cart/
│   ├── login/
│   ├── register/
│   └── page.tsx
├── components/
├── context/
├── public/
├── src/
├── drizzle.config.ts
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

*Note: The structure above is representative. Adjust it to match the actual folders and files in your project.*

## Prerequisites

Install the following before running the project:

* Node.js and npm

* PostgreSQL

* Git

## Installation and Setup

### 1. Clone the repository

```
git clone YOUR_GITHUB_REPOSITORY_URL
cd ecommerce-website
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your GitHub repository URL.

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root. Add the environment variables required by your database and application.

Example:

```
DATABASE_URL=your_postgresql_connection_string
```

Use the exact variable names expected by your project configuration. Never commit real passwords or credentials to GitHub.

### 4. Set up the database

Create your PostgreSQL database and configure the connection string in `.env.local`.

If your project uses Drizzle ORM, run the database commands configured in your `package.json`. For example, if those scripts exist:

```
npx drizzle-kit generate
npx drizzle-kit migrate
```

Use the migration commands appropriate to your project's actual configuration.

### 5. Start the development server

```
npm run dev
```

Open the application at:

[http://localhost:3000](http://localhost:3000)

## API Endpoints

The following endpoints are expected in the application. Confirm the HTTP methods and functionality against your actual implementation.

| Method    | Endpoint            | Purpose                          |
| --------- | ------------------- | -------------------------------- |
| GET       | `/api/products`     | Retrieve products                |
| GET       | `/api/products/:id` | Retrieve a product by ID         |
| POST      | `/api/products`     | Create a product, if implemented |
| PUT/PATCH | `/api/products/:id` | Update a product, if implemented |
| DELETE    | `/api/products/:id` | Delete a product, if implemented |

### Example API Test

Open the following URL in your browser while the development server is running:

```
http://localhost:3000/api/products
```

The endpoint should return product data in JSON format when the database connection and API are configured correctly.

## Frontend and Backend Integration

The frontend communicates with backend API endpoints using HTTP requests.

1. The frontend requests product data from the products API.

2. The API retrieves the relevant data from the database.

3. The API returns the results in JSON format.

4. The frontend processes the response and renders product cards.

5. Users can interact with product pages and the shopping cart.

## Testing

Before submitting the project, verify the following:

* The homepage loads successfully.

* Products are displayed correctly.

* Product details pages open.

* The shopping cart updates quantities correctly.

* API endpoints return the expected responses.

* Database connectivity works.

* Navigation links work without routing errors.

* No sensitive credentials are included in the repository.

## Challenges and Solutions

### 1. Frontend and Backend Integration

**Challenge:** Connecting product components to dynamic API data.

**Solution:** Used API requests to retrieve product data and render it through reusable components.

### 2. Database Connectivity

**Challenge:** Configuring the application to communicate with PostgreSQL.

**Solution:** Configured database connection settings through environment variables and used the project's database configuration.

### 3. State Management

**Challenge:** Keeping cart quantities and displayed cart information consistent.

**Solution:** Used React state and the application's cart context to manage cart interactions.

### 4. Navigation

**Challenge:** Resolving routing conflicts between React Router and Next.js.

**Solution:** Used Next.js App Router and Next.js `Link` components for application navigation.

## Production Build

To check whether the application builds successfully:

```
npm run build
```

Start the production server, if the build succeeds:

```
npm run start
```

## Future Improvements

* Payment gateway integration

* Order management and order history

* Product search and advanced filters

* Admin dashboard for product management

* Authentication and authorization improvements

* Deployment and automated testing

