const ServicesIntro = ({ title, intro, image }) => {
  return (
    <section className="services-intro container-medium">
      <div className="text-container">
        {title && <h1>{title}</h1>}
        {intro && <p>{intro}</p>}
      </div>

      {image && (
        <div className="image-container">
          <img
            src={image.fields.file.url}
            alt={image.fields.file.description}
          />
        </div>
      )}
    </section>
  );
};

export default ServicesIntro;
