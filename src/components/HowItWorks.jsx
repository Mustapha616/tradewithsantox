import React from 'react';
import './HowItWorks.css';

const HowItWorks = ({ onOpenModal }) => {
  const steps = [
    {
      title: "Join the Free Channel",
      desc: "Click the CTA buttons and join our free Telegram preview channel with absolutely zero commitments or upfront fees."
    },
    {
      title: "Watch the Setups",
      desc: "Observe our daily technical and fundamental trade executions, live chart analyses, and payouts for 7 days."
    },
    {
      title: "Upgrade to Premium",
      desc: "Get full access to the premium channel, live real-time setups, advanced risk-management models, and direct mentorship."
    }
  ];

  return (
    <section className="how-it-works section-padding" id="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">The Flow</div>
          <h2 className="section-title">
            How The 7-Day <span className="text-gradient">Preview Works</span>
          </h2>
          <p className="section-subtitle">
            No upfront credit cards, no sales pressure. Just 100% transparent market setups so you can make an informed decision.
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
            Claim Your 7-Day Access
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
