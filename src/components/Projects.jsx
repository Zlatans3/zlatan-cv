import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import ProjectCard from './ProjectCard'
import ProjectDrawer from './ProjectDrawer'
import projects from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section className="mb-16" id="projects">
        <FadeIn>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Selected Projects</h2>
              <p className="text-slate-500 text-sm mt-1">Professional and side explorations.</p>
            </div>
            <Link
              to="/projects"
              className="text-xs font-bold tracking-widest uppercase text-teal-600 border-b border-teal-600 pb-0.5 hover:opacity-70 transition-opacity mt-1"
            >
              View More
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 2).map((project, i) => (
            <FadeIn key={project.title} delay={i * 120}>
              <ProjectCard {...project} onClick={() => setSelected(project)} />
            </FadeIn>
          ))}
        </div>
      </section>

      <ProjectDrawer
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
