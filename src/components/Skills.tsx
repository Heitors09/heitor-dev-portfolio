import './Skills.css'
import { Browser, Database, Wrench, PlugsConnected } from '@phosphor-icons/react'
import type { ReactElement } from 'react'

interface SkillCategory {
  title: string
  icon: ReactElement
  skills: { name: string; highlight?: boolean }[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Browser weight="light" size={20} />,
    skills: [
      { name: 'React 19', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Next.js' },
      { name: 'TanStack Start', highlight: true },
      { name: 'Tailwind CSS 4' },
      { name: 'Base UI' },
      { name: 'Motion' },
      { name: 'Recharts' },
      { name: 'Zustand' },
    ],
  },
  {
    title: 'Backend',
    icon: <Database weight="light" size={20} />,
    skills: [
      { name: 'Fastify 5', highlight: true },
      { name: 'Drizzle ORM', highlight: true },
      { name: 'PostgreSQL' },
      { name: 'GraphQL' },
      { name: 'PowerSync', highlight: true },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: <Wrench weight="light" size={20} />,
    skills: [
      { name: 'Turborepo', highlight: true },
      { name: 'Bun', highlight: true },
      { name: 'Vite' },
      { name: 'Git' },
      { name: 'Sentry' },
      { name: 'Vercel' },
    ],
  },
  {
    title: 'Integrações',
    icon: <PlugsConnected weight="light" size={20} />,
    skills: [
      { name: 'Shopify API' },
      { name: 'Clerk', highlight: true },
      { name: 'Stripe', highlight: true },
      { name: 'REST APIs' },
      { name: 'Webhooks' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header animate-on-scroll">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tecnologias & ferramentas</h2>
          <p className="section-description">
            A stack que uso para construir MVPs robustos, plataformas SaaS e produtos digitais escaláveis.
          </p>
        </div>

        <div className="skills-list">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`skills-row animate-on-scroll delay-${i + 1}`}
            >
              <div className="skills-row-label">
                <span className="skills-row-icon">{cat.icon}</span>
                <span className="skills-row-title">{cat.title}</span>
              </div>
              <div className="skills-row-pills">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-pill"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
