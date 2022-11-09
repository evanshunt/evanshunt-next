import React from "react";
import ReactMarkdown from "react-markdown";
import DEIResult from "../components/DEIResult";

const DEIQuestion = ({ title, toolTip, barChart, results, currentYear }) => {
  // Massage results table into a workable object
  const resultHeaders = results.tableData[0];
  let resultYears = [];
  let formattedResults = [];
  for (let i=1; i<resultHeaders.length; i++) {
    if (resultHeaders[i] <= currentYear) {
      resultYears.push(resultHeaders[i]);
    }
  }
  for (let i=1; i<results.tableData.length; i++) {
    let questionResults = results.tableData[i];
    let questionLabel = questionResults[0];
    let yearResults = {};
    for (let j=1; j<questionResults.length; j++) {
      if (questionResults[j] != null && questionResults[j] != "") {
        yearResults[resultYears[j-1]] = questionResults[j];
      }
    }
    formattedResults.push({question: questionLabel, results: yearResults});
  }

  const [toolTipIsOpen, setToolTipIsOpen] = React.useState(false);
  const [activeYear, setActiveYear] = React.useState(currentYear);

  return (
    <div className="question">
      <h4>{title}</h4>
      {toolTip && <button onClick={() => setToolTipIsOpen(!toolTipIsOpen)} className="tooltipOpen">i</button>}
      {toolTip && 
      <div className={`tooltip ${toolTipIsOpen ? `open` : `closed`}`}>
          <button onClick={() => setToolTipIsOpen(false)} className="tooltipClosed">x</button>
          <ReactMarkdown source={toolTip} />
        </div>
      }
      <div className={barChart ? `results barchart` : `results circle`}>
        <ul>
          {formattedResults.map((item, i) => {
            return( 
              <DEIResult key={i} {...item} activeYear={activeYear} />
            )
          })}
        </ul>
      </div>
      {resultYears.length > 1 && 
        <div className="results-year-toggle"><span>See results from</span>
          {resultYears.map((item, i) => {
            return <button key={i} onClick={() => setActiveYear(item)}>{item}</button>
          })}
        </div> 
      }
    </div>
  );
};

export default DEIQuestion;