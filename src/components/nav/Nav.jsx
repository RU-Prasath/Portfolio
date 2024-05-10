import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#experience', '#portfolio', '#contact'];

      for (const sectionId of sections) {
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveNav(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;
