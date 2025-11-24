import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.css'

const folders = ['mis_proyectos', 'sobre_mi', 'contactame'] as const

const projects = [
  {
    name: 'Pulse OS',
    description: 'Sistema operativo ficticio para clínicas que visualiza datos biométricos en vivo.',
    tags: ['React', 'WebGL', 'Realtime'],
    preview: 'linear-gradient(135deg, rgba(255, 95, 86, 0.8), rgba(255, 189, 46, 0.8))',
    url: 'https://pulseos.jazmin.dev',
  },
  {
    name: 'Atlas Pay',
    description: 'Dashboard fintech con KPIs, accesos rápidos y modo oscuro dinámico.',
    tags: ['Fintech', 'Dashboard', 'UX Lead'],
    preview: 'linear-gradient(135deg, rgba(0, 242, 158, 0.8), rgba(0, 173, 242, 0.8))',
    url: 'https://atlaspay.jazmin.dev',
  },
  {
    name: 'Nebula XR',
    description: 'Landing inmersiva con escenas 3D para un estudio creativo.',
    tags: ['Three.js', 'Motion', 'Storytelling'],
    preview: 'linear-gradient(135deg, rgba(159, 109, 255, 0.8), rgba(255, 95, 86, 0.8))',
    url: 'https://nebular.jazmin.dev',
  },
  {
    name: 'Bloom LMS',
    description: 'Plataforma educativa con focus en microlearning y métricas claras.',
    tags: ['Edtech', 'Product', 'Accessibility'],
    preview: 'linear-gradient(135deg, rgba(0, 173, 242, 0.8), rgba(159, 109, 255, 0.8))',
    url: 'https://bloom.jazmin.dev',
  },
]

const skills = [
  { title: 'Stack principal', items: ['React + Next.js', 'TypeScript', 'Node.js / Express', 'GSAP / Three.js'] },
  { title: 'Diseño & producto', items: ['Design systems', 'Prototypado en Figma', 'Microinteracciones', 'UX research'] },
  { title: 'Tooling', items: ['Vite', 'Vitest / Playwright', 'Storybook', 'CI/CD en Vercel + GitHub'] },
]

const experiences = [
  {
    role: 'Lead Frontend · Aurora Lab',
    period: '2023 — Actualidad',
    detail: 'Dirijo un squad remoto construyendo experiencias financieras con énfasis en performance.',
  },
  {
    role: 'UX Engineer · Studio Norte',
    period: '2021 — 2023',
    detail: 'Prototipos interactivos y librerías UI para marcas lifestyle en LATAM.',
  },
  {
    role: 'Frontend Dev · Freelance',
    period: '2019 — 2021',
    detail: 'Portfolios, e-commerce y campañas experimentales para artistas y agencias.',
  },
]

const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+54 9 11 5555-0000',
    url: 'https://wa.me/5491155550000',
  },
  {
    label: 'Email',
    value: 'hola@jazmin.dev',
    url: 'mailto:hola@jazmin.dev',
  },
  {
    label: 'LinkedIn',
    value: '/in/jazmin-dev',
    url: 'https://www.linkedin.com/in/jazmin-dev',
  },
]

const FolderIcon = () => (
  <svg className={styles.folderSvg} width="20" height="16" viewBox="0 0 20 16" role="img" aria-hidden="true">
    <path
      d="M1.5 3A1.5 1.5 0 0 1 3 1.5h4.1c.4 0 .78.19 1.02.51l1 1.35c.2.27.5.44.82.44H17A1.5 1.5 0 0 1 18.5 4.8V12.5A1.5 1.5 0 0 1 17 14H3A1.5 1.5 0 0 1 1.5 12.5V3Z"
      fill="currentColor"
    />
  </svg>
)

export default function About() {
  const navigate = useNavigate()
  const [activeFolder, setActiveFolder] = useState<(typeof folders)[number]>('mis_proyectos')
  const pathSegment = activeFolder.replace('_', '-')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 120
    }
  }, [activeFolder])

  const renderContent = () => {
    if (activeFolder === 'mis_proyectos') {
      return (
        <>
          <p className={styles.breadcrumb}>/{pathSegment}</p>
          <h1 className={styles.contentTitle}>Mis proyectos destacados</h1>
          <p className={styles.contentText}>
            Interfaces minimalistas, experiencias interactivas y productos que mezclan diseño, datos y storytelling.
          </p>
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <a
                key={project.name}
                className={styles.projectCard}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.projectPreview} style={{ background: project.preview }} />
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h2>{project.name}</h2>
                    <span>↗</span>
                  </div>
                  <p>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      )
    }

    if (activeFolder === 'sobre_mi') {
      return (
        <>
          <p className={styles.breadcrumb}>/{pathSegment}</p>
          <h1 className={styles.contentTitle}>Quién es Jazmin</h1>
          <div className={styles.splitColumns}>
            <div>
              <h2 className={styles.sectionLabel}>skills</h2>
              <div className={styles.skillsGrid}>
                {skills.map(skill => (
                  <article key={skill.title} className={styles.skillCard}>
                    <h3>{skill.title}</h3>
                    <ul>
                      {skill.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h2 className={styles.sectionLabel}>experiencias</h2>
              <div className={styles.timeline}>
                {experiences.map(exp => (
                  <article key={exp.role} className={styles.timelineItem}>
                    <div>
                      <h3>{exp.role}</h3>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <p>{exp.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </>
      )
    }

    return (
      <>
        <p className={styles.breadcrumb}>/{pathSegment}</p>
        <h1 className={styles.contentTitle}>Contactame</h1>
        <p className={styles.contentText}>
          Si querés crear algo raro, elegante y veloz, escribime. Te respondo al toque por los canales de abajo.
        </p>
        <div className={styles.contactGrid}>
          {contactLinks.map(link => (
            <a key={link.label} className={styles.contactCard} href={link.url} target="_blank" rel="noreferrer">
              <span className={styles.contactLabel}>{link.label}</span>
              <span className={styles.contactValue}>{link.value}</span>
              <span className={styles.contactArrow}>↗</span>
            </a>
          ))}
        </div>
      </>
    )
  }

  return (
    <motion.main 
      className={styles.desktop}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className={styles.backgroundGlow} />
      <div className={styles.computerFrame}>
        <header className={styles.macHeader}>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className={styles.path}>/Jazmin/{pathSegment}</span>
          <button className={styles.backBtn} type="button" onClick={() => navigate('/')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Volver a la landing</span>
          </button>
        </header>

        <div className={styles.body}>
          <nav className={styles.sidebar} aria-label="Secciones dentro de la computadora">
            {folders.map(folder => (
              <button
                key={folder}
                type="button"
                className={`${styles.folderButton} ${activeFolder === folder ? styles.folderButtonActive : ''}`}
                onClick={() => setActiveFolder(folder)}
                aria-pressed={activeFolder === folder}
              >
                <FolderIcon />
                <span className={styles.folderLabel}>{folder}</span>
              </button>
            ))}
          </nav>

          <section className={styles.contentArea}>
            <div className={styles.contentInner} ref={contentRef}>{renderContent()}</div>
          </section>
        </div>
      </div>
    </motion.main>
  )
}
