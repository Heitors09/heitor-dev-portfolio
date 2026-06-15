import { useState, useEffect } from 'react'
import './Navbar.css'

interface NavbarProps {
  activeSection: string
}

const navLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'work', label: 'Trajetória' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contato' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo" onClick={() => handleClick('hero')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Heitor</span>
          <span className="logo-dot">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault()
              handleClick('contact')
            }}
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          id="hamburger-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
