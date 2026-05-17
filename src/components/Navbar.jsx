import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/Sanotox-logo.png';
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
        <div className="navbar-logo-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={brandLogo} alt="Trade With Santox Logo" className="navbar-logo-img" />
        </div>

        {/* Right Side: CTA Button */}
        <div className="navbar-actions">
          <button className="btn-primary navbar-cta" onClick={onOpenModal}>
            Join Free Community
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
