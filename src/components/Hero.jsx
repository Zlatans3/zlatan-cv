import profilePhoto from '../assets/cv-zlatan.jpg'
import GitHubButton from './GitHubButton'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 mb-20">
      <div className="md:pr-10">
        <p className="text-xs font-extrabold tracking-widest uppercase text-blue-600 mb-4">
          Android Developer
        </p>
        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none text-slate-900 mb-6">
          Zlatan Stadler
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
          Crafting seamless, performance-driven mobile experiences with Kotlin and Jetpack Compose.
          Focused on architectural precision and editorial design standards.
        </p>
        <GitHubButton url="https://github.com/zlatanstadler" className="mt-8 px-6 py-3" />
      </div>
      <div className="flex justify-end relative">
        <img className="photo" src={profilePhoto} alt="Zlatan Stadler headshot" />
        <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-lg">
          <span className="block text-xl font-extrabold text-blue-600">3+ Years</span>
          <span className="block text-sm text-slate-500 mt-0.5">Industry experience</span>
        </div>
      </div>
    </section>
  )
}
