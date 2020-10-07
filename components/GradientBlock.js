const GradientBlock = ({ leaveSpaceForNav, smallerText, title }) => {
  return (
    <section className={leaveSpaceForNav ? `gradient-block space` : `gradient-block`}>
      <h1>{title}</h1>
      <p>{smallerText}</p>
    </section>
  );
};

export default GradientBlock;
