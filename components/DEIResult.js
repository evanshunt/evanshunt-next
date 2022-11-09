import React from "react";

const DEIResult = ({ question, results, activeResultYear }) => {
  if (results[activeResultYear]) {
    return (
      <li>
        <span>{question}</span>
        <div className="valueVisual" data-value={results[activeResultYear]}>
          <span className="value">
            {results[activeResultYear]}
          </span>
        </div>
      </li>
    );
  }
  else return null;
};

export default DEIResult;