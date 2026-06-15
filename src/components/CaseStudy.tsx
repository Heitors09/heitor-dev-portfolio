import { useState, useEffect } from 'react'
import './CaseStudy.css'
import {
  X,
  ArrowSquareOut,
  CheckCircle,
  Code,
  Lightbulb,
  Rocket,
  Stack,
} from '@phosphor-icons/react'

interface CaseStudyData {
  id: string
  title: string
  tagline: string
  liveUrl: string
  challenge: {
    title: string
    body: string
  }
  solution: {
    title: string
    body: string
    highlights: string[]
  }
  stack: string[]
  results: string[]
}

const cases: Record<string, CaseStudyData> = {
  databridge: {
    id: 'databridge',
    title: 'DataBridge',
    tagline: 'Conversor universal de dados — CSV ↔ JSON instantâneo',
    liveUrl: 'https://csv-to-json-seven.vercel.app/',
    challenge: {
      title: 'O Desafio',
      body:
        'Desenvolvedores e analistas de dados perdem horas convertendo arquivos entre CSV e JSON usando ferramentas pesadas, scripts avulsos ou serviços online lentos e com interface confusa. O desafio era criar uma ferramenta zero-fricção: sem instalação, sem cadastro, sem latência — apenas cole e converta.',
    },
    solution: {
      title: 'A Engenharia da Solução',
      body:
        'Toda a lógica de parse e serialização foi implementada com Web APIs nativas (FileReader, Blob, URL.createObjectURL), eliminando qualquer dependência de terceiros e garantindo performance de execução local. A interface foi construída com React 19 usando state granular por campo para evitar re-renders desnecessários. O foco foi UX: feedback imediato, detecção automática de delimitador e cópia com um clique.',
      highlights: [
        'Parser CSV customizado com detecção automática de separador (vírgula, ponto-vírgula, tab)',
        'Serialização JSON formatada com indentação configurável em tempo real',
        'Download nativo via Blob sem backend — processamento 100% client-side',
        'State mínimo com React 19 — zero dependências externas além do core',
        'Deploy em Vercel com Edge Network para latência < 50ms global',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Vercel Edge'],
    results: [
      'Conversão de arquivos de até 10MB em menos de 200ms',
      'Interface operacional sem nenhuma interação de backend',
      'Zero dependências de parsing — bundle final < 80kb gzipped',
      'Acessível via teclado e compatível com leitores de tela',
    ],
  },
  airnotes: {
    id: 'airnotes',
    title: 'AirNotes',
    tagline: 'PWA de anotações offline-first — suas ideias, em qualquer rede',
    liveUrl: 'https://air-notes-six.vercel.app/',
    challenge: {
      title: 'O Desafio',
      body:
        'Apps de anotação modernos dependem de conexão para salvar dados, gerando ansiedade e perda de informação em ambientes instáveis (metrô, aviões, zonas rurais). O desafio técnico foi projetar uma arquitetura genuinamente offline-first — onde o app funciona identicamente com ou sem internet, e sincroniza sem conflito ao reconectar.',
    },
    solution: {
      title: 'A Engenharia da Solução',
      body:
        'Implementei uma arquitetura baseada em Service Worker com estratégia Cache-First para recursos estáticos e Network-then-Cache para dados. O estado das notas é persistido via localStorage com serialização estruturada e versionamento de schema. O app foi registrado como PWA com manifest completo — instalável no home screen de iOS e Android sem App Store.',
      highlights: [
        'Service Worker com Workbox para cache inteligente de assets e rotas',
        'Persistência local via localStorage com schema versionado e migração automática',
        'Manifest PWA completo — instalável em iOS, Android e Desktop',
        'Estado global gerenciado com useReducer + Context para previsibilidade máxima',
        'Operações CRUD com feedback otimista — UX fluida mesmo offline',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite PWA', 'Service Worker', 'Workbox', 'Vercel'],
    results: [
      '100% funcional sem internet — nenhuma feature bloqueada offline',
      'Score 100 no Lighthouse PWA e 98 em Performance',
      'Instalável como app nativo em iOS e Android',
      'Dados persistem entre sessões e atualizações do app',
    ],
  },
}

interface CaseStudyProps {
  projectId: string | null
  onClose: () => void
}

export default function CaseStudy({ projectId, onClose }: CaseStudyProps) {
  const [visible, setVisible] = useState(false)
  const data = projectId ? cases[projectId] : null

  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [projectId])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 350)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') handleClose()
  }

  if (!projectId) return null

  return (
    <div
      className={`cs-overlay ${visible ? 'cs-overlay--visible' : ''}`}
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${data?.title}`}
    >
      <div
        className={`cs-drawer ${visible ? 'cs-drawer--visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cs-header">
          <div className="cs-header-meta">
            <span className="cs-label">Case Study</span>
            <button className="cs-close" onClick={handleClose} aria-label="Fechar">
              <X weight="light" size={22} />
            </button>
          </div>
          <h2 className="cs-title">{data?.title}</h2>
          <p className="cs-tagline">{data?.tagline}</p>
          <a
            href={data?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs-live-btn"
          >
            <ArrowSquareOut weight="light" size={18} />
            Ver projeto ao vivo
          </a>
        </div>

        {/* Divider */}
        <div className="cs-divider" />

        {/* Body */}
        <div className="cs-body">
          {/* Challenge */}
          <div className="cs-block">
            <div className="cs-block-label">
              <Lightbulb weight="light" size={18} />
              {data?.challenge.title}
            </div>
            <p className="cs-block-text">{data?.challenge.body}</p>
          </div>

          {/* Solution */}
          <div className="cs-block">
            <div className="cs-block-label">
              <Code weight="light" size={18} />
              {data?.solution.title}
            </div>
            <p className="cs-block-text">{data?.solution.body}</p>
            <ul className="cs-highlights">
              {data?.solution.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle weight="light" size={16} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="cs-block">
            <div className="cs-block-label">
              <Stack weight="light" size={18} />
              Stack utilizada
            </div>
            <div className="cs-stack">
              {data?.stack.map((t) => (
                <span key={t} className="cs-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="cs-block cs-block--results">
            <div className="cs-block-label">
              <Rocket weight="light" size={18} />
              Resultados
            </div>
            <ul className="cs-results">
              {data?.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
