import React from 'react'

function Record() {
  return (
    <div 
    id="stats" 
    ref={statsRef}
    className="relative py-20 md:py-28 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="text-center mb-16"
      >
        <h2 className="inline-block text-3xl font-bold text-white mb-3 relative">
          Track Record
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"></div>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Numbers that showcase my experience and project success</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatItem 
          icon={<BarChart2 size={24} className="text-indigo-400" />} 
          value="50+" 
          label="Projects Completed" 
        />
        <StatItem 
          icon={<Star size={24} className="text-indigo-400" />} 
          value="98%" 
          label="Client Satisfaction" 
        />
        <StatItem 
          icon={<BookOpen size={24} className="text-indigo-400" />} 
          value="12+" 
          label="Years Experience" 
        />
        <StatItem 
          icon={<HelpCircle size={24} className="text-indigo-400" />} 
          value="24/7" 
          label="Support Provided" 
        />
      </div>
    </div>
  </div>
  )
}

export default Record