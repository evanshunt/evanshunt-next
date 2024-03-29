import React, { useLayoutEffect, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DEIResult from "../components/DEIResult";

const DEIQuestion = ({
  title,
  toolTip,
  barChart,
  results,
  summaries,
  activeYear,
  latestYear,
}) => {
  // Massage results table into a workable object
  const resultHeaders = results.tableData[0];
  let resultYears = [];
  let formattedResults = [];
  for (let i = 1; i < resultHeaders.length; i++) {
    if (
      resultHeaders[i] != null &&
      resultHeaders[i] != "" &&
      resultHeaders[i] <= latestYear
    ) {
      resultYears.push(resultHeaders[i]);
    }
  }
  for (let i = 1; i < results.tableData.length; i++) {
    let questionResults = results.tableData[i];
    let questionLabel = questionResults[0];
    let yearResults = {};
    for (let j = 1; j < questionResults.length; j++) {
      if (
        questionResults[0] != null &&
        questionResults[0] != "" &&
        questionResults[j] != null &&
        questionResults[j] != ""
      ) {
        yearResults[resultYears[j - 1]] = questionResults[j];
      }
    }
    formattedResults.push({ question: questionLabel, results: yearResults });
  }

  const [toolTipIsOpen, setToolTipIsOpen] = React.useState(false);
  const [activeResultYear, setActiveResultYear] = React.useState(activeYear);
  const [pageHeight, setPageHeight] = React.useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = React.useState(0);

  const changeYear = (item) => {
    setPageHeight(document.documentElement.scrollHeight);
    setCurrentScrollPosition(window.scrollY);
    setActiveResultYear(item);
  };
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (currentScrollPosition) {
      const newPageHeight = document.documentElement.scrollHeight;
      window.scrollTo(0, currentScrollPosition - (pageHeight - newPageHeight));
      setCurrentScrollPosition(0);
    }
  });

  return (
    <section className="question">
      <h4>{title}</h4>
      {toolTip && (
        <button
          onClick={() => setToolTipIsOpen(!toolTipIsOpen)}
          className="btn btn-outline-alt btn-tooltip"
          aria-label="Toggle tool tip"
        >
          i
        </button>
      )}
      {toolTip && (
        <div
          className={`tooltip rich-text ${toolTipIsOpen ? `open` : `closed`}`}
        >
          <button
            onClick={() => setToolTipIsOpen(false)}
            className="btn-close"
            aria-label="Close tool tip"
          >
            <div></div>
            <div></div>
          </button>
          <p>{toolTip}</p>
        </div>
      )}
      {summaries.map((item, i) => {
        return (
          <div
            className={`summary rich-text ${
              activeResultYear == item.fields.year ? `selected` : `not-selected`
            }`}
            key={i}
          >
            <ReactMarkdown>{item.fields.summary}</ReactMarkdown>
          </div>
        );
      })}
      <div className={`results ${barChart ? `barchart` : `circle`}`}>
        <ul>
          {formattedResults.map((item, i) => {
            return (
              <DEIResult
                key={i}
                {...item}
                activeResultYear={activeResultYear}
                barChart={barChart}
              />
            );
          })}
        </ul>
      </div>
      {resultYears.length > 1 && (
        <div className="results-year-toggle">
          <span>See results from</span>
          {resultYears.map((item, i) => {
            if (activeResultYear == item) {
              return (
                <button
                  className="yearToggle btn btn-secondary btn-outline-alt"
                  disabled
                  key={i}
                >
                  {item}
                </button>
              );
            }
            return (
              <button
                className="yearToggle btn btn-secondary btn-outline-alt"
                key={i}
                onClick={() => changeYear(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default DEIQuestion;
