import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import SkillsHeader from './SkillsHeader';

function Skills() {
  // Create ref for entire section for better scroll tracking
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    threshold: 0.2,  // Increase this value slightly
    rootMargin: "-50px 0px"  // Start animations a bit before element enters viewport
  });
  const controls = useAnimation();

  // Start animations when component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Only reset animations if you really want components to animate again when scrolling back
      // If you want the header to stay visible, comment out this line
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Skills data organized by categories
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
        { name: "Java", level: 85, icon: "devicon-java-plain colored" },
        { name: "HTML5", level: 95, icon: "devicon-html5-plain colored" },
        { name: "CSS3", level: 92, icon: "devicon-css3-plain colored" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", level: 88, icon: "devicon-react-original colored" },
        { name: "Redux Toolkit", level: 82, icon: "devicon-redux-original colored" },
        { name: "Node.js", level: 80, icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", level: 78, icon: "devicon-express-original" },
        { name: "TailwindCSS", level: 85, icon: "devicon-tailwindcss-plain colored" },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 75, icon: "devicon-mongodb-plain colored" },
        { name: "SQL", level: 80, icon: "devicon-mysql-plain colored" },
        { name: "Firebase", level: 72, icon: "devicon-firebase-plain colored" },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88, icon: "devicon-git-plain colored" },
        { name: "GitHub", level: 90, icon: "devicon-github-original" },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: level => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  // Add Devicons link to header if not already present
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/devicons/1.8.0/css/devicons.min.css';
    
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    
    document.head.appendChild(link);
    document.head.appendChild(iconLink);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(iconLink);
    };
  }, []);

  return (
    <div 
      className="py-16 bg-gradient-to-br text-white" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header - Now properly included in the render */}
        <SkillsHeader controls={controls} />

        {/* Skills Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/40 shadow-xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-300">
                <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="group"
                    whileHover={{ 
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} text-2xl mr-3 group-hover:scale-110 transition-transform`}></i>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        variants={barVariants}
                        custom={skill.level}
                      >
                        <div className="relative">
                          <div className="absolute right-0 -top-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-purple-500/40"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cloud - Updated to use the same animation controls */}
        <motion.div
          className="mt-16 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/40 shadow-xl"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.4 } 
            }
          }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-blue-300">Skill Cloud</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.flatMap(category => 
              category.skills.map((skill, i) => (
                <motion.div
                  key={`cloud-${skill.name}`}
                  className="px-4 py-2 bg-gradient-to-br from-gray-700/60 to-gray-800/60 rounded-full border border-gray-600/30 text-sm text-gray-200 flex items-center shadow-lg"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.6 + (i * 0.07) }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.15), 0 4px 6px -4px rgba(147, 51, 234, 0.15)"
                  }}
                >
                  <i className={`${skill.icon} mr-2`}></i>
                  {skill.name}
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;