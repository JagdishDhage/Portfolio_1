import React, { useEffect, useState } from "react";

function Project() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.async = true;

    script.onload = () => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas.Start("canvas-tech", "tag-list", {
            textColour: "#ffffff",
            outlineMethod: "none",
            reverse: true,
            depth: 0.9,
            maxSpeed: 0.04,
            wheelZoom: false,
            imageScale: 1.2,
            dragControl: true,
            noSelect: true,
            initial: [0.03, -0.03],
            fadeIn: 3000,
            zoomMax: 1.1,
            zoomMin: 0.9,
            pinchZoom: true,
            shadowBlur: 10,
            shadowOffset: [1, 1],
            shadowColor: "#4f46e5",
            tooltip: "native",
            tooltipDelay: 200,
          });
        } catch (e) {
          console.error("TagCanvas error:", e);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (window.TagCanvas) {
        window.TagCanvas.Delete("canvas-tech");
      }
      document.body.removeChild(script);
    };
  }, []);

  const techIcons = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs/white",
    "nodedotjs",
    "zod",
    "android",
    "html5",
    "css3",
    "express/white",
    "prisma",
    "mongodb",
    "amazonwebservices",
    "postgresql",
    "nginx",
    "vercel/white",
    "jest",
    "docker",
    "git",
    "github/white",
    "pnpm",
    "npm",
    "shadcnui",
    "tailwindcss",
    "framer",
    "reacthookform",
    "mysql",
    "expo/gray",
    "clerk",
    "linux",
  ];

  return (
    <div
      className="group h-full relative z-20 flex flex-col justify-between overflow-hidden rounded-2xl bg-transperent/10 backdrop-blur-md shadow-xl border border-white/10 hover:border-indigo-500/30 hover:shadow-indigo-500/10 transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
      
      {/* Tech sphere */}
      <div className="relative w-full flex justify-center items-center h-60 mb-2 overflow-hidden group-hover:scale-105 transition-all duration-700">
        <div className="absolute w-full h-full rounded-full bg-indigo-500/5 blur-3xl transform scale-75 group-hover:scale-100 transition-all duration-700 ease-out"></div>
        <canvas
          id="canvas-tech"
          width="500"
          height="700"
          className="z-10 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div id="tag-list" className="hidden">
          {techIcons.map((tech, index) => (
            <a key={index} href="#" title={tech.split("/")[0]}>
              <img
                src={`https://cdn.simpleicons.org/${tech}`}
                alt={tech.split("/")[0]}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Text Description Section */}
      <div className="z-20 flex flex-col gap-3 p-6">
        <div className="flex flex-col items-start gap-3">
          <div className="p-3 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg transform group-hover:-translate-y-1 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-indigo-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
            </svg>
          </div>
          <div>
            <h3 className="text-indigo-300 text-sm font-medium tracking-wide uppercase mb-1">
              Tech Enthusiast
            </h3>
            <p className="text-lg font-semibold text-white">
              Cutting-edge development technologies
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Passionate about using the latest technologies to build modern, efficient, and scalable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"></div>

      {/* Call to Action Button */}
      <div className="p-6 transition-all duration-500 ease-in-out transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
        <a
          href="/#skills"
          className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Explore Skills</span>
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
  );
}

export default Project;