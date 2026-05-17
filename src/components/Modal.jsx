import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Load credentials securely from environment variables with safe placeholders
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_santoxfx';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_welcome';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (publicKey && publicKey !== 'your_emailjs_public_key') {
      const templateParams = {
        name: name,
        email: email,
        reply_to: 'support@santoxfx.com'
      };

      // Asynchronous non-blocking dispatch
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Welcome email dispatched successfully:', response.status, response.text);
        })
        .catch((err) => {
          console.error('EmailJS transmission failed:', err);
        });
    } else {
      console.warn('VITE_EMAILJS_PUBLIC_KEY is not configured yet. Set it up in your .env file to enable real welcome emails.');
    }

    // Trigger congratulations state instantly
    setSubmitted(true);
  };

  const handleClose = () => {
    // Reset state on close
    setName('');
    setEmail('');
    setSubmitted(false);
    onClose();
  };

  // Automatic redirect & close trigger
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.open('https://t.me/santoxfreesignalgroup', '_blank', 'noopener,noreferrer');
        handleClose(); // Fades out full-screen page automatically
      }, 4500); // 4.5 seconds delay so the immersive page animations are fully appreciated

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Framer Motion variants for staggered congratulatory page animation
  const successContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15
      }
    }
  };

  const successItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", damping: 16, stiffness: 100 } 
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -60 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", damping: 12, stiffness: 130 } 
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {!submitted ? (
            <div className="modal-overlay-wrapper" key="modal-form">
              {/* Backdrop blur overlay */}
              <motion.div 
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              />

              {/* Modal Card */}
              <motion.div 
                className="modal-card glass-panel"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
              >
                <button className="modal-close-btn" onClick={handleClose}>
                  <X size={20} />
                </button>

                <div className="modal-form-content">
                  <div className="badge">Instant Access</div>
                  <h3 className="modal-title">Unlock <span className="text-gradient">Free Community Access</span></h3>
                  <p className="modal-subtitle">
                    Enter your details below to secure your spot inside the inner circle, activate your welcome pack, and instantly join the Telegram group.
                  </p>

                  <form onSubmit={handleSubmit} className="modal-form">
                    <div className="input-group">
                      <label htmlFor="first-name">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        required 
                        placeholder="e.g. John" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="email-address">Email Address</label>
                      <input 
                        type="email" 
                        id="email-address" 
                        required 
                        placeholder="name@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    <button type="submit" className="btn-primary modal-submit-btn">
                      Proceed to Telegram <ArrowRight size={18} />
                    </button>
                  </form>

                  <p className="modal-privacy-note">
                    🔒 We respect your privacy. Zero spam. Unsubscribe anytime.
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              className="fullscreen-thankyou-overlay"
              key="thank-you-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button className="modal-close-btn thankyou-close-btn" onClick={handleClose}>
                <X size={20} />
              </button>

              <motion.div 
                className="thankyou-content"
                variants={successContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="thankyou-icon-wrapper" variants={iconVariants}>
                  <CheckCircle2 size={64} className="success-icon" />
                </motion.div>
                
                <motion.h2 className="thankyou-title" variants={successItemVariants}>
                  Congratulations, <span className="text-gradient">You're In!</span>
                </motion.h2>
                
                <motion.p className="thankyou-subtitle" variants={successItemVariants}>
                  We have sent your exclusive welcome guide, starter trading resources, and official community access keys straight to <strong>{email}</strong>.
                </motion.p>
                
                <motion.div className="thankyou-cta-box" variants={successItemVariants}>
                  <a 
                    href="https://t.me/santoxfreesignalgroup" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary thankyou-btn"
                  >
                    Join Telegram Channel
                  </a>
                  
                  <p className="redirect-countdown">
                    Redirecting you to Telegram automatically in a few seconds...
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
