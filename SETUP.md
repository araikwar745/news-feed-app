# Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the `ASSIGNMENT_1` folder and run:

```bash
npm install
```

## Step 2: Get API Key

1. Visit https://newsapi.org/
2. Sign up for a free account (100 requests/day free tier)
3. Get your API key from the dashboard

## Step 3: Add Your API Key

Open `src/App.jsx` and replace the API_KEY on line 8:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE'
```

Replace `YOUR_API_KEY_HERE` with your actual API key.

## Step 4: Run the App

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Step 5: Build for Production

```bash
npm run build
```

This creates a `dist` folder that you can deploy to Netlify or Vercel.

## Deployment Instructions

### Netlify
1. Visit https://app.netlify.com/
2. Drag and drop the `dist` folder after running `npm run build`
3. Or connect your GitHub repository

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Features Included ✅

- ✅ Fetch and display news articles
- ✅ Title, Image, Description display
- ✅ Search functionality
- ✅ React functional components with hooks
- ✅ Tailwind CSS styling
- ✅ Loading states
- ✅ Error handling
- ✅ Category filters (Bonus)
- ✅ Pagination (Bonus)
- ✅ Dark/Light theme toggle (Bonus)

## Alternative: Using a Demo Key

For testing purposes, you can use:
```javascript
const API_KEY = '0a4e238f79a2476a9eb4f7b04b58c38c'
```

But this is rate-limited, so get your own key for best results!

