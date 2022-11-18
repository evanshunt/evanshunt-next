import React from "react";

const DEIResult = ({ question, results, activeResultYear, barChart }) => {
  if (results[activeResultYear]) {
    if (!barChart)
      return (
        <li>
          <p><strong>Yes</strong>{question}</p>
          <div className="value-visual">
            <div className="quantity" style={{background: `conic-gradient(white ${100-results[activeResultYear]}%, red ${100-results[activeResultYear]}%)`}}></div>
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