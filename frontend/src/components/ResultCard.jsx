function formatType(type) {
  return type.replace(/_/g, ' ')
}

function getDisplayUrl(link) {
  if (!link) return null
  try {
    return new URL(link).hostname.replace(/^www\./, '')
  } catch {
    return link
  }
}

function ResultCard({ recommendation }) {
  const { title, description, category, type, link } = recommendation
  const displayUrl = getDisplayUrl(link)

  return (
    <article className="result">
      <div className="result-meta">
        {displayUrl && <span className="result-url">{displayUrl}</span>}
        {category && <span className="result-tag">{category}</span>}
        {type && <span className="result-tag">{formatType(type)}</span>}
      </div>
      {link ? (
        <a className="result-title" href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        <span className="result-title result-title-plain">{title}</span>
      )}
      <p className="result-description">{description}</p>
    </article>
  )
}

export default ResultCard
