import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import { ArrowRight, ChevronDown, MousePointer, Quote, BookOpen, Star, HelpCircle, BarChart2 } from "lucide-react";
import bg from "../../assets/bg.avif";
function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);
    
    // Create ref for entire section for better scroll tracking
    const { ref: sectionRef, inView: isInView } = useInView({ 
      threshold: 0.2,
      rootMargin: "-50px 0px"
    });
    
    const controls = useAnimation();
  
    // Testimonials content
    const testimonials = [
      {
        name: "Sarah Johnson",
        position: "CEO",
        company: "TechInnovate",
        image: "/api/placeholder/100/100",
        quote: "Working with this team has transformed our digital presence. They delivered a solution that exceeded our expectations and drove real business results."
      },
      {
        name: "Michael Chen",
        position: "Marketing Director",
        company: "GrowthLabs",
        image: "/api/placeholder/100/100",
        quote: "Incredible attention to detail and a deep understanding of user experience. Our conversion rates improved by 45% after the website redesign."
      },
      {
        name: "Emma Wilson",
        position: "Founder",
        company: "Startup Ventures",
        image: "/api/placeholder/100/100",
        quote: "From concept to completion, the process was seamless. They truly understood our vision and brought it to life with exceptional technical expertise."
      }
    ];
  
    // Blog posts content
   
    // FAQ content
   
  
    // Start animations when component comes into view
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isInView, controls]);
    
    useEffect(() => {
      setIsVisible(true);
  
      const handleMouseMove = (e) => {
        if (heroRef.current) {
          const { left, top, width, height } = heroRef.current.getBoundingClientRect();
          const x = (e.clientX - left) / width;
          const y = (e.clientY - top) / height;
          setMousePosition({ x, y });
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    // Parallax effect for gradient background
    const gradientStyle = {
      background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.15), transparent 80%)`,
    };
  
    // Smooth scroll function
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    // Animation variants for sections
    const sectionVariants = {
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
  
    // For counting animation in stats section
    const countRef = useRef(null);
    const { ref: statsRef, inView: statsInView } = useInView({
      threshold: 0.3,
      triggerOnce: true
    });
  
  return (
    <div 
    ref={heroRef}
    className="flex-1 flex flex-col items-center justify-center px-6 py-20 md:py-32 relative z-10"
  >
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-4 flex justify-center">
        <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
          Full Stack Developer
        </span>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl text-center leading-tight">
        I help founders turn <span className="text-indigo-400 relative">
          ideas
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-indigo-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span>{" "}
        into <span className="text-indigo-400 relative">
          seamless
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-indigo-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span> digital
        experiences
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
        Transforming visions into stunning, functional solutions that
        delight users and drive business growth.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-600/20"
        >
          View My Work
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-lg font-medium hover:bg-white/5 hover:border-white/50 transition-all duration-300"
        >
          Get in Touch
        </button>
      </div>
    </div>

    
    <div className="hidden md:flex absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 items-center gap-2 animate-pulse">
      <MousePointer size={16} />
      <span className="text-sm font-light">Scroll to explore</span>
    </div>
  </div>
  )
}

export default Hero