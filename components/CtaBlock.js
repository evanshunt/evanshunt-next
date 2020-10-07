import Link from 'next/link'

const CtaBlock = (props) => {
  const { title, cta } = props
  
  return (
    <div className="cta-block container">
      {title && <h2 className="title">{title}</h2>}
      {cta && (
        <Link href={cta.fields.url}>
          <a className="btn" title={cta.fields.title}>{cta.fields.title}</a>
        </Link>
      )}
    </div>
  )
}

export default CtaBlock