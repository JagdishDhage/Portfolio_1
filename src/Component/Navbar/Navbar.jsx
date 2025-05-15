import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import sign from "../../assets/signature-removebg-preview.png";
import { FiCommand } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Updated navLinks to match all sections in the Home component
  const navLinks = [
    { name: "Home", path: "#home" },
   
    { name: "Portfolio", path: "#portfolio" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
    
    { name: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced smooth scroll function with offset adjustment
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false); // Close mobile menu after click
      setActiveSection(sectionId.substring(1)); // Update active section without the #
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      const sections = navLinks.map(link => {
        const section = document.querySelector(link.path);
        if (!section) return { id: link.path.substring(1), top: 0, bottom: 0 };
        
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.pageYOffset;
        return {
          id: link.path.substring(1),
          top: top,
          bottom: top + rect.height
        };
      });
      
      // Find the section that is currently in view
      const currentSection = sections.find(section => 
        scrollPosition >= section.top && scrollPosition < section.bottom
      );
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on component mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-transparent py-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center"
            >
              <img
                src={sign}
                alt="Logo"
                className="h-12 w-auto filter invert transition-all duration-300 hover:opacity-100"
                style={{
                  objectFit: "contain", 
                }}
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="backdrop-blur-md bg-white/10 shadow-lg md:flex md:items-center border border-white/20 rounded-full px-6 py-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => scrollToSection(e, link.path)}
                  className={`text-white px-4 py-1 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.path.substring(1) 
                      ? "text-indigo-400 hover:text-indigo-300" 
                      : "hover:text-indigo-300"
                  } ${index !== navLinks.length - 1 ? "mr-2" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Command Button */}
          <div className="ml-4 flex items-center">
            <button
              className="bg-transparent text-white px-6 py-3 z-10 text-lg font-medium transition-colors duration-300 transform hover:scale-105"
            >
              <FiCommand />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-50 backdrop-blur-lg bg-black/70 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === link.path.substring(1)
                    ? "text-indigo-400 bg-white/5"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;