import React from 'react'

function NewsLetter() {
  return (
    <div id="newsletter" className="relative py-20 backdrop-blur-sm bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Subscribe to my newsletter for the latest insights on web development, design trends, and exclusive tips.</p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-3 bg-black/50 border border-white/20 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-4">I respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  </div>
  )
}

export default NewsLetter