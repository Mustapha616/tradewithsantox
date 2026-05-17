import React from 'react';
import './HowItWorks.css';

const HowItWorks = ({ onOpenModal }) => {
  const steps = [
    {
      title: "Secure Your Spot",
      desc: "Enter your first name and email in our CTA modal to register your community membership and activate your welcome pack."
    },
    {
      title: "Join the Free Channel",
      desc: "Click the direct Telegram invite link to enter the SantoxFX inner circle and access live trading coordinates."
    },
    {
      title: "Earn & Grow Together",
      desc: "Copy precise entries, track dynamic live chart analyses, and build daily consistency alongside 640+ serious traders."
    }
  ];

  return (
    <section className="how-it-works section-padding" id="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">The Flow</div>
          <h2 className="section-title">
            Our Execution <span className="text-gradient">Flow</span>
          </h2>
          <p className="section-subtitle">
            Zero monthly subscription fees, zero hidden hooks. Just 100% transparent daily trade setups and instant community cooperation.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>
              <div className="timeline-content glass-panel">
                <div className="step-number">0{index + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-cta" style={{ textAlign: 'center', marginTop: '50px' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Access Free Community
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
