import React from "react";
import ReactMarkdown from "react-markdown";
import DEIResult from "../components/DEIResult";

const DEIQuestion = ({ title, toolTip, barChart, results, summaries, activeYear, latestYear }) => {
  // Massage results table into a workable object
  const resultHeaders = results.tableData[0];
  let resultYears = [];
  let formattedResults = [];
  for (let i=1; i<resultHeaders.length; i++) {
    if (resultHeaders[i] != null && resultHeaders[i] != "" && resultHeaders[i] <= latestYear) {
      resultYears.push(resultHeaders[i]);
    }
  }
  for (let i=1; i<results.tableData.length; i++) {
    let questionResults = results.tableData[i];
    let questionLabel = questionResults[0];
    let yearResults = {};
    for (let j=1; j<questionResults.length; j++) {
      if (questionResults[0] != null && questionResults[0] != "" && questionResults[j] != null && questionResults[j] != "") {
        yearResults[resultYears[j-1]] = questionResults[j];
      }
    }
    formattedResults.push({question: questionLabel, results: yearResults});
  }

  const [toolTipIsOpen, setToolTipIsOpen] = React.useState(false);
  const [activeResultYear, setActiveResultYear] = React.useState(activeYear);
  console.log(summaries);

  return (
    <div className="question">
      <h4>{title}</h4>
      {toolTip && <button onClick={() => setToolTipIsOpen(!toolTipIsOpen)} className="tooltipOpen">i</button>}
      {toolTip && 
      <div className={`tooltip ${toolTipIsOpen ? `open` : `closed`}`}>
          <button onClick={() => setToolTipIsOpen(false)} className="tooltipClosed">x</button>
          <p>{toolTip}</p>
        </div>
      } 
      {summaries.map((item, i) => {
        return (
          <div className={`summary ${activeResultYear == item.fields.year ? `selected` : `not-selected`}`} key={i}>
            <ReactMarkdown source={item.fields.summary} />
          </div>
        )
      })}
      <div className={`results ${barChart ? `barchart` : `circle`}`}>
        <ul>
          {formattedResults.map((item, i) => {
            return( 
              <DEIResult key={i} {...item} activeResultYear={activeResultYear} barChart={barChart} />
            )
          })}
        </ul>
      </div>
      {resultYears.length > 1 && 
        <div className="results-year-toggle"><span>See results from</span>
          {resultYears.map((item, i) => {
            return <button key={i} onClick={() => setActiveResultYear(item)}>{item}</button>
          })}
        </div> 
      }
    </div>
  );
};

export default DEIQuestion;