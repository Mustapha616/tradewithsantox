import React from 'react';
import { Users, Clock, Globe, Shield, Activity } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const trustMetrics = [
    { icon: <Users size={20} />, label: "5,000+ Community Members" },
    { icon: <Clock size={20} />, label: "8+ Years Trading Experience" },
    { icon: <Globe size={20} />, label: "Students in 40+ Countries" },
    { icon: <Shield size={20} />, label: "Verified Track Record" },
    { icon: <Activity size={20} />, label: "Prop Firm Passes" },
    // Duplicate for seamless infinite scroll
    { icon: <Users size={20} />, label: "5,000+ Community Members" },
    { icon: <Clock size={20} />, label: "8+ Years Trading Experience" },
    { icon: <Globe size={20} />, label: "Students in 40+ Countries" },
    { icon: <Shield size={20} />, label: "Verified Track Record" },
    { icon: <Activity size={20} />, label: "Prop Firm Passes" },
  ];

  return (
    <section className="trust-bar">
      <div className="trust-scroll-container">
        <div className="trust-scroll-track">
          {trustMetrics.map((metric, index) => (
            <div className="trust-badge" key={index}>
              <div className="trust-icon">{metric.icon}</div>
              <span className="trust-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
