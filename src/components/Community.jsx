import React, { useState, useEffect } from 'react';
import { MessageCircle, BellRing, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Community.css';

const testimonialImages = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop", // placeholder 1 (e.g. chart profit)
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", // placeholder 2 (e.g. data data)
  "https://images.unsplash.com/photo-1642334640134-453715dfbf94?q=80&w=600&auto=format&fit=crop", // placeholder 3 (e.g. phone profit)
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop", // placeholder 4 (e.g. market)
  "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=600&auto=format&fit=crop", // placeholder 5 (e.g. crypto)
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop", // placeholder 6 
  "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=600&auto=format&fit=crop"  // placeholder 7
];

const Community = () => {
  const [cards, setCards] = useState(testimonialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
    }, 3500); // Swipe every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="community section-padding">
      <div className="container">
        
        <div className="community-grid">
          
          <div className="community-content">
            <div className="badge">Inner Circle</div>
            <h2 className="section-title">
              Trading Is A Lonely Journey. <span className="text-gradient">Not Anymore.</span>
            </h2>
            <p className="section-subtitle">
              Surround yourself with disciplined traders focused on growth, execution, and accountability. See real results from inside our community.
            </p>
            
            <div className="community-features">
              <div className="feature">
                <BellRing size={20} className="feature-icon" />
                <span>Daily Pre-Market Analysis</span>
              </div>
              <div className="feature">
                <Users size={20} className="feature-icon" />
                <span>Accountability Groups</span>
              </div>
              <div className="feature">
                <MessageCircle size={20} className="feature-icon" />
                <span>Direct Access & Feedback</span>
              </div>
            </div>
            
            <button className="btn-secondary community-btn">Preview Community</button>
          </div>
          
          <div className="community-visuals">
            <div className="glow-orb orb-4"></div>
            
            <div className="testimonial-stack-container">
              <AnimatePresence>
                {cards.map((imageSrc, index) => {
                  // Define dynamic styling based on the card's position in the stack
                  // Showing all cards with slightly adjusted offsets
                  const scale = Math.max(0.6, 1 - index * 0.04);
                  const yOffset = index * 12;
                  // Alternate rotation slightly for that messy stack feel
                  const rotation = index === 0 ? 0 : index % 2 === 0 ? (index * 1.5) : -(index * 1.5);

                  return (
                    <motion.div
                      key={imageSrc}
                      layout
                      initial={{ scale: 0.8, opacity: 0, y: 100 }}
                      animate={{ 
                        scale: scale, 
                        opacity: 1 - index * 0.2, 
                        y: yOffset,
                        rotate: rotation,
                        zIndex: 10 - index
                      }}
                      exit={{ 
                        x: -300, // Swipe out to the left
                        opacity: 0,
                        rotate: -15,
                        scale: 0.9,
                        transition: { duration: 0.4 }
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                      className="testimonial-card-image"
                    >
                      <img src={imageSrc} alt={`Community Testimonial`} />
                      <div className="image-overlay">
                        {/* Optional overlay text if needed later */}
                        <div className="overlay-badge">Verified Win</div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Community;
