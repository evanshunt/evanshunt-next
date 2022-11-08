import React from "react";
import ReactMarkdown from "react-markdown";

const DEIYear = ({ fields }) => {
  return (
    <section className="dei-report-year">
      <h2>{fields.year} DEI Report</h2>
      <div className="summary">
        <ReactMarkdown source={fields.summary} />
      </div>
      {fields.categoriesAndQuestions.map((item, i) => {
        console.log(item);
        if (item.sys.contentType.sys.id == "deiReportCategory") {
          return (
            <div className="category">
              <h3>{item.fields.title}</h3>
              {item.fields.summary && <ReactMarkdown source={item.fields.summary} />}
            </div>
          )
        }
        else {
          return (
            <div className="question">
              <h4>{item.fields.title} 
                {item.fields.tooltip && <button className="tooltip">i</button>}
              </h4>
              <div className={item.fields.barChart ? `results barchart` : `results circle`}>

              </div>
              <span>See results from</span>
              <button>2021</button>
              <button>2020</button>
            </div>
          )
        }
      })}
    </section>
  );
};

export default DEIYear;
