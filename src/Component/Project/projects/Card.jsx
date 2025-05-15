import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function Card({ project }) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  // Image parallax effect
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);
  
  // Card glow effect on hover
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Floating effect for tech chips
  const floatingVariants = {
    initial: { y: 0 },
    animate: { y: [-2, 2, -2], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
  };

  return (
    <div className="w-full my-24">
      <motion.div 
        ref={containerRef}
        className="relative flex flex-col md:flex-row gap-8 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Animated background glow */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -inset-10 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl -z-10"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 114, 182, 0.15) 0%, rgba(219, 39, 119, 0.08) 40%, transparent 70%)`,
              }}
            />
          )}
        </AnimatePresence>

        {/* Border glow */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-b from-pink-500/5 to-purple-500/5 rounded-3xl"></div>
        
        {/* Left side - Image with scroll animations */}
        <div 
          ref={imageRef}
          className="md:w-1/2 lg:w-2/5 h-[650px] overflow-hidden relative"
        >
          {/* Image container with depth effect */}
          <div className="w-full h-full perspective-1000">
            <motion.div 
              className="w-full h-full relative"
              style={{
                y: imageY,
                scale: imageScale,
                rotateZ: imageRotate,
              }}
            >
              {/* Geometric accent shapes */}
              <div className="absolute -top-10 -right-16 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              
              {/* Card container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_70px_-15px_rgba(219,39,119,0.3)] border border-white/10 backdrop-filter backdrop-blur-sm">
                {/* Image highlight effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-transparent to-purple-500/20 opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                
                {/* Dark gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(215deg, rgba(107, 13, 51, 0.8) 0%, rgba(219, 39, 119, 0.7) 60%, rgba(244, 114, 182, 0.6) 100%)"
                  }}
                ></div>
                
                {/* Project title header */}
                <div className="absolute top-0 inset-x-0 p-6 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="bg-white/10 p-2 rounded-full backdrop-blur-md"
                    >
                      <ChevronRight className="size-5 text-white" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Image */}
           
              <img
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full p-5 object-cover rounded-2xl  scale-110 transform-gpu"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url('${project.image}')`,
                    filter: "contrast(1.1) brightness(0.9)",
                  }}
                />
          
                
                {/* Glass overlay at the bottom */}
                <motion.div 
                  className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent py-6 px-6 backdrop-blur-sm"
                  whileHover={{ height: "50%" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-pink-400 size-4" />
                    <p className="text-white/90 text-sm font-medium">Hover for preview</p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80 text-sm line-clamp-3"
                  >
                    {project.description}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Right side - Fixed description */}
        <div className="md:w-1/2 lg:w-3/5 flex flex-col sticky top-32 self-start">
          {/* Project title with underline animation */}
          <div className="relative">
            <motion.div 
              className="flex items-center"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-white text-3xl font-bold tracking-tight">
                {project.title}
              </h2>
            </motion.div>
            
            <motion.div
              className="h-px mt-3 mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
          
          {/* Description with frosted glass effect */}
          <motion.div
            className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-white/90 text-base leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech stack */}
            <div className="mt-6 mb-4">
              <div className="text-pink-400 text-sm font-medium mb-3 flex items-center gap-2">
                <div className="h-px w-6 bg-pink-600"></div>
                TECHNOLOGIES
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full text-xs font-medium text-pink-300 border border-pink-500/20 backdrop-blur-sm shadow-sm"
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(219, 39, 119, 0.3)",
                      boxShadow: "0 0 15px rgba(219, 39, 119, 0.5)"
                    }}
                    custom={index}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Action buttons */}
          <motion.div 
            className="flex gap-4 mt-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Source code button */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 py-3.5 px-4 text-white font-medium overflow-hidden">
                {/* Subtle light effect */}
                <div className="absolute -inset-x-1/2 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent w-[200%] group-hover:animate-[shimmer_2s_infinite]" />
                <Github className="size-5" />
                <span>View Source</span>
              </div>
            </motion.a>

            {/* Live demo button */}
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-purple-600/80 rounded-2xl -z-10" />
              <div className="relative flex items-center justify-center gap-2 backdrop-blur-md rounded-2xl border border-white/20 py-3.5 px-4 text-white font-medium overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute -inset-x-1/2 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent w-[200%] group-hover:animate-[shimmer_2s_infinite]" />
                <div className="absolute -inset-x-1/2 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent w-[200%] group-hover:animate-[shimmer_2s_infinite]" />
                <ExternalLink className="size-5" />
                <span>Live Demo</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;

// Add this to your global CSS for the shimmer animation
// @keyframes shimmer {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// }