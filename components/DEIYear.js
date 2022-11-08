import React from "react";

const DEIYear = () => {
  return (
    <section className="dei-report-year">
      <h2>2021 DEI Report</h2>
      <select>
        <option>View past reports</option>
        <option>2020</option>
      </select>
      <div className="summary">
        <strong>Our initiatives</strong>
        <p></p>
      </div>
      <div className="category">
        <h3>Identity and lived experience</h3>
        <p>Summary</p>
        <ul>
          <li>
            <h4>Gender Identity <button className="tooltip">i</button></h4>
            <p>In 2021</p>
            <div className="results">

            </div>
            <span>See results from</span>
            <button>2021</button>
            <button>2020</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DEIYear;
