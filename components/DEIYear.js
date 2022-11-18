import React from "react";
import ReactMarkdown from "react-markdown";
import DEIQuestion from "../components/DEIQuestion";

const DEIYear = ({ fields, activeYear, latestYear }) => {

  return (
    <section className={`dei-report-year ${activeYear == fields.year ? `selected` : `not-selected`}`}>
      <h2>{fields.year} DEI Report</h2>
      <div className="summary rich-text">
        <ReactMarkdown source={fields.summary} />
      </div>
      {fields.categoriesAndQuestions.map((item, i) => {
        if (item.sys.contentType.sys.id == "deiReportCategory") {
          return (
            <div key={`category-${i}`} className="category">
              <h3>{item.fields.title}</h3>
              {item.fields.summary && <div className="rich-text">
                <ReactMarkdown source={item.fields.summary} />
              </div>}
            </div>
          )
        }
        else {
          return (
            <DEIQuestion key={`question-${i}`} {...item.fields} activeYear={fields.year} latestYear={latestYear} />
          )
        }
      })}
    </section>
  );
};

export default DEIYear;
