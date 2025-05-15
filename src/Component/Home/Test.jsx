import React from 'react'

function Test() {
  return (
    <div>  {/* Testimonials Section - Added */}
      {/* <div id="testimonials" className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Client Testimonials"
            description="What others say about working with me"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Stats Section - Added */}
      {/* <div id="stats" className="relative py-16 md:py-24 backdrop-blur-sm bg-black/30" ref={statsRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="By The Numbers"
            description="A snapshot of my professional journey"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem 
              icon={<Star className="text-indigo-400" size={24} />}
              value="50+"
              label="Projects Completed"
            />
            <StatItem 
              icon={<BookOpen className="text-indigo-400" size={24} />}
              value="10+"
              label="Years Experience"
            />
            <StatItem 
              icon={<HelpCircle className="text-indigo-400" size={24} />}
              value="100%"
              label="Client Satisfaction"
            />
            <StatItem 
              icon={<BarChart2 className="text-indigo-400" size={24} />}
              value="35+"
              label="Happy Clients"
            />
          </div>
        </div>
      </div> */}</div>
  )
}

export default Test