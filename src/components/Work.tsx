import { useState } from 'react'
import type { ReactElement } from 'react'
import './Work.css'
import { Briefcase, MapPin, CheckCircle, FolderStar, ArrowUpRight, Shuffle, NotePencil } from '@phosphor-icons/react'
import CaseStudy from './CaseStudy'
import previewDataBridge from '../assets/preview-databridge.png'
import previewAirNotes from '../assets/preview-airnotes.png'

interface Job {
  company: string
  role: string
  period: string
  duration: string
  location: string
  modality: string
  description: string
  bullets: string[]
  techs: string[]
}

const jobs: Job[] = [
  {
    company: 'Betscale',
    role: 'Engenheiro de Software',
    period: 'Fev 2026 — Presente',
    duration: '5 meses',
    location: 'Fortaleza, CE',
    modality: 'Remoto · Meio período',
    description:
      'Plataforma de análise de apostas esportivas em monorepo Turborepo + Bun, com arquitetura offline-first e sync em tempo real.',
    bullets: [
      'Features e fluxos complexos com React 19 e TanStack Start (Router + Query)',
      'Interfaces responsivas e componentizadas com Tailwind CSS 4 e Base UI',
      'Sync offline-first com PowerSync — dados disponíveis mesmo sem rede',
      'Estado global previsível via Zustand com slices isolados por domínio',
      'Integração full-stack com Fastify 5, Drizzle ORM e PostgreSQL',
    ],
    techs: ['React 19', 'TypeScript', 'TanStack', 'Tailwind 4', 'PowerSync', 'Zustand'],
  },
  {
    company: 'CARAQUECODA',
    role: 'Engenheiro de Software',
    period: 'Jan 2024 — Ago 2025',
    duration: '1 ano 8 meses',
    location: 'São Paulo, SP',
    modality: 'Remoto · Tempo integral',
    description:
      'E-commerce de alta performance para ótica, integrando o ecossistema Shopify com frontend moderno em Next.js.',
    bullets: [
      'Páginas responsivas com React.js, Next.js e TypeScript entregues em SSR/SSG',
      'SEO técnico avançado — melhoria mensurável em Core Web Vitals',
      'Integração com Shopify Storefront API via GraphQL com cache inteligente',
      'Componentes reutilizáveis com Tailwind CSS e design system próprio',
      'Sincronização de estoque e preços em tempo real com webhooks Shopify',
    ],
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'GraphQL', 'Shopify'],
  },
]

interface Project {
  title: string
  tagline: string
  description: string
  caseId: string
  url: string
  tags: string[]
  icon: ReactElement
  preview: string
}

const projects: Project[] = [
  {
    title: 'DataBridge',
    tagline: 'Conversor universal de dados',
    description:
      'Conversão instantânea CSV ↔ JSON, 100% client-side. Zero dependências, zero backend — apenas performance de Web API nativa.',
    caseId: 'databridge',
    url: 'https://csv-to-json-seven.vercel.app/',
    tags: ['React 19', 'TypeScript', 'Vite', 'Web APIs'],
    icon: <Shuffle weight="light" size={28} />,
    preview: previewDataBridge,
  },
  {
    title: 'AirNotes',
    tagline: 'PWA de anotações offline-first',
    description:
      'Arquitetura Service Worker com Cache-First. Funciona identicamente com ou sem internet, instalável como app nativo.',
    caseId: 'airnotes',
    url: 'https://air-notes-six.vercel.app/',
    tags: ['React 19', 'TypeScript', 'PWA', 'Service Worker'],
    icon: <NotePencil weight="light" size={28} />,
    preview: previewAirNotes,
  },
]

export default function Work() {
  const [openCase, setOpenCase] = useState<string | null>(null)

  return (
    <>
      <section id="work" className="work-section">
        <div className="container">
          <div className="work-header animate-on-scroll">
            <span className="section-label">Portfólio</span>
            <h2 className="section-title">Minha trajetória</h2>
            <p className="section-description">
              Experiência profissional em produto e projetos pessoais que demonstram domínio de engenharia.
            </p>
          </div>

          <div className="work-split-layout">
            {/* Left Column: Experience */}
            <div className="work-column animate-on-scroll delay-1">
              <h3 className="work-column-title">
                <span className="title-icon">
                  <Briefcase weight="light" size={24} />
                </span>
                Onde trabalhei
              </h3>

              <div className="experience-timeline">
                {jobs.map((job, i) => (
                  <div key={job.company} className="timeline-item">
                    <div className="timeline-line">
                      <div className="timeline-dot" />
                      {i < jobs.length - 1 && <div className="timeline-connector" />}
                    </div>

                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <div className="timeline-meta">
                          <span className="timeline-period">{job.period}</span>
                          <span className="timeline-sep">·</span>
                          <span className="timeline-duration">{job.duration}</span>
                        </div>
                        <div className="timeline-modality">{job.modality}</div>
                      </div>

                      <h3 className="timeline-role">{job.role}</h3>
                      <div className="timeline-company">
                        <span className="company-name">{job.company}</span>
                        <span className="company-location">
                          <MapPin weight="light" size={16} />
                          {job.location}
                        </span>
                      </div>

                      <p className="timeline-description">{job.description}</p>

                      <ul className="timeline-bullets">
                        {job.bullets.map((bullet, bi) => (
                          <li key={bi}>
                            <CheckCircle weight="light" size={18} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="timeline-techs">
                        {job.techs.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Projects */}
            <div className="work-column animate-on-scroll delay-2">
              <h3 className="work-column-title">
                <span className="title-icon">
                  <FolderStar weight="light" size={24} />
                </span>
                Projetos Pessoais
              </h3>

              <div className="projects-list">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="project-card"
                    onClick={() => setOpenCase(project.caseId)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setOpenCase(project.caseId)}
                    id={`project-card-${project.caseId}`}
                  >
                    <div className="project-card-glow" />

                    {/* Preview image */}
                    <div className="project-preview-wrapper">
                      <div className="project-preview-bar">
                        <span /><span /><span />
                      </div>
                      <img
                        src={project.preview}
                        alt={`Preview de ${project.title}`}
                        className="project-preview-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="project-card-header">
                      <span className="project-icon">{project.icon}</span>
                      <ArrowUpRight className="project-arrow" weight="bold" size={20} />
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-cta">
                      <span>Ver desafio técnico</span>
                      <ArrowUpRight weight="bold" size={15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudy projectId={openCase} onClose={() => setOpenCase(null)} />
    </>
  )
}
