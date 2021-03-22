const ServicesIntro = ({ title, intro, image }) => {
  return (
    <section className="services-intro container-medium">
      <div className="text-container">
        {title && <h1>{title}</h1>}
        {intro && <p>{intro}</p>}
      </div>

      {image && (
        <div className="image-container">
          <picture>
            <source srcSet={`${image.fields.file.url}?fm=webp`} type="image/webp" />
            <source srcSet={`${image.fields.file.url}?fm=jpg`} type="image/jpeg" />
            <img src={image.fields.file.url} alt={image.fields.file.description} />
          </picture>
        </div>
      )}
    </section>
  );
};

export default ServicesIntro;
