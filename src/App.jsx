import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollManager() {
  const { key } = useLocation()
  const navType = useNavigationType()

  // Continuously save scroll position for this history entry
  useEffect(() => {
    const save = () => sessionStorage.setItem(`scroll:${key}`, window.scrollY)
    window.addEventListener('scroll', save, { passive: true })
    return () => window.removeEventListener('scroll', save)
  }, [key])

  // On navigation: restore saved position (back) or reset to top (forward)
  useEffect(() => {
    if (navType === 'POP') {
      const saved = sessionStorage.getItem(`scroll:${key}`)
      window.scrollTo(0, saved ? parseInt(saved, 10) : 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [key, navType])

  return null
}
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import AllProjects from './pages/AllProjects'

function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-5xl mx-auto px-6 py-6">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}
