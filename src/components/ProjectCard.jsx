export default function ProjectCard({ img, alt, title, desc, tags, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="w-full h-72 overflow-hidden rounded-2xl bg-slate-900 mb-4 group-hover:opacity-90 transition-opacity">
        <img src={img} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
