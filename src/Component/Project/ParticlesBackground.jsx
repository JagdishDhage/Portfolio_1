import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 z-10">  {/* Container with proper z-index */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },  // Disable fullscreen mode
          background: { 
            color: { value: "transparent" },  // Make background transparent
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#000000" },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: "bounce",  // Fixed property name (was outMode)
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: 2 },
          },
          detectRetina: true,
        }}
        className="w-full h-full"  // Remove absolute positioning here
      />
    </div>
  );
}

export default ParticlesBackground;