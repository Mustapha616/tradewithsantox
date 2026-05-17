import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './Hero.css';

const tradingPairs = [
  "EUR/USD - 15m", "GBP/USD - 5m", "USD/JPY - 1H", "AUD/USD - 15m", 
  "USD/CAD - 4H", "NZD/USD - 15m", "USD/CHF - 1H", "EUR/GBP - 5m", 
  "EUR/JPY - 15m", "GBP/JPY - 1H", "BTC/USD - 4H", "ETH/USD - 15m", 
  "SOL/USD - 5m", "XAU/USD - 1H", "XAG/USD - 15m", "US30 - 5m", 
  "NAS100 - 15m", "SPX500 - 1H", "WTI/USD - 15m", "BRENT - 4H"
];

// Helper to generate a realistic looking chart path
const generateChartPath = () => {
  let path = "M0,150";
  let currentY = 150;
  
  // Generate 10 points for the chart
  for (let i = 1; i <= 10; i++) {
    const x = i * 40;
    // Random movement between -40 and +40
    const movement = (Math.random() - 0.5) * 80;
    currentY = Math.max(20, Math.min(180, currentY + movement)); // Keep within bounds
    path += ` L${x},${currentY}`;
  }
  return path;
};

const Hero = ({ onOpenModal }) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [chartPath, setChartPath] = useState(generateChartPath());
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      
      setTimeout(() => {
        setCurrentPairIndex((prev) => (prev + 1) % tradingPairs.length);
        setChartPath(generateChartPath());
        setFade(false); // Fade in with new data
      }, 300); // Wait for fade out to complete
      
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Generate fill path based on line path
  const fillPath = `${chartPath} L400,200 L0,200 Z`;

  return (
    <section className="hero section-padding">
      <div className="container">
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot"></span>
            Accepting New Students for 2026
          </div>
          
          <h1 className="hero-title">
            CRYPTO. FOREX. <span className="text-gradient-primary">HONEST.</span>
          </h1>
          
          <p className="hero-subtitle">
            Join a professional, 100% free Telegram trading community. Copy precise Crypto & Forex setups, master risk management, and build consistent market payouts directly alongside a veteran mentor.
          </p>
          
          <div className="hero-ctas">
            <button onClick={onOpenModal} className="btn-primary">
              Join Free Community <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn-secondary"
            >
              See the Process
            </button>
          </div>
          
          <div className="hero-trust-metrics">
            <div className="metric">
              <strong>640+</strong>
              <span>Active Students</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <strong>$700k+</strong>
              <span>Student Funding</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <strong>4.9/5</strong>
              <span>Mentorship Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visuals">
          {/* Decorative background elements */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          
          <div className="glass-panel chart-mockup">
            <div className="chart-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className={`chart-title ${fade ? 'fade-out' : 'fade-in'}`}>
                {tradingPairs[currentPairIndex]}
              </div>
            </div>
            <div className={`chart-body ${fade ? 'fade-out' : 'fade-in'}`}>
              {/* Abstract dynamic chart visualization */}
              <svg viewBox="0 0 400 200" className="chart-svg">
                <path d={chartPath} 
                      fill="none" stroke="var(--color-primary)" strokeWidth="3" className="chart-line-dynamic" />
                <path d={fillPath} 
                      fill="url(#chart-gradient)" className="chart-fill-dynamic" />
                <defs>
                  <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary-glow)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
