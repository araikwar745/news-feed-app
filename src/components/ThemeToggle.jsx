function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg 
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <>
          <span className="text-xl">☀️</span>
          <span className="text-sm font-semibold">Light</span>
        </>
      ) : (
        <>
          <span className="text-xl">🌙</span>
          <span className="text-sm font-semibold">Dark</span>
        </>
      )}
    </button>
  )
}

export default ThemeToggle

