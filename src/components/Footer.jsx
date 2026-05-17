import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        
        <div className="footer-content">
          <h3 className="footer-logo">Santox<span className="text-gradient-primary">FX</span></h3>
          <p className="footer-desc">
            Professional trading signals focused on risk management, structure, and execution. Join our free Telegram channel to watch us work.
          </p>
          
          <div className="social-links">
            {/* Email */}
            <a href="mailto:support@santoxfx.com" className="social-icon" aria-label="Email support">
              <Mail size={20} />
            </a>
            
            {/* Twitter X */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.75.28 2.63.29v3.91c-1.19-.01-2.37-.29-3.47-.84-.07 1.53-.02 3.06-.03 4.59-.08 2.22-.84 4.47-2.39 6.07-1.74 1.88-4.39 2.84-6.94 2.5-2.61-.22-5.09-1.91-6.19-4.29-1.39-2.73-.89-6.38 1.12-8.59 1.7-1.92 4.39-2.82 6.94-2.45v3.97c-1.3-.14-2.65.25-3.53 1.25-.88.94-1.14 2.33-.74 3.54.36 1.15 1.39 2.05 2.58 2.24 1.25.22 2.62-.2 3.39-1.19.74-.89.84-2.14.83-3.26V0l.33.02z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-disclaimer">
          <strong>Risk Disclaimer:</strong> Trading CFDs and Forex carries a high level of risk and may not be suitable for all investors. Around 80% of retail accounts lose money when trading CFDs. Trade With Santox is an introducing broker for PU Prime. We earn a commission on trades placed by referred clients. Past performance does not indicate future results. Not financial advice. All trading decisions are your own.
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SantoxFX. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
