import React from "react";
import ReactMarkdown from "react-markdown";
import DEIQuestion from "../components/DEIQuestion";

const DEIYear = ({ fields, selected }) => {
  return (
    <section className={`dei-report-year ${selected}`}>
      <h2>{fields.year} DEI Report</h2>
      <div className="summary">
        <ReactMarkdown source={fields.summary} />
      </div>
      {fields.categoriesAndQuestions.map((item, i) => {
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
            <DEIQuestion key={`question-${i}`} {...item.fields} />
          )
        }
      })}
    </section>
  );
};

export default DEIYear;
