const GradientBlock = ({ leaveSpaceForNav, smallerText, title }) => {
  return (
    <section
      className={leaveSpaceForNav ? `gradient-block space` : `gradient-block`}
    >
      <div className="container-narrow">
        <h1>{title}</h1>
        <p>{smallerText}</p>
      </div>
    </section>
  );
};

export default GradientBlock;
