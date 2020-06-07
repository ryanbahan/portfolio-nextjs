const imgStyles = {
  boxShadow: `0 0.5px 1px rgba(0,0,0,0.03),
                0 1px 2px rgba(0,0,0,0.03),
                0 2px 4px rgba(0,0,0,0.03),
                0 4px 8px rgba(0,0,0,0.03),
                0 8px 16px rgba(0,0,0,0.03),
                0 16px 32px rgba(0,0,0,0.03)`,
  width: "5rem"
}

const FeaturedWork = ({
  title,
  img,
  subtitle,
  description,
  repoLink,
  deployLink }) => {
  return (
    <article className="portfolio-card" data-portfolio-item="whats-new">
      <img style={imgStyles} src={ img } alt="" className="device-mock" />
      <div className="portfolio-card-info">
        <h3>{ title }</h3>
        <h4 style={{fontWeight: "500", fontStyle: "italic"}}>{ subtitle }</h4>
        <p className="portfolio-description" style={{lineHeight: "1.75"}}>
          { description }
        </p>
        <div className="portfolio-button-container">
          <a href={ deployLink } target="_blank"><button type="button" name="button">View App</button></a>
          <a href={ repoLink } target="_blank"><button type="button" name="button">View Code</button></a>
        </div>
      </div>
    </article>
  )
}

export default FeaturedWork
