export default function Skills() {
  return (
    <section className="section" id="tech">
      <h2>Technical Arsenal</h2>
      <div className="skill-grid">
        <div className="skill-card">
          <h3>Programming</h3>
          <span className="tech-pill">Kotlin</span>
          <span className="tech-pill">Java</span>
          <span className="tech-pill">SQL</span>
          <span className="tech-pill">C#</span>
        </div>
        <div className="skill-card">
          <h3>Frameworks</h3>
          <span className="tech-pill">Jetpack Compose</span>
          <span className="tech-pill">Android SDK</span>
          <span className="tech-pill">KMP</span>
        </div>
        <div className="skill-card">
          <h3>Architecture</h3>
          <span className="tech-pill">MVVM</span>
          <span className="tech-pill">MVI</span>
          <span className="tech-pill">Clean Architecture</span>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <span className="tech-pill">Android Studio</span>
          <span className="tech-pill">Git</span>
          <span className="tech-pill">Figma</span>
          <span className="tech-pill">CI/CD</span>
        </div>
      </div>
    </section>
  )
}
