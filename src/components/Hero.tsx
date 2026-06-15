import { useEffect, useRef } from 'react'
import photoHero from '../assets/photo-hero.jpg'
import './Hero.css'
import { ArrowDownRight } from '@phosphor-icons/react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.classList.add('animate')
  }, [])

  return (
    <section id="hero" className="hero-section">
      {/* Background gradient orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />
      <div className="hero-grid-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-dot" />
            Disponível para projetos
          </div>

          <h1 ref={titleRef} className="hero-title">
            <span className="hero-greeting">Olá, eu sou</span>
            <span className="hero-name">
              Heitor
              <span className="hero-name-accent"> Alves</span>
              <span className="hero-period">.</span>
            </span>
          </h1>

          <p className="hero-subtitle animate-on-scroll delay-2">
            <span className="hero-role">Software Engineer</span>
            <span className="hero-divider">—</span>
            Transformando ideias em soluções digitais completas.
            Desenvolvimento de ponta a ponta focado em resultados reais para o seu negócio.
          </p>

          <div className="hero-actions animate-on-scroll delay-3">
            <a href="#contact" className="hero-btn-primary">
              Solicitar orçamento
            </a>
            <a href="#work" className="hero-btn-secondary">
              Ver cases
              <ArrowDownRight weight="bold" size={16} />
            </a>
          </div>

          <div className="hero-stats animate-on-scroll delay-4">
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Anos de experiência</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Empresas</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Tecnologias</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-on-scroll delay-2">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring" />
            <div className="hero-photo-ring hero-photo-ring-2" />
            <img
              src={photoHero}
              alt="Heitor Alves"
              className="hero-photo"
              width="380"
              height="380"
            />
            <div className="hero-photo-badge">
              <span className="badge-emoji">🇧🇷</span>
              <span>Fortaleza, CE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}
