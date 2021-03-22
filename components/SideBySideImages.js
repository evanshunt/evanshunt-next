const SideBySideImages = ({ images }) => {
  return (
    <section className="side-by-side-images">
      {images.map((image, i) => (
        <picture key={`image-${i}`}>
          <source srcSet={`${image.fields.file.url}?fm=webp`} type="image/webp" />
          <source srcSet={`${image.fields.file.url}?fm=jpg`} type="image/jpeg" />
          <img src={image.fields.file.url} alt={image.fields.description} />
        </picture>
      ))}
    </section>
  );
};

export default SideBySideImages;
