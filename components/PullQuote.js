const PullQuote = (props) => {
  const { quote, author } = props
  return (
    <div className="pull-quote">
      <div className="container">
        {quote && <h1 className="quote">{quote}</h1>}
        {author && <h4 className="author base-font-medium">{author}</h4>}
      </div>
    </div>
  )
}


export default PullQuote