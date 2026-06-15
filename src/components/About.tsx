import photoAbout from '../assets/working.png'
import './About.css'
import { Lightning, Palette, Code, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-photo-col animate-on-scroll">
          <div className="about-photo-card">
            <img
              src={photoAbout}
              alt="Heitor Alves"
              className="about-photo"
              width="400"
              height="480"
            />
            <div className="about-photo-decoration" />
            <div className="about-photo-label">
              <span className="label-year">2026</span>
              <span className="label-text">Software Engineer</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <div className="animate-on-scroll">
            <span className="section-label">Sobre mim</span>
            <h2 className="section-title">
              Engenharia que serve<br />
              <span className="highlight">ao seu negócio</span>
            </h2>
          </div>

          <p className="about-bio animate-on-scroll delay-1">
            Sou Heitor Alves, engenheiro de software de Fortaleza, Ceará.
            Ajudo empresas e empreendedores a tirarem suas ideias do papel, atuando
            como um parceiro técnico que desenvolve soluções digitais completas —
            do planejamento da interface até o produto final no ar.
          </p>

          <p className="about-bio animate-on-scroll delay-2">
            Com minha experiência no mercado de tecnologia, aprendi que código
            só tem valor quando resolve um problema de negócio real. Minha missão é
            entender a sua necessidade e entregar a melhor solução para você crescer,
            aliando design atraente, sistemas rápidos e engenharia sólida.
          </p>

          <div className="about-highlights animate-on-scroll delay-3">
            <div className="about-highlight-item">
              <div className="highlight-icon">
                <Lightning weight="light" size={24} />
              </div>
              <div>
                <strong>Agilidade na Entrega</strong>
                <span>Da ideia inicial ao produto funcionando em semanas</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon">
                <Palette weight="light" size={24} />
              </div>
              <div>
                <strong>Foco no Usuário</strong>
                <span>Interfaces fluidas e intuitivas que geram resultados</span>
              </div>
            </div>

            <div className="about-highlight-item">
              <div className="highlight-icon">
                <Code weight="light" size={24} />
              </div>
              <div>
                <strong>Tecnologia de Ponta</strong>
                <span>Sistemas robustos e preparados para o crescimento</span>
              </div>
            </div>
          </div>

          <div className="about-socials animate-on-scroll delay-4">
            <a
              href="https://www.linkedin.com/in/heitor-alves1/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <LinkedinLogo weight="light" size={24} />
            </a>
            <a
              href="https://github.com/Heitors09"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <GithubLogo weight="light" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
