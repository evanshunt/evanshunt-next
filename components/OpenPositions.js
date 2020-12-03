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

          <span className="btn btn-secondary open-position-btn">
            <span className="open-position-btn-text">View</span>
            <img src="/images/arrow-right-lg-black.svg" alt="Black arrow pointing right" className="black-arrow" />
            <img src="/images/arrow-right-lg-white.svg" alt="White arrow pointing right" className="white-arrow" />
          </span>
        </a>
      ))}
    </section>
  );
};

export default OpenPositions;
