import { useEffect, useState } from 'react'
import profilePhoto from '../assets/cv-zlatan.jpg'
import GitHubButton from './GitHubButton'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-teal-950 to-teal-700 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-28 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="md:pr-10">
          <p className="text-xs font-extrabold tracking-widest uppercase text-teal-300 mb-4">
            Android Developer
          </p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none text-white mb-6">
            Zlatan Stadler
          </h1>
          <p className="text-teal-100 text-lg leading-relaxed max-w-md">
            Android developer based in Denmark. I work mostly in Kotlin and Jetpack Compose,
            building apps that real people use every day.
          </p>
          <GitHubButton url="https://github.com/zlatanstadler" className="mt-8 px-6 py-3" />
        </div>
        <div className="flex justify-end relative">
          <img className="photo" src={profilePhoto} alt="Zlatan Stadler headshot" />
          <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-lg">
            <span className="block text-xl font-extrabold text-teal-600">3+ Years</span>
            <span className="block text-sm text-slate-500 mt-0.5">Industry experience</span>
          </div>
        </div>
      </div>

      {/* Arch wave */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,0 C480,90 960,90 1440,0 L1440,90 L0,90 Z"
          />
        </svg>
      </div>
    </section>
  )
}
