export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        <div className="timeline-entry active">
          <div className="timeline-spine">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-meta">
            <div className="timeline-period">2022 — Present</div>
            <div className="timeline-company">Framna</div>
          </div>
          <div className="timeline-body">
            <h3>Android Developer</h3>
            <p>Lead developer for key feature modules in high-traffic Danish utility applications. Spearheaded the transition to Jetpack Compose for improved UI consistency and performance.</p>
            <ul className="check-list">
              <li><strong>OK Bilist:</strong> Optimized real-time data handling for fuel pricing and station mapping, resulting in a 20% increase in active monthly users.</li>
              <li><strong>OK Hjem:</strong> Implemented secure payment gateways and personalized energy usage dashboards with complex data visualization.</li>
              <li><strong>CI/CD:</strong> Set up GitHub Actions pipelines; integrated Firebase Analytics &amp; Crashlytics.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-entry inactive">
          <div className="timeline-spine">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
          </div>
          <div className="timeline-meta">
            <div className="timeline-period">2021 — 2022</div>
            <div className="timeline-company">Shape AS</div>
          </div>
          <div className="timeline-body">
            <h3>Android Intern</h3>
            <p>Contributed to enterprise-level Android applications under senior mentorship. Focused on UI testing automation and feature prototyping using Kotlin and Material Design guidelines.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
