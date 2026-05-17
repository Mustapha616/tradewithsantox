import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ResultsShowcase.css';

const ResultsShowcase = () => {
  const results = [
    {
      id: 1,
      type: "withdrawal",
      amount: "$15,400",
      description: "First major payout after 3 months of mentorship.",
      student: "Marcus T.",
      size: "large"
    },
    {
      id: 2,
      type: "chart",
      amount: "1:4 RR",
      description: "Clean execution on EUR/USD following our A+ setup.",
      student: "Sarah J.",
      size: "medium"
    },
    {
      id: 3,
      type: "funded",
      amount: "$100k",
      description: "Passed phase 2. Consistency pays off.",
      student: "David L.",
      size: "small"
    },
    {
      id: 4,
      type: "withdrawal",
      amount: "$8,200",
      description: "Weekly withdrawal from the prop firm.",
      student: "Elena M.",
      size: "medium"
    },
    {
      id: 5,
      type: "chart",
      amount: "1:6 RR",
      description: "Patience and discipline on gold.",
      student: "James K.",
      size: "large"
    },
    {
      id: 6,
      type: "funded",
      amount: "$200k",
      description: "Funded account secured. Thanks for the guidance.",
      student: "Michael B.",
      size: "small"
    }
  ];

  return (
    <section className="results-showcase section-padding">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">Verified Results</div>
          <h2 className="section-title">
            Consistency Creates <span className="text-gradient">Freedom</span>
          </h2>
          <p className="section-subtitle">
            Real student results. No rented cars, no fake lifestyle. Just disciplined trading and structured payouts.
          </p>
        </div>

        <div className="masonry-grid">
          {results.map((result) => (
            <div className={`result-card glass-panel size-${result.size}`} key={result.id}>
              <div className="card-header">
                <span className={`result-badge type-${result.type}`}>
                  {result.type === "withdrawal" && "Withdrawal"}
                  {result.type === "chart" && "Trade Executed"}
                  {result.type === "funded" && "Funded Account"}
                </span>
                <ArrowUpRight size={16} className="card-icon" />
              </div>
              
              <div className="card-body">
                <div className="result-amount">{result.amount}</div>
                <p className="result-desc">{result.description}</p>
              </div>
              
              <div className="card-footer">
                <div className="student-avatar">
                  {result.student.charAt(0)}
                </div>
                <span className="student-name">{result.student}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="results-cta">
          <button className="btn-secondary">View More Results</button>
        </div>

      </div>
    </section>
  );
};

export default ResultsShowcase;
