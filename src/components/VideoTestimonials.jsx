import React from 'react';
import { PlayCircle, Volume2 } from 'lucide-react';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: "video",
      title: "From blowing accounts to consistent payouts",
      name: "Marcus T.",
      duration: "2:15"
    },
    {
      id: 2,
      type: "audio",
      title: "The psychology lessons changed everything",
      name: "Sarah J.",
      duration: "1:40"
    },
    {
      id: 3,
      type: "video",
      title: "Finally passed my $100k evaluation",
      name: "David L.",
      duration: "3:05"
    },
    {
      id: 4,
      type: "video",
      title: "Risk management is the holy grail",
      name: "Elena M.",
      duration: "1:50"
    }
  ];

  return (
    <section className="video-testimonials section-padding">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">
            Hear From The <span className="text-gradient">Community</span>
          </h2>
          <p className="section-subtitle">
            Real stories from traders who committed to the process.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-track">
            {testimonials.map((test) => (
              <div className="media-card glass-panel" key={test.id}>
                <div className={`media-thumbnail ${test.type}`}>
                  <div className="play-button">
                    {test.type === "video" ? <PlayCircle size={40} /> : <Volume2 size={40} />}
                  </div>
                  <div className="duration-badge">{test.duration}</div>
                </div>
                <div className="media-info">
                  <h3 className="media-title">"{test.title}"</h3>
                  <span className="media-author">- {test.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoTestimonials;
