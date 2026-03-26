import FadeIn from './FadeIn'

export default function About() {
  return (
    <section className="mb-16" id="about">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <FadeIn delay={0} className="md:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-500 leading-relaxed mb-3">
              I'm an Android developer who's been at Framna since starting out as an intern in 2022. Over the years I've gone from picking up my first real tasks to taking ownership of full features — working on apps like OK Bilist and helping PureGym move their gym access system into the app.
            </p>
            <p className="text-slate-500 leading-relaxed">
              My background is in Computer Science from Zealand Roskilde, and I've been working mainly with Kotlin and Jetpack Compose. I care about writing code that's easy to maintain and feels good to use — and when I'm not on the job, I still end up building things, usually to solve some small problem in my own life.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <div className="flex flex-col gap-3">
              <a href="mailto:Zlatanstadler@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Zlatanstadler@gmail.com
              </a>
              <a href="tel:+4550445417" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                50 44 54 17
              </a>
              <span className="flex items-center gap-2 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Taastrup, Denmark
              </span>
              <a href="https://www.linkedin.com/in/zlatan-stadler/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
