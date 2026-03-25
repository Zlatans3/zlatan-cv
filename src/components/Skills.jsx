import FadeIn from './FadeIn'

const skillGroups = [
  { title: 'Programming', pills: ['Kotlin', 'Java', 'SQL', 'C#'] },
  { title: 'Frameworks', pills: ['Jetpack Compose', 'Android SDK', 'KMP'] },
  { title: 'Architecture', pills: ['MVVM', 'MVI', 'Clean Architecture'] },
  { title: 'Tools', pills: ['Android Studio', 'Git', 'Figma', 'CI/CD'] },
]

export default function Skills() {
  return (
    <section className="mb-16" id="tech">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
          Technical Arsenal
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillGroups.map(({ title, pills }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
              <h3 className="text-sm font-bold text-slate-900 mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {pills.map(pill => (
                  <span key={pill} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
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
