import React from 'react'

function Blog() {

     const blogPosts = [
        {
          title: "The Future of Web Development: Trends to Watch",
          excerpt: "Exploring emerging technologies and methodologies that are reshaping how we build for the web.",
          date: "April 15, 2025",
          readTime: 8,
          image: "/api/placeholder/400/300"
        },
        {
          title: "Optimizing React Performance: Advanced Techniques",
          excerpt: "Deep dive into strategies for building lightning-fast React applications that scale.",
          date: "March 28, 2025",
          readTime: 12,
          image: "/api/placeholder/400/300"
        },
        {
          title: "Designing for Accessibility: A Developer's Guide",
          excerpt: "How to create inclusive digital experiences that work for everyone, regardless of ability.",
          date: "March 10, 2025",
          readTime: 10,
          image: "/api/placeholder/400/300"
        }
      ];
    
  return (
    <div id="blog" className="relative py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="text-center mb-16"
      >
        <h2 className="inline-block text-3xl font-bold text-white mb-3 relative">
          Latest Insights
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"></div>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Thoughts and perspectives on development, design, and digital trends</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: index * 0.2,
                duration: 0.7 
              } 
            }}
            viewport={{ once: true }}
            className="h-full"
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-transparent text-white border border-white/30 rounded-lg font-medium hover:bg-white/5 hover:border-indigo-500/50 transition-all duration-300 flex items-center gap-2 mx-auto">
          View All Articles
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Blog