import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Award } from "lucide-react";

function Education() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Education data
  const educationData = [
    {
      institution: "Nutan College of Engineering and Research",
      degree: "B.Tech",
      score: "CGPA: 7.3",
      period: "November 2022 – June 2026",
      icon: <Award className="text-indigo-400" size={20} />,
      current: true
    },
    {
      institution: "Indirabai Lalwani Junior College",
      degree: "HSC",
      score: "Aggregate: 70%",
      period: "June 2021 – March 2022",
      icon: <BookOpen className="text-indigo-400" size={20} />
    },
    {
      institution: "R. A. Mahajan Madhyamik Vidyalaya",
      degree: "SSC",
      score: "Aggregate: 86%",
      period: "June 2019 – March 2020",
      icon: <BookOpen className="text-indigo-400" size={20} />
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="education" className="relative py-20 md:py-32 backdrop-blur-sm ">
      <div className="absolute inset-0  z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading with improved animation */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={headingVariants}
              className="text-3xl font-bold text-white mb-3"
            >
              My Education
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"
                variants={underlineVariants}
              ></motion.div>
            </motion.h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            My academic journey and qualifications
          </motion.p>
        </div>

        {/* Education Timeline with enhanced animations */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated timeline connector */}
              {index < educationData.length - 1 && (
                <motion.div 
                  className="absolute left-6 top-12 w-1 bg-gradient-to-b from-indigo-500 to-indigo-500/10"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
              )}
              
              <div className="flex">
                {/* Animated timeline icon */}
                <div className="flex-shrink-0 mr-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${item.current ? 'bg-indigo-500/30 border-2 border-indigo-500' : 'bg-indigo-900/30 border border-indigo-500/50'}`}
                    whileHover={{ scale: 1.1 }}
                    animate={hoveredIndex === index ? { boxShadow: "0 0 12px rgba(99, 102, 241, 0.7)" } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      animate={hoveredIndex === index ? "hover" : "initial"}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Animated content card */}
                <div className="flex-grow">
                  <motion.div 
                    className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      boxShadow: "0 8px 20px -6px rgba(99, 102, 241, 0.5)",
                      borderColor: "rgba(99, 102, 241, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {item.institution}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-1 mb-2">
                      <motion.div
                        animate={hoveredIndex === index ? { rotate: [0, -10, 10, -5, 5, 0] } : {}}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Calendar size={16} className="mr-2" />
                      </motion.div>
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{item.degree}</span>
                      <motion.span 
                        className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                        whileHover={{ 
                          backgroundColor: "rgba(99, 102, 241, 0.3)",
                          scale: 1.05
                        }}
                        animate={hoveredIndex === index ? { 
                          y: [0, -3, 3, -2, 2, 0],
                          transition: { delay: 0.2, duration: 0.5 }
                        } : {}}
                      >
                        {item.score}
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Education;