import React from "react";

const DEIResult = ({ question, results, activeResultYear, barChart }) => {
  if (results[activeResultYear]) {
    return (
      <li>
        {!barChart && <strong>Yes</strong>}
        <p>{question}</p>
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