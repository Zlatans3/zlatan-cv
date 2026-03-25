import useInView from '../hooks/useInView'

export default function FadeIn({ children, className = '', delay = 0, up = true }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView
          ? 'opacity-100 translate-y-0'
          : `opacity-0 ${up ? 'translate-y-8' : ''}`
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
