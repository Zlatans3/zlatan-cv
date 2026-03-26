import { Drawer } from 'vaul'

export default function ProjectDrawer({ project, open, onClose }) {
  if (!project) return null

  return (
    <Drawer.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
          <div className="w-full max-w-2xl flex flex-col rounded-t-2xl bg-white max-h-[90vh]">
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
            <div className="w-10 h-1 rounded-full bg-slate-300" />
          </div>

          <div className="overflow-y-auto px-6 pb-10">
            {/* Hero image */}
            <div className="w-full h-56 overflow-hidden rounded-xl mb-6 bg-slate-100">
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <Drawer.Title className="text-2xl font-bold text-slate-900 mb-3">
              {project.title}
            </Drawer.Title>

            {/* Intro */}
            {project.article && (
              <>
                <p className="text-slate-600 leading-relaxed mb-6">{project.article.intro}</p>

                {project.article.sections.map((section) => (
                  <div key={section.heading} className="mb-5">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{section.heading}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{section.body}</p>
                  </div>
                ))}
              </>
            )}

            {/* External link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                {project.buttonText || 'View full case study'}
              </a>
            )}
          </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
