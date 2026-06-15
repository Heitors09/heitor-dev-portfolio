import { useState } from 'react'
import './Contact.css'
import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Orçamento — ${formData.projectType || 'Projeto'}`
    )
    const body = encodeURIComponent(
      `Olá Heitor!\n\nMe chamo ${formData.name}.\n\nTipo de projeto: ${formData.projectType}\nOrçamento estimado: ${formData.budget}\n\n${formData.message}\n\nEmail para contato: ${formData.email}`
    )

    window.open(`mailto:heitoralves.dev@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-orb" />
      <div className="container contact-container">
        <div className="contact-info animate-on-scroll">
          <span className="section-label">Contato</span>
          <h2 className="section-title">
            Vamos construir algo<br />
            <span className="highlight">incrível juntos?</span>
          </h2>
          <p className="section-description">
            Tem um projeto em mente? Precisa de um site, uma aplicação web ou um
            sistema sob medida? Entre em contato e vamos conversar sobre como posso
            ajudar.
          </p>

          <div className="contact-channels">
            <a
              href="mailto:heitoralves.dev@gmail.com"
              className="contact-channel"
            >
              <div className="channel-icon">
                <EnvelopeSimple weight="light" size={24} />
              </div>
              <div>
                <strong>Email</strong>
                <span>heitoralves.dev@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/heitor-alves1/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="channel-icon">
                <LinkedinLogo weight="light" size={24} />
              </div>
              <div>
                <strong>LinkedIn</strong>
                <span>/in/heitor-alves1</span>
              </div>
            </a>
          </div>
        </div>

        <form
          className="contact-form animate-on-scroll delay-2"
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <h3 className="form-title">Solicitar orçamento</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-project-type">Tipo de projeto</label>
              <select
                id="contact-project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Site Institucional">Site Institucional</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Aplicação Web">Aplicação Web (SaaS)</option>
                <option value="Dashboard">Dashboard / Painel</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-budget">Orçamento estimado</label>
              <select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="R$ 500 - R$ 2.000">R$ 500 — R$ 2.000</option>
                <option value="R$ 2.000 - R$ 5.000">R$ 2.000 — R$ 5.000</option>
                <option value="R$ 5.000 - R$ 10.000">R$ 5.000 — R$ 10.000</option>
                <option value="R$ 10.000+">R$ 10.000+</option>
                <option value="A definir">A definir</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Descreva seu projeto, prazos e qualquer detalhe relevante..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>

          <button
            type="submit"
            className={`form-submit ${submitted ? 'submitted' : ''}`}
            id="contact-submit"
          >
            {submitted ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Enviado!
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Enviar mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
