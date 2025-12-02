# Restrobooking

A full-stack restaurant booking and event management platform that allows users to browse locations, book time slots, and customize their experience with add-ons and packages.

## Features

- 🏢 **Location Management** - Browse restaurants and venues by state, city, and area
- 📅 **Slot Booking System** - Reserve time slots for events and dining
- 🎁 **Add-ons & Packages** - Customize bookings with decorations, cakes, photography, and special effects
- 🔐 **Authentication** - Secure user authentication with JWT
- 📱 **Responsive Design** - Modern UI built with React and Tailwind CSS
- 📊 **Admin Dashboard** - Manage bookings, packages, and locations
- 📖 **API Documentation** - Interactive Swagger documentation

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **Swiper** - Touch slider component

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Prisma** - ORM for database management
- **PostgreSQL** - Primary database
- **MongoDB** - Secondary database (via Mongoose)
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File upload handling
- **Swagger** - API documentation

## Project Structure

```
Restrobooking/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json
│
└── server/                # Backend application
    ├── controllers/       # Route controllers
    │   ├── admin/        # Admin-specific controllers
    │   ├── authController.js
    │   └── userController.js
    ├── middlewares/       # Custom middleware
    ├── routes/           # API routes
    ├── prisma/           # Database schema
    ├── utilities/        # Helper functions
    ├── swagger/          # API documentation
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- MongoDB database (optional)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/asrath11/Restrobooking
cd Restrobooking
```

2. **Setup Backend**
```bash
cd server
npm install
```

3. **Configure Environment Variables**

Create a `config.env` file in the `server` directory:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/restrobooking"

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

4. **Setup Database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed database
npx prisma db seed
```

5. **Setup Frontend**
```bash
cd ../client
npm install
```

### Running the Application

1. **Start Backend Server**
```bash
cd server
npm run dev
```
The server will start on `http://localhost:3000`

2. **Start Frontend Development Server**
```bash
cd client
npm run dev
```
The client will start on `http://localhost:5173`

3. **Access the Application**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`
- API Documentation: `http://localhost:3000/api-docs`

## API Endpoints

### Authentication
- `POST /api/v1/signup` - User registration
- `POST /api/v1/login` - User login
- `POST /api/v1/logout` - User logout
- `POST /api/v1/verify-otp` - OTP verification

### Locations
- `GET /api/v1/states` - Get all states
- `GET /api/v1/cities` - Get cities by state
- `GET /api/v1/areas` - Get areas by city
- `GET /api/v1/locations` - Get all locations

### Packages
- `GET /api/v1/packages` - Get all packages
- `GET /api/v1/packages/:id` - Get package by ID
- `POST /api/v1/packages` - Create package (Admin)
- `PUT /api/v1/packages/:id` - Update package (Admin)
- `DELETE /api/v1/packages/:id` - Delete package (Admin)

### Bookings
- `GET /api/v1/slotbookings` - Get all bookings
- `POST /api/v1/slotbookings` - Create booking
- `PUT /api/v1/slotbookings/:id` - Update booking
- `DELETE /api/v1/slotbookings/:id` - Cancel booking

### Add-ons
- `GET /api/v1/addOns` - Get all add-ons
- `POST /api/v1/addOns` - Create add-on (Admin)

## Database Schema

### Key Models

- **User** - User accounts and authentication
- **State/City/Area** - Location hierarchy
- **Package** - Booking packages with pricing and capacity
- **SlotBooking** - Time slot reservations
- **AddOn** - Additional services (decorations, cakes, photography, etc.)
- **Otp** - One-time passwords for verification

## Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Deployment

The application is configured for deployment on Render:
- Frontend: `https://restrobooking-frontend.onrender.com`
- Backend: Configured with CORS for the frontend URL

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email [email] or open an issue in the repository.
