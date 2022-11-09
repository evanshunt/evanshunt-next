import React from "react";

const DEIResult = ({ question, results, activeYear }) => {
  if (results[activeYear]) {
    return (
      <li>
        <span>{question}</span>
        <div className="valueVisual" data-value={results[activeYear]}>
          <span className="value">
            {results[activeYear]}
          </span>
        </div>
      </li>
    );
  }
  else return null;
};

export default DEIResult;