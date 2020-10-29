const ServicesPagination = ({ title }) => {
  return (
    <section className="services-pagination container-medium">
      {title && <h3>{title}</h3>}
    </section>
  );
};

export default ServicesPagination;
