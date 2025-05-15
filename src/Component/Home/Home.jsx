import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import {
  ArrowRight,
  ChevronDown,
  MousePointer,
  Quote,
  BookOpen,
  Star,
  HelpCircle,
  BarChart2,
} from "lucide-react";
import bg from "../../assets/bg.avif";
import Intro from "./Intro";
import Project from "../Project/Project";
import ProfileCard from "../Project/ProfileCard";
import Work from "../Project/Work";
import Projects from "../Project/projects/Projects";
import Skills from "../../Skills/Skills";
import Hero from "./Hero";
import Education from "../Education/Eduction";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

// Extracted to a separate component for better organization
function SkillsHeader({ controls }) {
  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={headingVariants}
      className="text-center mb-10"
    >
      <h2 className="inline-block text-3xl font-bold text-white mb-3 relative">
        My Skills
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"></div>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        The technologies and tools I use to bring projects to life
      </p>
    </motion.div>
  );
}

// New Testimonial Card Component
function TestimonialCard({ name, position, company, image, quote }) {
  return (
    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
      <div className="flex items-start mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500 flex-shrink-0">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-medium text-white">{name}</h4>
          <p className="text-gray-400 text-sm">
            {position} at {company}
          </p>
        </div>
        <Quote
          size={32}
          className="ml-auto text-indigo-400/30 group-hover:text-indigo-400/50 transition-colors"
        />
      </div>
      <p className="text-gray-300 italic">{quote}</p>
    </div>
  );
}

// New Blog Card Component
function BlogCard({ title, excerpt, date, readTime, image }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
          <span>{date}</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{excerpt}</p>
        <button className="text-indigo-400 font-medium flex items-center gap-2 group-hover:text-indigo-300 transition-colors">
          Read more
          <ArrowRight
            size={16}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}

// New Stats Item Component
function StatItem({ icon, value, label }) {
  return (
    <div className="text-center p-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

// Section Header Component for consistency
function SectionHeader({ title, description }) {
  return (
    <div className="text-center mb-10">
      <h2 className="inline-block text-3xl font-bold text-white mb-3 relative">
        {title}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0"></div>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Create ref for entire section for better scroll tracking
  const { ref: sectionRef, inView: isInView } = useInView({
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  const controls = useAnimation();

  // Testimonials content
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate",
      image: "/api/placeholder/100/100",
      quote:
        "Working with this team has transformed our digital presence. They delivered a solution that exceeded our expectations and drove real business results.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthLabs",
      image: "/api/placeholder/100/100",
      quote:
        "Incredible attention to detail and a deep understanding of user experience. Our conversion rates improved by 45% after the website redesign.",
    },
    {
      name: "Emma Wilson",
      position: "Founder",
      company: "Startup Ventures",
      image: "/api/placeholder/100/100",
      quote:
        "From concept to completion, the process was seamless. They truly understood our vision and brought it to life with exceptional technical expertise.",
    },
  ];

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
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax effect for gradient background
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
      mousePosition.y * 100
    }%, rgba(99, 102, 241, 0.15), transparent 80%)`,
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
        ease: "easeOut",
      },
    },
  };

  // For counting animation in stats section
  const countRef = useRef(null);
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black ">
      {/* Dynamic gradient overlay based on mouse position */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000 ease-out"
        style={gradientStyle}
      ></div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div id="home" ref={heroRef}>
        <Hero />
      </div>

      
    <div>
        <div className="flex justify-center pb-4 animate-bounce">
        <ChevronDown 
          className="text-white/70 cursor-pointer" 
          size={28} 
          onClick={() => scrollToSection("about")}
        />
      </div> 

      {/* About Section - reduced padding */}
     <div
        id="intro"
        className="relative py-16 md:py-24 backdrop-blur-sm "
      >
        <div className="absolute inset-0 bg-gradient-to-b  z-0"></div>
        <Intro />
      </div>

      {/* Projects Section - reduced padding */}
      <div id="portfolio" className="relative py-16  md:py-24" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="My Projects & Services"
            description="Explore my recent work and the services I offer to help businesses succeed in the digital landscape."
          />

          {/* Grid layout for projects and services */}
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Project />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <Work />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - reduced padding */}
      <div id="skills" className="relative py-16 bg-black/80  md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </div>
      </div>

  
      <div id="projects" className="relative py-16 bg-black/70 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
      </div>

      
      <div id="education" className="relative py-16 bg-black/60 md:py-24 ">
        <div className="absolute inset-0  z-0"></div>
        <Education />
      </div>

    

      {/* Profile Section - reduced padding */}
      <div id="about" className="relative py-16 md:py-24 ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30  z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Let's Connect"
            description="Reach out to discuss how we can collaborate on your next digital project."
          />
          <ProfileCard />
        </div>
      </div>

      {/* Contact form - with proper spacing */}
      <div id="contact" className="relative py-16 md:py-24">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
}

export default Home;