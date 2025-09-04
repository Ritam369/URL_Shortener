# Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Prepare Your Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `URL-Shortener` repository
5. Configure settings:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/dist`

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? url-shortener
# - In which directory is your code located? ./
```

### 3. Environment Variables
In your Vercel dashboard:
1. Go to your project
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add:
   - **Key**: `MONGO_URI`
   - **Value**: Your MongoDB Atlas connection string
   - **Environment**: Production

### 4. Custom Domain (Optional)
1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be auto-generated

### 5. Update Domain References
Once deployed, update the domain preview in:
- `frontend/src/utils/config.js`

Change:
```javascript
return `${window.location.host}/`;
```

## 🔧 Environment Setup

### MongoDB Atlas
1. Create account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a cluster (free tier available)
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for Vercel)
5. Get connection string

### Connection String Format
```
mongodb+srv://username:password@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
```

## 🎯 Post-Deployment Testing

### Test API Endpoints
- `GET https://your-domain.vercel.app/` - Should return API info
- `POST https://your-domain.vercel.app/api/shorten` - Test URL shortening

### Test Frontend
- `https://your-domain.vercel.app` - Should load React app
- Test URL shortening with custom alias
- Test QR code generation and download

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Make sure all dependencies are installed locally first
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **MongoDB Connection Issues**
   - Check connection string format
   - Verify IP whitelist includes 0.0.0.0/0
   - Check database user permissions

3. **API Routes Not Working**
   - Verify vercel.json routing configuration
   - Check environment variables are set

4. **Frontend Not Loading**
   - Check build output directory
   - Verify static file routing

### Logs
View deployment logs in Vercel dashboard:
1. Go to your project
2. Click "Functions" tab
3. View logs for debugging

## 🎉 Success!

Your URL shortener should now be live at:
- **Frontend**: `https://your-project.vercel.app`
- **API**: `https://your-project.vercel.app/api/*`

Example short URLs will be:
- `https://your-project.vercel.app/mylink`
- `https://your-project.vercel.app/custom-alias`
