const SideBySideImages = ({ images }) => {
  return (
    <section className="side-by-side-images">
      {images.map((image, i) => (
        <img src={image.fields.file.url} alt={image.fields.description} key={`image-${i}`} />
      ))}
    </section>
  );
};

export default SideBySideImages;
