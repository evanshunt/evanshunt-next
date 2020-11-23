const OpenPositions = ({ title, introText, openPositions }) => {
  return (
    <section className="open-positions" id="open-positions">
      {title && <h1>{title}</h1>}
      {introText && <p className="intro-text">{introText}</p>}

      {openPositions.map((job, i) => (
        <a
          href={job.fields.jobPostingURL}
          key={`open-position${i}`}
          className="position"
          target="_blank"
          rel="noreferrer"
        >
          <div className="job-description">
            {job.fields.jobTitle && <p className="title">{job.fields.jobTitle}</p>}
            {job.fields.department && <p className="department">{job.fields.department}</p>}
          </div>

          <img src="/images/right-arrow.svg" alt="Arrow pointing right"/>
        </a>
      ))}
    </section>
  );
};

export default OpenPositions;
