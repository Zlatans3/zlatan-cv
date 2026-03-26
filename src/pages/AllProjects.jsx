import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import ProjectDrawer from '../components/ProjectDrawer'
import projects from '../data/projects'

export default function AllProjects() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="text-teal-600 hover:opacity-70 transition-opacity p-3 -m-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">All Projects</h1>
              <p className="text-slate-500 text-sm mt-1">Professional and side explorations.</p>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 120}>
              <ProjectCard {...project} onClick={() => setSelected(project)} />
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
