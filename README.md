# 📰 News Feed App

A modern, responsive news application built with React that delivers real-time news from around the world. Featuring an intuitive user interface with dark mode, category filtering, search functionality, and seamless navigation.

## 🌟 Key Features

### ✨ **Modern UI/UX Design**
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Seamless theme switching with system preference support
- **Beautiful Gradients**: Eye-catching gradient headers and smooth transitions
- **Card-Based Design**: Clean, modern card layout with hover effects

### 🔍 **Smart Search & Filtering**
- **Global Search**: Real-time search across all news articles with 500ms debouncing
- **Category Filters**: 7 distinct categories (General, Business, Technology, Health, Science, Sports, Entertainment)
- **Pagination**: Efficient page navigation with Previous/Next buttons
- **Error Handling**: Graceful error messages and loading states

### 🚀 **Technical Excellence**
- **React 18**: Latest React hooks and features
- **Vite**: Lightning-fast build tool for optimal performance
- **Tailwind CSS**: Utility-first CSS for rapid styling
- **NewsAPI Integration**: Secure API key management via environment variables
- **RESTful API**: Clean fetch implementation with proper error handling

### 📱 **User Experience**
- **Loading States**: Skeleton screens during data fetching
- **Error Recovery**: User-friendly error messages
- **Image Fallbacks**: Graceful handling of missing images
- **Accessibility**: Semantic HTML and keyboard navigation

## 🛠️ Tech Stack

```
Frontend: React 18.3.1
Build Tool: Vite 5.4.2
Styling: Tailwind CSS 3.4.9
API: NewsAPI.org
Deployment: Vercel / Netlify Ready
```

## 📊 Project Structure

```
src/
├── App.jsx              # Main application logic & state management
├── main.jsx             # React DOM entry point
├── index.css            # Global styles & Tailwind imports
└── components/
    ├── Header.jsx       # App header with title & description
    ├── SearchBar.jsx    # Search input with debouncing
    ├── CategoryFilter.jsx   # Category selection buttons
    ├── NewsGrid.jsx     # Responsive grid layout
    ├── NewsCard.jsx     # Individual article card
    ├── Loading.jsx      # Loading animation component
    ├── Error.jsx        # Error display component
    └── ThemeToggle.jsx  # Dark/light mode switcher
```

## 🎯 Core Functionality

1. **News Fetching**: Dynamically loads articles from NewsAPI
2. **State Management**: React hooks for efficient state handling
3. **Real-time Updates**: Auto-refresh on category/search changes
4. **SEO Ready**: Proper meta tags and semantic HTML
5. **Performance**: Optimized bundle size with code splitting

## 🌐 Live Demo

**Live Site**: [news-feed-app-delta.vercel.app](https://news-feed-app-delta.vercel.app)

**Repository**: [github.com/araikwar745/news-feed-app](https://github.com/araikwar745/news-feed-app)

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 16+ 
npm or yarn
```

### Installation
```bash
git clone https://github.com/araikwar745/news-feed-app.git
cd news-feed-app
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
VITE_NEWS_API_KEY=your_newsapi_key_here
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 🎨 Design Highlights

- **Color Scheme**: Blue to purple gradients with gray accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Animations**: Smooth transitions and hover effects
- **Responsive Breakpoints**: Mobile-first approach

## 🔒 Security Features

- Environment variable-based API key management
- Secure header-based API authentication
- Input sanitization for search queries
- XSS protection through React's built-in escaping

## 📈 Future Enhancements

- [ ] Save favorite articles
- [ ] Share articles via social media
- [ ] Country selection dropdown
- [ ] Date range filtering
- [ ] Read later functionality
- [ ] PWA support for offline access

## 👨‍💻 Author

**Ashish Raikwar**  
Email: araikwar745@gmail.com  
GitHub: [@araikwar745](https://github.com/araikwar745)

## 📝 License

This project is open source and available for educational purposes.

---

⭐ **Built with passion and attention to detail** ⭐

