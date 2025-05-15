import React from 'react';
import { motion } from 'framer-motion';

function SkillsHeader({ controls }) {
  // Define heading variants here instead of receiving them from the parent
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={headingVariants}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Technical Skills
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
      <p className="text-gray-300 max-w-2xl mx-auto">
        A comprehensive overview of my technical expertise and proficiency across various programming languages, frameworks, and tools.
      </p>
    </motion.div>
  );
}

export default SkillsHeader;