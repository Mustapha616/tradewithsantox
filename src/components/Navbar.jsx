import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Left Side: Logo */}
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Santox<span className="text-gradient-primary">FX</span>
        </div>

        {/* Right Side: CTA Button */}
        <div className="navbar-actions">
          <button className="btn-primary navbar-cta" onClick={onOpenModal}>
            Get 7 Days Free
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
