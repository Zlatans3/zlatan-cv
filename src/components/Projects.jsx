import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

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
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 120}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
