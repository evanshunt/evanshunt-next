import React from "react";
import ReactMarkdown from "react-markdown";

const DEIQuestion = ({ title, toolTip, barChart, results }) => {
  console.log(results);
  const [toolTipIsOpen, setToolTipIsOpen] = React.useState(false);

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
      </div>
      <span>See results from</span>
      <button>2021</button>
      <button>2020</button>
    </div>
  );
};

export default DEIQuestion;