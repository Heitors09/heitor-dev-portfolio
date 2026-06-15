import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Heitor</span>
              <span className="logo-dot">/</span>
              <span className="logo-bracket">&gt;</span>
            </a>
            <p className="footer-tagline">
              Engenheiro de Software especializado em criar experiências digitais
              excepcionais.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navegação</h4>
            <a href="#about">Sobre</a>
            <a href="#work">Trajetória</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contato</a>
          </div>

          <div className="footer-links-group">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/heitor-alves1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Heitors09"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:heitoralves.dev@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Heitor Alves. Todos os direitos reservados.</p>
          <p className="footer-made">
            Feito com <span className="heart">♥</span> em Fortaleza, CE
          </p>
        </div>
      </div>
    </footer>
  )
}
