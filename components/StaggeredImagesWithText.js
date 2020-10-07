
const StaggeredImagesWithText = (props) => {
  
  const { imageAndTextBlocks } = props
  
  return (
    <section className="staggered-images-with-text container">
      {imageAndTextBlocks && imageAndTextBlocks.map((block, i) => {
        return (
          <div className="staggered-column" key={i}>
            <img className="img-fluid" src={block.fields.image.fields.file.url} alt={block.fields.image.fields.description} />
            {block.fields.title && <h2 className="title">{block.fields.title}</h2>}
            {block.fields.text && <p className="text">{block.fields.text}</p>}
          </div>
        )
      })}
    </section>
  )
}

export default StaggeredImagesWithText