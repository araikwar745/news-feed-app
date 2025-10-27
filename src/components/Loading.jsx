function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Loading news...</p>
      </div>
    </div>
  )
}

export default Loading

