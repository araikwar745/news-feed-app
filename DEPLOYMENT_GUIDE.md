# 🚀 Deployment Guide

## Deploy to Netlify (Easiest)

### Method 1: Drag & Drop
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://app.netlify.com)
3. Drag and drop the `dist` folder
4. Your app is live! 🎉

### Method 2: GitHub Integration
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

---

## Deploy to Vercel

### Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd ASSIGNMENT_1

# Deploy
vercel

# Follow the prompts
```

### Using Vercel Website
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel auto-detects Vite and configures everything
5. Deploy!

---

## Important Notes

### Before Deployment:
1. ✅ Add your News API key to `src/App.jsx`
2. ✅ Build the project: `npm run build`
3. ✅ Test locally: `npx http-server dist -p 8080`

### After Deployment:
- Update your API key in the deployed code if needed
- Check the live site is working
- Test all features (search, categories, theme toggle)

---

## Submit Your Work

Email to: **hr@appdost.in**

Include:
- ✅ GitHub repository URL
- ✅ Hosted app URL (Netlify/Vercel)
- ✅ Brief description of your work

---

## Example Submission Format

```
Subject: Assignment 1 - News Feed App

Hi,

I have completed the News Feed App assignment with all required and bonus features.

GitHub Repository: https://github.com/yourusername/news-feed-app
Live Demo: https://your-app.netlify.app

Features Implemented:
- ✅ Fetch and display news articles
- ✅ Search functionality
- ✅ Category filters
- ✅ Dark/Light theme toggle
- ✅ Pagination
- ✅ Loading and error states

Thank you!
```

---

## Troubleshooting

### API Key Not Working?
- Make sure your API key is correct
- Free tier: 100 requests/day
- Check API key in Netlify/Vercel environment variables

### Build Fails?
```bash
npm install
npm run build
```

### Page Not Loading?
- Check browser console for errors
- Verify API key is set
- Try clearing cache

---

**Your app is ready to deploy!** 🎉✨

