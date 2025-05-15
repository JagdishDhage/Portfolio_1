import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ExternalLink, Code, Layers } from "lucide-react";
import thevoice from '../../../assets/thevoice.png'
import fiteat from '../../../assets/fiteat.png'
import notes from '../../../assets/notes.png'
const projects = [
  {
    title: "Crime Reporting Web Portal",
    description: "A secure web portal to manage crime reports from mobile apps with role-based access control, real-time data processing, and crime trend analytics.",
    bulletPoints: [
      "Implemented role-based access control (RBAC) for secure user management.",
      "Integrated data analytics for crime trend analysis to optimize resource allocation.",
      "Developed multimedia content handling and cloud storage integration."
    ],
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "RESTful APIs"],
    image: thevoice,
    tags: ["ReactJS", "Node.js", "MongoDB", "Express", "RESTful APIs"],
    color: "from-purple-500 to-indigo-600",
    date: "January 2024"
  },
  {
    title: "FitEat",
    description: "A web-based application that tracks food consumption and provides nutritional analysis with personalized diet recommendations.",
    bulletPoints: [
      "Developed food tracking with comprehensive nutritional analysis (calories, protein, etc.).",
      "Created personalized diet plans for effective weight management.",
      "Integrated BMI monitoring tools for health optimization."
    ],
    technologies: ["ReactJS", "Node.js", "MongoDB", "RESTful APIs", "TailwindCSS"],
    image: fiteat,
    tags: ["ReactJS", "Node.js", "MongoDB", "RESTful APIs", "TailwindCSS"],
    color: "from-emerald-500 to-teal-600",
    date: "July 2024"
  },
  {
    title: "Universal Notes Sharing Platform",
    description: "Developed a centralized platform enabling students to upload, search, and access educational notes categorized by university, subject, and course.",
    bulletPoints: [
      "Implemented advanced search functionality with auto-suggestions and filters using Elasticsearch integration.",
      "Designed mobile-first, responsive UI with TailwindCSS that delivers optimal experience across all device sizes.",
      "Built secure authentication system with email verification and JWT-based session management."
    ],
    technologies: ["ReactJS", "Node.js", "MongoDB", "TailwindCSS", "RESTful APIs" , "Cloudinary"],
    image: notes,
    tags: ["ReactJS", "Node.js", "MongoDB", "TailwindCSS"],
    color: "from-rose-500 to-pink-600",
    date: "January 2025"
  },
];

function Projects() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          
          // Update active index for description
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
          
          // Track which projects are visible for animations
          setVisibleProjects(prev => {
            if (entry.isIntersecting) {
              return [...new Set([...prev, index])];
            } else {
              return prev.filter(i => i !== index);
            }
          });
        });
      },
      { 
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    const imageEls = containerRef.current?.querySelectorAll(".project-image-container");
    imageEls?.forEach((el) => observer.observe(el));

    return () => {
      imageEls?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Parallax animation for background elements
  const { scrollY } = useScroll({ container: scrollRef });
  const backgroundY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityTransform = useTransform(scrollY, [0, 200], [0.6, 0.9]);

  return (
    <div className="min-w-6xl mx-auto px-6 mt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-60"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full  bg-purple-600/20 blur-3xl" />
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-20 left-40 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl" />
      </motion.div>

      <div className="text-center mb-16 relative">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full  blur-xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold text-white mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A collection of my most significant work showcasing various technologies and design approaches
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div 
          ref={containerRef}
          className="h-[500px] overflow-y-auto space-y-16 pr-4 relative scroll-container"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            .scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <motion.div 
            className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent p-10 z-10 pointer-events-none"
            style={{ opacity: useTransform(scrollY, [0, 50], [1, 0.5]) }}
          />
        
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-image-container relative"
              data-index={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: visibleProjects.includes(index) ? 1 : 0.3,
                scale: visibleProjects.includes(index) ? 1 : 0.95,
                y: visibleProjects.includes(index) ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className={`absolute inset-0 rounded-2xl transition-all duration-300 z-10`}
                animate={{
                  boxShadow: activeIndex === index 
                    ? '0 0 0 2px rgba(99, 102, 241, 0.8), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                    : '0 0 0 0 rgba(99, 102, 241, 0), 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background gradient overlay */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-tr ${project.color} rounded-2xl  opacity-0`}
                animate={{ 
                  opacity: hoveredIndex === index ? 0.15 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              <img
                src={project.image}
                alt={project.title}
                className="project-image w-full h-[28rem] object-cover rounded-2xl transition-all duration-500"
              />
              
              
              <motion.div 
                className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 rounded-b-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: visibleProjects.includes(index) ? 0 : 20, 
                  opacity: visibleProjects.includes(index) ? 1 : 0,
                  height: hoveredIndex === index ? "50%" : "35%"
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.p 
                  className="text-white font-medium text-xl mb-2"
                  animate={{
                    scale: activeIndex === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.p>
                
                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: visibleProjects.includes(index) ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 5
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Interaction indicator */}
              <motion.div
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                  rotate: hoveredIndex === index ? 0 : -20
                }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} className="text-white" />
              </motion.div>
            </motion.div>
          ))}
          
          <motion.div 
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"
            style={{ opacity: useTransform(scrollY, [0, 50], [1, 0.5]) }}
          />
        </div>

        {/* Dynamic Description with enhanced animations */}
        <div className="flex flex-col justify-center items-start space-y-6 sticky top-24">
          <motion.div 
            className="relative px-5 py-2 rounded-full overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute inset-0 bg-indigo-600/20 backdrop-blur-md rounded-full -z-10"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(99, 102, 241, 0)",
                  "0 0 0 8px rgba(99, 102, 241, 0.1)",
                  "0 0 0 0 rgba(99, 102, 241, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="text-indigo-300 text-lg font-medium flex items-center">
              <motion.span 
                animate={{ opacity: [0.7, 1, 0.7] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                Featured Project
              </motion.span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <ChevronRight size={18} />
              </motion.div>
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            {projects.map((project, index) => 
              activeIndex === index && (
                <motion.div
                  key={`description-${index}`}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 10 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 150, 
                    damping: 20 
                  }}
                  className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated gradient border effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-purple-500/0 -z-10"
                    animate={{ 
                      backgroundPosition: ["200% 0%", "0% 0%", "-200% 0%"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  <motion.div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.color} rounded-t-lg`}
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  <motion.h3 
                    className="text-3xl font-semibold text-white mb-2 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.title}
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.1, 1, 1.1, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {index === 0 && <Code size={24} className="text-purple-400" />}
                      {index === 1 && <Layers size={24} className="text-emerald-400" />}
                      {index === 2 && <Code size={24} className="text-rose-400" />}
                    </motion.div>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-indigo-300/70 text-sm mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.date}
                  </motion.p>
                  
                  <motion.p 
                    className="text-white/70 text-lg max-w-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.ul
                    className="text-white/70 text-md max-w-lg space-y-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {project.bulletPoints.map((point, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 size-5 shrink-0 fill-purple-600 text-purple-400 bg-purple-600/20 lg:bg-black">
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                        </svg> 
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mt-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.button 
                      className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg flex items-center gap-2 transition-colors duration-300`}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details 
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button 
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.button>
                  </motion.div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/20"
                        initial={{ 
                          x: Math.random() * 300,
                          y: Math.random() * 200, 
                          opacity: 0 
                        }}
                        animate={{ 
                          y: [null, Math.random() * -100 - 50],
                          opacity: [0, 0.7, 0],
                          scale: [0, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 5 + Math.random() * 5,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: i * 2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
          
          {/* Scroll indicator */}
          <motion.div 
            className="w-full h-1 bg-gray-800/50 rounded-full mt-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;