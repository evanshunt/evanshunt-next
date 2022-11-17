import React from "react";

const DEIResult = ({ question, results, activeResultYear, barChart }) => {
  if (results[activeResultYear]) {
    return (
      <li>
        {!barChart && <strong>Yes</strong>}
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