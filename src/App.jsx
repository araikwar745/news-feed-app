import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import NewsGrid from './components/NewsGrid'
import Loading from './components/Loading'
import Error from './components/Error'
import ThemeToggle from './components/ThemeToggle'

const API_KEY = 'b9598ad4c06a4f209a5fef4534397b9a'
const API_URL = 'https://newsapi.org/v2/top-headlines'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState(1)

  // Fetch news articles
  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const url = searchQuery
        ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${API_KEY}&page=${page}&pageSize=12`
        : `${API_URL}?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=12`
      
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.status === 'ok') {
        setArticles(data.articles)
      } else {
        throw new Error(data.message || 'Failed to fetch news')
      }
    } catch (err) {
      setError(err.message)
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [category, country, page])

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery) {
        fetchNews()
      } else {
        fetchNews()
      }
    }, 500)

    return () => clearTimeout(debounceTimer)
  }, [searchQuery])

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(1)
  }

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    setSearchQuery('')
    setPage(1)
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Set dark mode class on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="flex justify-between items-center mb-6">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          category={category}
          onCategoryChange={handleCategoryChange}
        />
        
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <NewsGrid articles={articles} />
            {articles.length > 0 && (
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() => setPage(prev => Math.max(1, prev - 1))}
                  disabled={page === 1}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  Page {page}
                </span>
                <button
                  onClick={() => setPage(prev => prev + 1)}
                  disabled={articles.length < 12}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App

