# Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. **Prepare for Deployment**
```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. **Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `URL_Shortener` repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

### 3. **Set Environment Variables in Vercel Dashboard**
After deployment, go to your project settings and add these environment variables:

**Required Variables:**
```
NODE_ENV = production
MONGO_URI = your_mongodb_connection_string
FRONTEND_URL = https://your-app-name.vercel.app
BACKEND_URL = https://your-app-name.vercel.app
```

### 4. **Update Domain After First Deployment**
1. Note your Vercel domain (e.g., `https://url-shortener-abc123.vercel.app`)
2. Update environment variables with your actual domain
3. Redeploy for changes to take effect

## 🔧 **How It Works**

### **Development vs Production:**
- **Development**: `localhost:5000/custom-alias`
- **Production**: `https://your-app.vercel.app/custom-alias`

### **URL Structure:**
- Frontend: `https://your-app.vercel.app`
- API: `https://your-app.vercel.app/api/*`
- Short URLs: `https://your-app.vercel.app/abc123`

### **Features:**
✅ Environment-based domain configuration
✅ Automatic HTTPS
✅ Single domain deployment
✅ Production-ready QR codes
✅ Secure environment variables

## 🛠️ **Troubleshooting**

### **Common Issues:**
1. **Domain Preview Wrong**: Update `FRONTEND_URL` environment variable
2. **API Not Working**: Check `BACKEND_URL` environment variable
3. **MongoDB Connection**: Verify `MONGO_URI` in Vercel dashboard
4. **Build Fails**: Check Node.js version is >= 18

### **Verification Steps:**
1. Test URL shortening works
2. Test custom aliases work
3. Test QR codes show correct domain
4. Test short URL redirection works

## 🔒 **Security Notes**
- All environment variables are secure in Vercel
- HTTPS enforced automatically
- MongoDB connection string is encrypted
- No CORS issues (same domain)

## 🎯 **Next Steps After Deployment**
1. Test all functionality
2. Update README with live demo link  
3. Monitor usage and performance
4. Consider custom domain if needed
