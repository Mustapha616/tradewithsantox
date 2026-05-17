import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta section-padding">
      <div className="container">
        
        <div className="cta-content glass-panel">
          <div className="glow-orb orb-5"></div>
          
          <div className="cta-inner">
            <div className="badge">Limited Spots Available</div>
            <h2 className="cta-title">
              Trading Success Comes From <br/>
              <span className="text-gradient">Structure, Discipline & Consistency</span>
            </h2>
            <p className="cta-subtitle">
              Stop guessing. Stop gambling. Start treating your trading like a business. 
              Join the mentorship and build the foundation for a sustainable career.
            </p>
            
            <div className="cta-buttons">
              <button className="btn-primary cta-btn-main">
                Apply Today <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">Message on WhatsApp</button>
            </div>
            
            <p className="cta-guarantee">
              Spots are limited to ensure quality feedback for every student.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
