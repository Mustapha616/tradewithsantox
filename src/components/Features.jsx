import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = ({ onOpenModal }) => {
  const featureList = [
    {
      icon: <TrendingUp size={28} />,
      title: "Daily Setups",
      description: "High-probability setups across major Forex pairs, Gold, and high-volume Cryptocurrencies. Quality setups selected with deep technical and fundamental reasoning.",
      badge: "Crypto & Forex"
    },
    {
      icon: <Target size={28} />,
      title: "Exact Execution",
      description: "No vague 'buy here' messages. Every single setup comes with precise entry triggers, calculated Stop Loss levels, and multiple Take Profit targets.",
      badge: "Transparent"
    },
    {
      icon: <Users size={28} />,
      title: "Premium Community",
      description: "Surround yourself with a dedicated circle of execution-focused traders. Accountability-driven environment, daily pre-market chart walk-throughs, and zero spam.",
      badge: "Inner Circle"
    }
  ];

  return (
    <section className="features section-padding" id="features">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">What You Get</div>
          <h2 className="section-title">
            Professional Market Execution, <span className="text-gradient">No Noise.</span>
          </h2>
          <p className="section-subtitle">
            We don't sell lifestyle dreams. We execute high-edge trades day in and day out with mathematical precision and complete transparency.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((feature, index) => (
            <motion.div 
              className="feature-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <span className="feature-card-badge">{feature.badge}</span>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="features-cta" style={{ textAlign: 'center', marginTop: '50px' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Join Free Signals Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;
