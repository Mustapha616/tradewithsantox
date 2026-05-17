import React from 'react';
import { Target, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';
import founderImage from '../assets/founder-image-normal.png';
import './AboutMentor.css';

const AboutMentor = ({ onOpenModal }) => {
  const philosophies = [
    {
      icon: <ShieldAlert size={24} />,
      title: "Risk Management First",
      desc: "Capital preservation is the only way to survive long enough to win."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Consistency Over Hype",
      desc: "Small, repeatable wins build empires. We don't chase home runs."
    },
    {
      icon: <Target size={24} />,
      title: "Systems Over Emotion",
      desc: "A mechanical edge removes the panic and greed from execution."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Discipline Creates Longevity",
      desc: "Trading is a mindset game. We train your psychology first."
    }
  ];

  return (
    <section className="about-mentor section-padding">
      <div className="container">
        
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <div className="glow-orb orb-3"></div>
            <div className="mentor-image glass-panel">
              <img 
                src={founderImage} 
                alt="Santox Mentor Portrait" 
                className="mentor-img-element" 
              />
            </div>
            
            <div className="floating-badge badge-1 glass-panel">
              <strong>43,800+</strong>
              <span>Hours on Charts</span>
            </div>
          </div>
          
          <div className="about-content">
            <div className="badge">Meet Santox</div>
            <h2 className="section-title">
              Trading Isn't A Get-Rich-Quick Scheme. It's A <span className="text-gradient-primary">Profession.</span>
            </h2>
            
            <div className="about-story">
              <p>
                With over 5 years of active market experience, I built this community out of frustration with the noise in the industry. I saw too many signal groups offering vague analysis with no clear execution, leading beginners to blow their accounts.
              </p>
              <p>
                I decided to create a space where everything is transparent. We don't just share charts; we share exact entries, strict risk management, and the honest reality of what it takes to be a profitable trader.
              </p>
            </div>
            
            <div className="philosophy-grid">
              {philosophies.map((phil, index) => (
                <div className="philosophy-card" key={index}>
                  <div className="philosophy-icon">{phil.icon}</div>
                  <div>
                    <h4 className="philosophy-title">{phil.title}</h4>
                    <p className="philosophy-desc">{phil.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="about-cta-container">
              <button className="btn-primary" onClick={onOpenModal}>
                Start Trading With Santox
              </button>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default AboutMentor;
