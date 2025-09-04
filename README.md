# URL Shortener

A modern full-stack URL shortener with React frontend and Node.js backend that generates QR codes and supports custom aliases.

## ✨ Features

- 🔗 **URL Shortening** - Convert long URLs into short, shareable links
- 🎨 **Custom Aliases** - Create personalized short links
- 📱 **QR Code Generation** - Automatic QR code creation for each short URL
- 📊 **Click Analytics** - Track clicks with timestamps
- 💻 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Optimized React frontend with Express backend

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Modern styling with gradients
- **FontAwesome** - Icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **QRCode** - QR code generation
- **Nanoid** - Short ID generation

## 📁 Project Structure

```
URL-Shortener/
├── backend/                    # Node.js Express API
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   └── urlController.js   # URL logic & QR generation
│   ├── models/
│   │   └── url.js            # MongoDB schema
│   ├── routes/
│   │   └── urlRoute.js       # API routes
│   ├── services/
│   │   └── urlValidation.js  # URL validation
│   ├── index.js              # Main server file
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── index.html           # HTML template
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── package.json             # Root package.json
└── .gitignore              # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritam369/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   Create `backend/.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This starts both:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 📝 Available Scripts

```bash
# Install all dependencies (frontend + backend)
npm run install-all

# Start both servers in development mode
npm run dev

# Start only backend server
npm run dev-backend

# Start only frontend server
npm run dev-frontend

# Build frontend for production
npm run build

# Start backend in production mode
npm start
```

## 🔧 Environment Setup

### MongoDB Atlas
1. Create account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a cluster (free tier available)
3. Create database user and get connection string
4. Add connection string to `backend/.env`

## 📱 API Endpoints

- `POST /api/shorten` - Create short URL
- `GET /api/stats/:shortId` - Get URL statistics
- `GET /:shortId` - Redirect to original URL

## 🎨 Usage

1. Enter a long URL in the input field
2. Optionally add a custom alias
3. Click "Shorten URL"
4. Get your short link and QR code
5. Share and track clicks!

## 👨‍💻 Author

**[Ritam Saha](https://github.com/Ritam369)**

---

Made with ❤️ using React and Node.js