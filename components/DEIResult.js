import React from "react";

const DEIResult = ({ question, results, activeResultYear, barChart }) => {
  if (results[activeResultYear]) {
    if (!barChart)
      return (
        <li>
          <p><strong>Yes</strong>{question}</p>
          <div className="value-visual">
            <svg className="quantity" viewBox='0 0 100 100' style={{strokeDashoffset: `${Math.round(2.84 * results[activeResultYear])}`}}>
              <circle cx='50' cy='50' r='45'/>
            </svg>
            <span className="value">
              {results[activeResultYear]}%
            </span>
          </div>
        </li>
      );
    else 
      return (
        <li>
          <p>{question}</p>
          <div className="value-visual">
            <div className="quantity" style={{width: `${results[activeResultYear]}%`}}></div>
            <span className="value">
              {results[activeResultYear]}%
            </span>
          </div>
        </li>
      );
  }
  else return null;
};

export default DEIResult;