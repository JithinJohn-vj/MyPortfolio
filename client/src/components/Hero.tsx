import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="profile-container">
        <img src="/public/profile.jpg" alt="Profile" className="profile-image w-[150px] h-[150px] rounded-full object-cover border-2 border-white/10" />
      </div>
      <h1 className="hero-title">I'm Jithin.</h1>
      <div className="hero-subtitle">
        <Typewriter
          options={{
            strings: ['A Software Developer.', 'Full Stack Developer.', 'Problem Solver.'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="hero-description">
        This portfolio showcases my diverse experience, methods, and 
        outcomes in crafting exceptional software solutions.
      </p>
      <a href="#projects" className="show-work-btn">
        Show work
        <span className="arrow-down">↓</span>
      </a>
    </section>
  );
}