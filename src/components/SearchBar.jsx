import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2 max-w-2xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                   transition-colors font-semibold"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar

