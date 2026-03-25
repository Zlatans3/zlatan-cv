import { Routes, Route } from 'react-router-dom'
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  )
}
