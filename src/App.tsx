import { useEffect, useRef, useState } from 'react'
import './App.css'
import Work from './components/Work'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '-80px 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))

    const animEls = document.querySelectorAll('.animate-on-scroll')
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    animEls.forEach((el) => animObserver.observe(el))

    return () => {
      observer.disconnect()
      animObserver.disconnect()
    }
  }, [])

  return (
    <div ref={mainRef} className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
