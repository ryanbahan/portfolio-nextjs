const FeaturedWork = ({
  title,
  img,
  subtitle,
  description,
  repoLink,
  deployLink }) => {
  return (
    <article className="portfolio-card" data-portfolio-item="whats-new">
      <img src={ img } alt="" className="device-mock" />
      <div className="portfolio-card-info">
        <h3>{ title }</h3>
        <h4>{ subtitle }</h4>
        <p className="portfolio-description">
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
