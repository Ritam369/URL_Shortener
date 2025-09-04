# URL Shortener with QR Code Generator

A modern, full-stack URL shortener with React frontend and Node.js backend that generates QR codes and supports custom aliases. Designed for easy deployment on Vercel.

## ✨ Features

- 🔗 **Shorten URLs** - Convert long URLs into short, shareable links
- 🎨 **Custom Aliases** - Users can create personalized short links
- 📱 **QR Code Generation** - Automatic QR code creation for each short URL
- 📊 **Click Analytics** - Track how many times each link has been clicked
- 💻 **Modern React Frontend** - Responsive design with smooth animations
- ⚡ **Fast Backend API** - Node.js with Express and MongoDB
- 🌐 **Easy Deployment** - Optimized for Vercel deployment

## 🏗️ Project Structure

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
│   │   ├── App.jsx           # Main App component
│   │   └── main.jsx          # Entry point
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Root package.json
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Vercel account for deployment (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ritam369/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```
   
   Or install separately:
   ```bash
   npm run install-backend
   npm run install-frontend
   ```

3. **Set up environment variables**
   ```bash
   cp backend/.env.example backend/.env
   ```
   
   Edit `backend/.env` and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/url-shortener
   PORT=5000
   ```

4. **Start both servers**
   ```bash
   npm run dev
   ```
   
   Or start them separately:
   ```bash
   # Terminal 1 - Backend
   npm run dev-backend
   
   # Terminal 2 - Frontend
   npm run dev-frontend
   ```

5. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📱 API Endpoints

### POST `/api/shorten`
Create a short URL with optional custom alias

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very-long-url",
  "customAlias": "my-link" // optional
}
```

**Response:**
```json
{
  "message": "Short URL created successfully",
  "shortUrl": "https://yoursite.com/my-link",
  "qrCode": "data:image/png;base64,...",
  "originalUrl": "https://example.com/very-long-url",
  "shortID": "my-link",
  "isCustom": true,
  "createdAt": "2025-01-01T00:00:00.000Z",
  "clickCount": 0
}
```

### GET `/:shortId`
Redirect to original URL and increment click count

### GET `/api/stats/:shortId`
Get statistics for a short URL

## 🌐 Deploy to Vercel

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ritam369/URL-Shortener)

### Method 2: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   In your Vercel dashboard:
   - Go to your project settings
   - Add environment variable: `MONGO_URI` with your MongoDB connection string

### Method 3: GitHub Integration

1. **Fork this repository**
2. **Connect GitHub to Vercel**
3. **Import your forked repository**
4. **Add environment variables** in the Vercel dashboard
5. **Deploy automatically** on every push to main branch

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB Atlas connection string | Yes |
| `PORT` | Backend port (auto-set by Vercel) | No |

## �️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **QRCode** - QR code generation
- **Nanoid** - Short ID generation
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Modern styling with gradients and animations
- **FontAwesome** - Icons

### Deployment
- **Vercel** - Hosting platform
- **GitHub** - Version control

## 🎨 Features in Detail

### 🔗 Custom Aliases
Users can create personalized short links like `yoursite.com/my-company` instead of random characters.

### 📱 QR Code Generation
Every short URL automatically gets a high-quality QR code that users can download and use for offline sharing.

### 📊 Click Analytics
Track how many times each short URL has been clicked with detailed statistics and creation timestamps.

### 💻 Responsive Design
The React frontend adapts beautifully to different screen sizes, from mobile phones to desktop computers.

### ⚡ Modern Architecture
- **Separation of Concerns**: Clean separation between frontend and backend
- **RESTful API**: Well-designed API endpoints
- **Component-Based**: Modular React components for maintainability
- **Development Proxy**: Seamless development experience with Vite proxy

## 🚀 Development Scripts

```bash
# Install all dependencies
npm run install-all

# Start both frontend and backend in development mode
npm run dev

# Start only backend
npm run dev-backend

# Start only frontend
npm run dev-frontend

# Build frontend for production
npm run build

# Start backend in production mode
npm start
```

## 🔒 Security Features

- URL validation to prevent malicious links
- Custom alias validation (alphanumeric, hyphens, underscores only)
- CORS protection with configurable origins
- Input sanitization and validation
- MongoDB injection protection with Mongoose

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ritam Saha**
- GitHub: [@Ritam369](https://github.com/Ritam369)

## 🙏 Acknowledgments

- Thanks to the React and Node.js communities
- MongoDB Atlas for providing free database hosting
- Vercel for seamless deployment platform
- FontAwesome for beautiful icons

---

Made with ❤️ by [Ritam Saha](https://github.com/Ritam369)
# Deployment trigger
