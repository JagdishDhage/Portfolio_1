import React, { useEffect, useRef, useState } from 'react';

function Work() {
  const carouselRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationPaused, setAnimationPaused] = useState(false);

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React, Vue, and Angular."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Backend Development",
      description: "Building robust server-side applications using Node.js, Express, Django, or Ruby on Rails."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences with a focus on usability and aesthetics."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Bug Resolution",
      description: "Identifying and fixing software issues to ensure smooth application performance and reliability."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Product Optimization",
      description: "Enhancing existing products for better performance, usability, and market fit."
    }
  ];

  const allServices = [...services, ...services]; // For infinite loop

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    let position = 0;
    const speed = 0.3;

    const animate = () => {
      if (!animationPaused) {
        position -= speed;
        const itemWidth = 288 + 24; // width of card + gap
        if (position <= -itemWidth * services.length) {
          position = 0;
        }
        if (carousel) {
          carousel.style.transform = `translateX(${position}px)`;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [services.length, animationPaused]);

  const handleMouseMove = (e) => {
    if (carouselContainerRef.current) {
      const { left, top, width, height } = carouselContainerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    }
  };

  return (
    <div 
      ref={carouselContainerRef}
      className="bg-transperent backdrop-blur-md rounded-2xl h-full relative overflow-hidden shadow-xl border border-white/10 z-20 px-6 py-8 md:py-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient that follows cursor */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.3), transparent 70%)`,
          opacity: isHovering ? 0.4 : 0,
        }}
      ></div>

      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium inline-block mb-3">
            My Services
          </span>
          <h2 className="text-3xl font-bold text-white">Services That I Provide</h2>
          <p className="text-lg text-white/70 mt-2">Expertise to help bring your vision to life</p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Carousel */}
        <div 
          className="relative w-full overflow-hidden py-4" 
          onMouseEnter={() => setAnimationPaused(true)}
          onMouseLeave={() => setAnimationPaused(false)}
        >
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
          
          <div
            ref={carouselRef}
            className="flex space-x-6 transition-transform duration-1000 ease-linear"
          >
            {allServices.map((service, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-72 h-64 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-xl hover:border-indigo-500/20 transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div className="p-3 bg-indigo-500/10 rounded-lg transition-all duration-300 group-hover:-translate-y-1 w-fit">
                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-md max-w-xs mx-auto md:mx-0 text-white/80 mb-6 md:mb-0">
            Let's connect to discuss how I can help with your next project
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-7-7 7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;