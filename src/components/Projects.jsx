import GitHubButton from './GitHubButton'
import okAppImg from '../assets/ok-app-display.jpg'
import portfolioImg from '../assets/SCR-20260306-ttkt.jpeg'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <div>
          <h2>Selected Projects</h2>
          <p className="section-sub">Professional and side explorations.</p>
        </div>
        <GitHubButton url="https://github.com" />
      </div>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-img-wrap">
            <img src={okAppImg} alt="OK Bilist" />
          </div>
          <h3>OK Bilist</h3>
          <p>Official motorist application for OK.dk. High-performance station search and loyalty integration.</p>
          <div className="tag-row">
            <span className="tech-pill">Compose</span>
            <span className="tech-pill">Retrofit</span>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img-wrap">
            <img src={portfolioImg} alt="Compose Portfolio Engine" />
          </div>
          <h3>Compose Portfolio Engine</h3>
          <p>A custom-built library for generating dynamic Android portfolios directly from JSON schemas.</p>
          <div className="tag-row">
            <span className="tech-pill">KMP</span>
            <span className="tech-pill">Library</span>
          </div>
        </div>
      </div>
    </section>
  )
}
