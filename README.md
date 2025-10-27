# 📰 News Feed App

A modern, feature-rich news feed application built with React and Tailwind CSS that fetches live news articles from the News API.

## ✨ Features

- **Live News Fetching**: Gets real-time news articles from News API
- **Search Functionality**: Search for news articles by keywords
- **Category Filters**: Browse news by categories (General, Business, Technology, Health, Science, Sports, Entertainment)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Pagination**: Navigate through multiple pages of articles
- **Responsive Design**: Beautiful and modern UI that works on all devices
- **Loading States**: Elegant loading animations
- **Error Handling**: User-friendly error messages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd ASSIGNMENT_1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your free API key from [News API](https://newsapi.org/):
   - Sign up for a free account at https://newsapi.org/
   - Get your API key
   - Replace the `API_KEY` in `src/App.jsx` with your own key

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **News API** - Free news API service

## 📁 Project Structure

```
ASSIGNMENT_1/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── NewsGrid.jsx
│   │   ├── NewsCard.jsx
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Hosting

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `dist` folder or connect your GitHub repository
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📝 API Key Setup

1. Sign up at https://newsapi.org/
2. Get your free API key
3. Replace `API_KEY` in `src/App.jsx`:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE'
   ```

## 🎨 Features in Detail

### Core Features ✅
- [x] Fetch and display news articles
- [x] Show title, image, and description
- [x] Search functionality
- [x] React functional components
- [x] useState and useEffect hooks
- [x] Tailwind CSS styling
- [x] Loading states
- [x] Error handling

### Bonus Features ✅
- [x] Category filters (7 categories)
- [x] Pagination
- [x] Dark/Light theme toggle

## 🖼️ Screenshots

The app features a clean, modern design with:
- Gradient title header
- Intuitive search bar
- Category filter buttons
- Responsive news card grid
- Smooth animations and transitions

## 📧 Submission

- **GitHub Repository**: [Your Repo Link]
- **Live Demo**: [Your Hosted Link]
- **Email**: hr@appdost.in

## 👤 Author

Created for CDS Web Dev Assignment 1

---

**Note**: Make sure to add your News API key before running the application. The free tier allows 100 requests per day for development purposes.

