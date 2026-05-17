import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is the Telegram group really free?",
      a: "Yes, our community channel is 100% free with absolutely zero monthly subscription fees, hidden paywalls, or premium upsells. You get ongoing access to precise daily trading setups, live chart updates, and community support without paying a single dollar."
    },
    {
      q: "What pairs do you trade?",
      a: "We primarily focus on major Crypto assets (BTC, ETH, SOL) and high-volume Forex pairs (EUR/USD, GBP/USD, Gold) to ensure high liquidity and reliable setups."
    },
    {
      q: "Do I need experience to join?",
      a: "While basic knowledge of executing a trade is helpful, we provide exact Entry, Stop Loss, and Take Profit coordinates, making it simple to follow along."
    },
    {
      q: "How many setups do you send a day?",
      a: "We focus on quality over quantity. Expect 1-3 high probability setups per day depending on market conditions. We don't force trades."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq section-padding">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item glass-panel ${openIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.q}</h3>
                <div className="faq-icon">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta glass-panel" style={{ 
          marginTop: '60px', 
          padding: '40px', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '16px',
          maxWidth: '800px',
          margin: '60px auto 0 auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Still Have Questions?</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '500px' }}>
            The best way to find consistency is to trade alongside professionals. Join our free inner circle and master the markets today.
          </p>
          <button className="btn-primary" onClick={onOpenModal} style={{ marginTop: '8px' }}>
            Join Free Community
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
