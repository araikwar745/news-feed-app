function NewsCard({ article }) {
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transition-transform">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.urlToImage || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={article.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'
          }}
        />
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white">
          {article.title || 'No title available'}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
          {article.description || article.content || 'No description available'}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>{article.source?.name || 'Unknown source'}</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read More
        </a>
      </div>
    </article>
  )
}

export default NewsCard

