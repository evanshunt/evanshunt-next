const OpenPositions = ({ title, introText }) => {
  return (
    <section className="open-positions" id="open-positions">
      {title && <h1>{title}</h1>}
      {introText && <p className="intro-text">{introText}</p>}

      {/* TODO: link to open positions */}
    </section>
  );
};

export default OpenPositions;
