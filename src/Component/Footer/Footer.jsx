import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ExternalLink } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Links for navigation sections
  const generalLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "https://jagdish-blogs.vercel.app/" },
    { name: "About", href: "#about" }
  ];
  
  const websiteLinks = [
    { name: "Guest Book", href: "#guest-book" },
    { name: "Bucket List", href: "#bucket-list" },
    { name: "Links", href: "#links" },
    { name: "Book a call", href: "#book-call" }
  ];

  // Social media links
  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/jagdish-dhage/", 
      icon: <Linkedin size={18} className="mr-2" /> 
    },
    { 
      name: "GitHub", 
      href: "https://github.com/JagdishDhage", 
      icon: <Github size={18} className="mr-2" /> 
    },
    { 
      name: "Twitter", 
      href: "https://x.com/DhageDev002", 
      icon: <Twitter size={18} className="mr-2" /> 
    },
    { 
      name: "Bluesky", 
      href: "#", 
      icon: <ExternalLink size={18} className="mr-2" /> 
    }
  ];

  return (
    <footer className="relative pt-20 pb-10 backdrop-blur-sm bg-black/40 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Jagdish Sopan Dhage</h3>
            <p className="text-gray-400 mb-6">Helping you craft experiences where design and functionality blend effortlessly.</p>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="flex items-center bg-indigo-900/30 hover:bg-indigo-700/40 text-indigo-300 hover:text-indigo-100 px-3 py-2 rounded-lg transition-all duration-300 text-sm backdrop-blur-sm border border-white/5 hover:border-indigo-500/50"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* General Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              General
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/60 to-indigo-500/0"></div>
            </h3>
            <ul className="space-y-3">
              {generalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/50 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Website Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              The Website
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/60 to-indigo-500/0"></div>
            </h3>
            <ul className="space-y-3">
              {websiteLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/50 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/60 to-indigo-500/0"></div>
            </h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>
            <a 
              href="mailto:hello@aayushbharti.in"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              jagdish.dev002@gmail.com
            </a>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Jagdish Dhage. All rights reserved.</p>
          <div className="flex items-center mt-3 md:mt-0">
            <span>Designed & Built with</span>
            <Heart size={14} className="mx-1 text-red-500" fill="currentColor" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;