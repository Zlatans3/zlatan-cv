import FadeIn from './FadeIn'

export default function Experience() {
  return (
    <section className="mb-16" id="experience">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
          Professional Experience
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          {/* Active entry */}
          <div className="flex gap-7">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-teal-600 ring-4 ring-teal-100 flex-shrink-0 mt-1" />
              <div className="w-px flex-1 bg-slate-200 mt-2 mb-0" />
            </div>
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold tracking-widest uppercase text-teal-600">2022 — Present</span>
                <span className="text-sm text-slate-400">· Framna</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Android Developer</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Lead developer for key feature modules in high-traffic Danish utility applications. Spearheaded the transition to Jetpack Compose for improved UI consistency and performance.
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'OK Bilist', text: 'Optimized real-time data handling for fuel pricing and station mapping, resulting in a 20% increase in active monthly users.' },
                  { label: 'OK Hjem', text: 'Implemented secure payment gateways and personalized energy usage dashboards with complex data visualization.' },
                  { label: 'CI/CD', text: 'Set up GitHub Actions pipelines; integrated Firebase Analytics & Crashlytics.' },
                ].map(({ label, text }) => (
                  <li key={label} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center flex-shrink-0">✓</span>
                    <span><strong>{label}:</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Inactive entry */}
          <div className="flex gap-7">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-slate-300 flex-shrink-0 mt-1" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400">2021 — 2022</span>
                <span className="text-sm text-slate-400">· Shape AS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-400 mb-2">Android Intern</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contributed to enterprise-level Android applications under senior mentorship. Focused on UI testing automation and feature prototyping using Kotlin and Material Design guidelines.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
