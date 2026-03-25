import profilePhoto from '../assets/cv-zlatan.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="title">
        <p className="subtitle">Android Developer</p>
        <h1>Zlatan Stadler</h1>
        <p>
          Crafting seamless, performance-driven mobile experiences with Kotlin and Jetpack Compose.
          Focused on architectural precision and editorial design standards.
        </p>
        <a className="hero-button" href="https://github.com/zlatanstadler" target="_blank" rel="noopener noreferrer">View GitHub</a>
      </div>
      <div className="photo-wrap">
        <img className="photo" src={profilePhoto} alt="Zlatan Stadler headshot" />
        <div className="photo-badge">
          <span className="badge-years">3+ Years</span>
          <span className="badge-label">Industry experience</span>
        </div>
      </div>
    </section>
  )
}
