import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles, Bot, ThumbsUp, ThumbsDown } from 'lucide-react';
import './Chatbot.css';

const Chatbot = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unlikeCount, setUnlikeCount] = useState(0);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hey there! 👋 I am Santox's Virtual Assistant. I can instantly help you with community details, daily setups, mentor credentials, and how to claim your 100% free channel access key. What would you like to know?"
    }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Timed Welcome Tooltip on Page Load
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7500); // Fades out after 6 seconds of exposure

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Dynamic Background Loader for Real Tawk.to CS Chat
  useEffect(() => {
    // Uses VITE_TAWKTO_PROPERTY_ID / VITE_TAWKTO_WIDGET_ID from environment, or falls back to your real credentials
    const propertyId = import.meta.env.VITE_TAWKTO_PROPERTY_ID || '6a09ff7b2184221c350f6104';
    const widgetId = import.meta.env.VITE_TAWKTO_WIDGET_ID || '1jorgruti';

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function() {
      // Hide Tawk.to's default floating launcher bubble to prevent visual clashing
      if (typeof window.Tawk_API.hideWidget === 'function') {
        window.Tawk_API.hideWidget();
      }
    };

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowTooltip(false); // Instantly hide tooltip when chat expands
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  // Predefined quick enquiry chips
  const quickChips = [
    { label: "Is the community 100% free? 💸", query: "Is it free?" },
    { label: "What setups do you share? 📈", query: "What pairs do you trade?" },
    { label: "Who is Santox? 👑", query: "Who is Santox?" },
    { label: "How do I secure my spot? 🚀", query: "How do I join?" }
  ];

  // Semantic query answering matching engine
  const getBotResponse = (userQuery) => {
    const query = userQuery.toLowerCase();

    if (query.includes('free') || query.includes('cost') || query.includes('pay') || query.includes('price') || query.includes('premium') || query.includes('subscription')) {
      return {
        text: "Yes, our community channel is 100% free! There are absolutely zero monthly subscription fees, hidden paywalls, or premium upgrades. You get ongoing access to precise daily setups, live charts, and active community chat with no strings attached."
      };
    }
    
    if (query.includes('join') || query.includes('start') || query.includes('register') || query.includes('sign up') || query.includes('how do i') || query.includes('get access')) {
      return {
        text: "Joining the community is instant! Just tap the button below to register your spot. We'll immediately send your welcome pack to your email and give you direct access keys to the Telegram channel.",
        isCTA: true
      };
    }

    if (query.includes('mentor') || query.includes('santox') || query.includes('founder') || query.includes('expert') || query.includes('experience') || query.includes('who is')) {
      return {
        text: "Trade With Santox is mentored by Santox, a veteran trader with over 5 years of active market experience and 43,800+ hours spent studying charts. He built this community to bring absolute transparency to trading and help others find consistency."
      };
    }

    if (query.includes('pair') || query.includes('trade') || query.includes('asset') || query.includes('crypto') || query.includes('forex') || query.includes('gold')) {
      return {
        text: "We focus on high-probability setups across major Crypto pairs (BTC, ETH, SOL) and liquid Forex majors (EUR/USD, GBP/USD, Gold) to guarantee reliable execution coordinates."
      };
    }

    if (query.includes('experience') || query.includes('beginner') || query.includes('new') || query.includes('learn')) {
      return {
        text: "No prior trading experience is required! We provide exact Entry, Stop Loss, and Take Profit coordinates, making it extremely easy to follow along. Plus, we send you a premium starter guide to your email upon registration!"
      };
    }

    if (query.includes('risk') || query.includes('blow') || query.includes('money') || query.includes('loss')) {
      return {
        text: "Risk management is our absolute priority. We advocate strict capital preservation rules, typically risking only 1% to 2% per trade, so you can build long-term trading longevity safely."
      };
    }

    // Default fallback
    return {
      text: "I want to make sure I guide you perfectly! Please click one of our quick enquiry chips below or use any button on the page to register for instant Telegram community access."
    };
  };

  const handleRateMessage = (messageId, ratingType) => {
    // Lock vote to prevent multiple ratings on the same answer
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        return { ...msg, rated: ratingType };
      }
      return msg;
    }));

    if (ratingType === 'unlike') {
      const nextUnlikeCount = unlikeCount + 1;
      setUnlikeCount(nextUnlikeCount);

      if (nextUnlikeCount === 3) {
        // Trigger CS agent transfer loader after 800ms
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 10,
            sender: 'bot',
            text: "I'm sorry my answers haven't been as helpful as they should be! 😔 Would you like to connect directly with a real customer support agent for assistance?",
            isCS: true
          }]);
        }, 850);
      }
    }
  };

  const triggerRealCSChat = () => {
    if (window.Tawk_API && typeof window.Tawk_API.showWidget === 'function') {
      try {
        window.Tawk_API.showWidget();
        window.Tawk_API.maximize();
        handleCloseChat(); // Minimize our custom AI chatbot panel
      } catch (err) {
        console.error("Failed to launch Tawk.to widget:", err);
      }
    } else {
      // Friendly simulated demo fallback if network is slow or blocked
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now() + 20,
          sender: 'bot',
          text: "🚀 Connecting with a real live agent... If the live chat window did not pop open automatically, please click 'Chat with Support (Telegram)' below or email support@santoxfx.com for instant assistance!"
        }]);
      }, 1000);
    }
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Trigger paced thinking loader
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(textToSend);
      setIsTyping(false);

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseData.text,
        isCTA: responseData.isCTA
      };
      setMessages(prev => [...prev, botMsg]);
    }, 850); // 850ms delayed simulation response
  };

  return (
    <div className="chatbot-wrapper">
      
      {/* Floating Chat Trigger Icon */}
      {!isOpen && (
        <button 
          className="chatbot-trigger-btn glass-panel" 
          onClick={handleOpenChat}
          aria-label="Open AI Chatbot"
        >
          <Sparkles className="sparkle-gold-icon" size={24} />
          <MessageSquare className="chat-trigger-icon" size={24} />
        </button>
      )}

      {/* Auto-Welcome Tooltip Bubble */}
      {showTooltip && !isOpen && (
        <div className="chatbot-tooltip glass-panel">
          <p>👋 Hey! Have questions about Trade With Santox? Let's chat!</p>
          <div className="tooltip-arrow"></div>
        </div>
      )}

      {/* Floating Chat Panel overlay */}
      {isOpen && (
        <div className="chatbot-panel glass-panel">
          
          {/* Header Panel */}
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <Bot size={20} className="chatbot-avatar-icon" />
              <div className="avatar-status-pulse"></div>
            </div>
            <div className="chatbot-header-text">
              <h4>Santox AI Assistant</h4>
              <span>Online • Support</span>
            </div>
            <button className="chatbot-close-btn" onClick={handleCloseChat}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="chatbot-messages-container">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble-wrapper ${msg.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
                <div className="message-bubble-group">
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    
                    {/* Funnel Integration CTA Button */}
                    {msg.isCTA && (
                      <button 
                        onClick={() => {
                          handleCloseChat();
                          onOpenModal();
                        }} 
                        className="btn-primary chatbot-inline-cta"
                      >
                        Unlock Free Access Now
                      </button>
                    )}

                    {/* CS Escalation Options */}
                    {msg.isCS && (
                      <div className="chatbot-cs-options">
                        <button 
                          onClick={triggerRealCSChat} 
                          className="btn-primary chatbot-cs-btn live-cs-btn"
                        >
                          Chat with Live CS Agent 💬
                        </button>
                        <a 
                          href="https://t.me/santoxfreesignalgroup" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-secondary chatbot-cs-btn tg-cs-btn"
                        >
                          Chat with Support (Telegram)
                        </a>
                        <a 
                          href="mailto:support@santoxfx.com?subject=Trade%20With%20Santox%20-%20Support%20Enquiry" 
                          className="btn-secondary chatbot-cs-btn email-cs-btn"
                        >
                          Email Support Team
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Message Rating Controls */}
                  {msg.sender === 'bot' && msg.id !== 1 && !msg.isCS && !msg.isCTA && (
                    <div className="message-feedback-row">
                      <button 
                        onClick={() => handleRateMessage(msg.id, 'like')} 
                        className={`feedback-btn ${msg.rated === 'like' ? 'active-like' : ''}`}
                        disabled={!!msg.rated}
                        aria-label="Rate helpful"
                      >
                        <ThumbsUp size={12} />
                      </button>
                      <button 
                        onClick={() => handleRateMessage(msg.id, 'unlike')} 
                        className={`feedback-btn ${msg.rated === 'unlike' ? 'active-unlike' : ''}`}
                        disabled={!!msg.rated}
                        aria-label="Rate unhelpful"
                      >
                        <ThumbsDown size={12} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Bouncing Thinking Indicator */}
            {isTyping && (
              <div className="message-bubble-wrapper msg-bot">
                <div className="message-bubble thinking-bubble">
                  <div className="thinking-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-reply Enquiry Chips */}
          <div className="chatbot-chips-container">
            {quickChips.map((chip, i) => (
              <button 
                key={i} 
                className="chatbot-chip"
                onClick={() => handleSendMessage(chip.query)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* TextInput Message Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }} 
            className="chatbot-input-form"
          >
            <input 
              type="text" 
              placeholder="Ask about free access, setups..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputText.trim()}>
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};

export default Chatbot;
