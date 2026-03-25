import FadeIn from './FadeIn'

export default function Education() {
  return (
    <section className="mb-16" id="education">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
          Education &amp; Languages
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeIn delay={0}>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Degree</h4>
            <strong className="block text-slate-900 font-semibold mb-1">Degree in Software Development</strong>
            <p className="text-slate-500 text-sm">Zealand Institute of Business and Technology, Roskilde (2019 - 2022)</p>
          </div>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm h-full">
            <h4 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Languages</h4>
            <div className="space-y-1">
              <p className="text-sm text-slate-700"><strong>Danish:</strong> Native</p>
              <p className="text-sm text-slate-700"><strong>English:</strong> Fluent</p>
              <p className="text-sm text-slate-700"><strong>Bosnian:</strong> Basic</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
