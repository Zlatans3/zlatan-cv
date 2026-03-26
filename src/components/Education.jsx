import FadeIn from './FadeIn'

const languages = [
  { name: 'Danish',  level: 'Native',  pct: 100 },
  { name: 'English', level: 'Fluent',  pct: 90  },
  { name: 'Bosnian', level: 'Basic',   pct: 35  },
]

export default function Education() {
  return (
    <section className="mb-16" id="education">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
          Education &amp; Languages
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Bachelor */}
        <FadeIn delay={0} className="md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-teal-600">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </span>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400">Bachelor</h4>
            </div>
            <strong className="block text-slate-900 font-semibold mb-0.5">Computer Science</strong>
            <p className="text-slate-500 text-sm mb-0.5">Zealand Roskilde — Professionsbachelor</p>
            <p className="text-slate-400 text-xs mb-4">2020 – 2023</p>
            <ul className="space-y-2">
              {[
                'Full-stack oriented with agile principles (SCRUM & XP)',
                'RESTful API / C# .NET & Vue.js with Axios',
                'Native Android with Kotlin (Compose & XML), MVVM + Firebase',
                'Deployment with Git and Azure DevOps',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-500 leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Secondary */}
        <FadeIn delay={80}>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-teal-600">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </span>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400">Secondary</h4>
            </div>
            <strong className="block text-slate-900 font-semibold mb-0.5">Enkelfags HF</strong>
            <p className="text-slate-500 text-sm mb-0.5">VUC & HF Roskilde</p>
            <p className="text-slate-500 text-sm mb-0.5">Højere forberedelseseksamen</p>
            <p className="text-slate-400 text-xs">2018 – 2020</p>
          </div>
        </FadeIn>

        {/* Languages */}
        <FadeIn delay={160}>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-teal-600">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
                </svg>
              </span>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400">Languages</h4>
            </div>
            <div className="space-y-4">
              {languages.map(({ name, level, pct }) => (
                <div key={name}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-sm font-semibold text-slate-700">{name}</span>
                    <span className="text-xs text-slate-400">{level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
