import FadeIn from './FadeIn'

// Renders **bold** markers within a string
function Bold({ text, active }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className={active ? 'text-slate-900 font-semibold' : 'text-slate-500 font-semibold'}>{part}</strong>
      : part
  )
}

const roles = [
  {
    period: '2024 — Present',
    company: 'Framna',
    title: 'Android Developer',
    description: 'Android development has become an everyday practice. Focus has shifted towards deepening craft and refining established practices.',
    bullets: [
      'Daily development of **feature requirements** across live production apps',
      'More involvement in **feature planning** and shaping technical direction',
      'Expanding knowledge in the **Kotlin** ecosystem',
      'Architecture & best practices: **MVVM/MVI patterns** and **Clean Architecture** to ensure maintainability',
    ],
    active: true,
  },
  {
    period: '2023 — 2024',
    company: 'Shape — Becoming Framna',
    title: 'Junior Android Developer',
    description: 'Joined the OK A.M.B.A Billist and Hjem App team, gaining experience in everyday development tasks on live consumer products.',
    bullets: [
      'Building UI using mainly **Jetpack Compose**',
      'Gradually increased complexity of daily tasks and ownership',
      'Setting up and maintaining endpoints and data sets using **Retrofit** and **Gson**',
      'Dependency injection using **Hilt/Dagger**',
    ],
    active: false,
  },
  {
    period: '2022 — 2023',
    company: 'Shape — Becoming Framna',
    title: 'Intern Android Developer',
    description: 'Learned to handle overviews of a project and got an introduction to professional Android development workflows.',
    bullets: [
      'Introduction to **Jira** and **Confluence** for project and task management',
      '**Git** workflows and basic **Kotlin** libraries',
      'Worked on a larger scale Android project for **Solar Danmark A/S**',
    ],
    active: false,
  },
]

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
          {roles.map((role, i) => (
            <div key={role.title + role.period} className="flex gap-7">
              {/* Timeline spine */}
              <div className="flex flex-col items-center w-5 flex-shrink-0">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                  {role.active ? (
                    <div className="w-4 h-4 rounded-full bg-teal-600 ring-4 ring-teal-100" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                  )}
                </div>
                {i < roles.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200" />
                )}
              </div>
              {/* Content */}
              <div className={i < roles.length - 1 ? 'pb-10' : 'pb-0'}>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold tracking-widest uppercase ${role.active ? 'text-teal-600' : 'text-slate-400'}`}>
                    {role.period}
                  </span>
                  <span className="text-sm text-slate-400">· {role.company}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${role.active ? 'text-slate-900' : 'text-slate-500'}`}>
                  {role.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${role.active ? 'text-slate-500' : 'text-slate-400'}`}>
                  {role.description}
                </p>
                <ul className="space-y-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <span className={`mt-0.5 w-5 h-5 rounded-full text-xs flex items-center justify-center flex-shrink-0 ${role.active ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-400'}`}>✓</span>
                      <span className={role.active ? 'text-slate-700' : 'text-slate-400'}>
                        <Bold text={b} active={role.active} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
