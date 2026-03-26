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
              className="flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-teal-600 border border-teal-600 rounded-full px-4 py-1.5 hover:bg-teal-600 hover:text-white transition-colors mt-1"
            >
              View More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
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
