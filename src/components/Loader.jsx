import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="flex flex-col items-center space-y-6">
      
      <svg className="w-16 h-16 animate-spin text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.379L14.121 4H9.879L7.5 6.379M7.5 6.379V8.25m9-1.871V8.25m0 0a3 3 0 013 3v2.25M7.5 8.25a3 3 0 00-3 3v2.25m15 0v1.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5v-1.5m15 0H3m3 0v1.5m12-1.5v1.5" />
      </svg>
  
      
      <p className="text-lg font-medium text-gray-200 animate-pulse">
        Finding the best cars for you...
      </p>
    </div>
  </div>
  
  )
}

export default Loader