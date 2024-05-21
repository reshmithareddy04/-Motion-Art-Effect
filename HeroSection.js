import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo('.hero-title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-500 to-purple-500 h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-white hero-title">Welcome to Motion Art Effect</h1>
    </section>
  );
};

export default HeroSection;
