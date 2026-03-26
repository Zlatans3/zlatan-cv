import FadeIn from './FadeIn'

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)

const LayersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
)

const BlueprintIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" />
  </svg>
)

const WrenchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const skillGroups = [
  { title: 'Programming', icon: CodeIcon, pills: ['Kotlin', 'Java', 'JavaScript', 'SQL', 'C#', '.NET'] },
  { title: 'Frameworks', icon: LayersIcon, pills: ['Jetpack Compose', 'Android SDK', 'Retrofit', 'Hilt/Dagger', 'Firebase', 'Vue.js', 'React', 'Axios', 'KMP'] },
  { title: 'Architecture', icon: BlueprintIcon, pills: ['MVVM', 'MVI', 'Clean Architecture', 'SCRUM', 'XP'] },
  { title: 'Tools', icon: WrenchIcon, pills: ['Android Studio', 'Git', 'Figma', 'CI/CD', 'Jira', 'Confluence', 'Azure DevOps'] },
]

export default function Skills() {
  return (
    <section className="mb-16" id="tech">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
          Technical Knowledge
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillGroups.map(({ title, icon: Icon, pills }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-teal-600"><Icon /></span>
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {pills.map(pill => (
                  <span key={pill} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
