import FadeIn from './FadeIn'

export default function About() {
  return (
    <section className="mb-16" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FadeIn delay={0}>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-500 leading-relaxed mb-3">
              Highly skilled Android Developer with over 3 years of experience at Framna, specializing in Kotlin and modern Jetpack Compose architectures.
            </p>
            <p className="text-slate-500 leading-relaxed">
              My approach combines technical rigor with a deep understanding of user behavior. I pride myself on building robust, scalable applications that don't just function—they delight.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="text-slate-500 mb-2">Email: Zeefmusic</p>
            <p className="text-slate-500 mb-2">Phone: [Your Phone]</p>
            <p className="text-slate-500">Location: Roskilde, Denmark</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
