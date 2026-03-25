import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import okAppImg from '../assets/ok-app-display.jpg'
import portfolioImg from '../assets/SCR-20260306-ttkt.jpeg'

const projects = [
  {
    img: okAppImg,
    alt: 'OK Bilist',
    title: 'OK Bilist',
    desc: 'Official motorist application for OK.dk. High-performance station search and loyalty integration.',
    tags: ['Compose', 'Retrofit'],
  },
  {
    img: portfolioImg,
    alt: 'Compose Portfolio Engine',
    title: 'Compose Portfolio Engine',
    desc: 'A custom-built library for generating dynamic Android portfolios directly from JSON schemas.',
    tags: ['KMP', 'Library'],
  },
]

export default function Projects() {
  return (
    <section className="mb-16" id="projects">
      <FadeIn>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Selected Projects</h2>
            <p className="text-slate-500 text-sm mt-1">Professional and side explorations.</p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-bold tracking-widest uppercase text-blue-600 border-b border-blue-600 pb-0.5 hover:opacity-70 transition-opacity mt-1"
          >
            View More
          </Link>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(({ img, alt, title, desc, tags }, i) => (
          <FadeIn key={title} delay={i * 120}>
            <div className="w-full h-72 overflow-hidden rounded-2xl bg-slate-900 mb-4">
              <img src={img} alt={alt} className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
