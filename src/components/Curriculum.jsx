import React from 'react';
import { BookOpen, Layers, LineChart, NotebookPen, Video, Brain, Play } from 'lucide-react';
import './Curriculum.css';

const Curriculum = () => {
  const topics = [
    {
      icon: <Layers size={24} />,
      title: "Market Structure",
      desc: "Understand the true direction of the market without relying on lagging indicators."
    },
    {
      icon: <Brain size={24} />,
      title: "Trading Psychology",
      desc: "Master your emotions, eliminate fear and greed, and trade with complete neutrality."
    },
    {
      icon: <LineChart size={24} />,
      title: "Risk Management",
      desc: "Learn to size your positions correctly and protect your capital like a professional."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Entry Models",
      desc: "Precise, mechanical setups that give you a statistical edge over the long term."
    },
    {
      icon: <NotebookPen size={24} />,
      title: "Trade Journaling",
      desc: "Track your data to find your strengths and eliminate repeated mistakes."
    },
    {
      icon: <Video size={24} />,
      title: "Live Analysis",
      desc: "Watch the execution of these concepts in real-time during live market hours."
    }
  ];

  return (
    <section className="curriculum section-padding">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">
            The Complete <span className="text-gradient">Blueprint</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to go from inconsistent to funded, step-by-step.
          </p>
        </div>

        <div className="curriculum-grid">
          {topics.map((topic, index) => (
            <div className="curriculum-card glass-panel" key={index}>
              <div className="card-top">
                <div className="curriculum-icon">{topic.icon}</div>
                <div className="module-badge">Module {index + 1}</div>
              </div>
              <h3 className="curriculum-title">{topic.title}</h3>
              <p className="curriculum-desc">{topic.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="curriculum-cta">
          <button className="btn-primary">
            Start Learning <Play size={18} fill="currentColor" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
