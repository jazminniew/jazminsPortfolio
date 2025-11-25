import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.css'

const folders = ['mis_proyectos', 'sobre_mi', 'contactame'] as const

const projects = [
  {
    name: 'PipeEye',
    description: 'Sistema de inspección de ductos industriales potenciado por IA para detección automática de fallas.',
    tags: ['Industrial', 'AI', 'Pipeline'],
    preview: 'linear-gradient(135deg, rgba(0, 242, 158, 0.8), rgba(0, 173, 242, 0.8))',
    url: 'https://pipeeye.vercel.app',
  },
  {
    name: 'MalarIA',
    description: 'Herramienta de diagnóstico asistido para la detección temprana de malaria mediante análisis de imágenes.',
    tags: ['HealthTech', 'Deep Learning', 'Mobile'],
    preview: 'linear-gradient(135deg, rgba(255, 95, 86, 0.8), rgba(159, 109, 255, 0.8))',
    url: 'https://malariaa.vercel.app',
  },
  {
    name: 'EasyTech',
    description: 'App educativa diseñada para acercar la tecnología a adultos mayores con una UX 100% accesible.',
    tags: ['EdTech', 'Accessibility', 'App Mobile'],
    preview: 'linear-gradient(135deg, rgba(0, 173, 242, 0.8), rgba(159, 109, 255, 0.8))',
  },
  {
    name: 'Sin Gluten Company',
    description: 'Plataforma web y tarjeta de beneficios exclusivos para la comunidad celíaca.',
    tags: ['Fintech', 'Web Platform', 'Community'],
    preview: 'linear-gradient(135deg, rgba(255, 189, 46, 0.8), rgba(255, 95, 86, 0.8))',
    url: 'https://singlutencompany.com.ar',
  },
]

const skills = [
  { title: 'Stack Tecnológico', items: ['React', 'TypeScript', 'Git / GitHub', 'HTML / CSS Modules'] },
  { title: 'Diseño', items: ['Figma (Avanzado)', 'Prototipado', 'Diseño UI', 'Responsive Design'] },
  { title: 'Soft Skills', items: ['Liderazgo', 'Comunicación', 'Gestión de Grupos', 'Pedagogía'] },
  { title: 'Idiomas', items: ['Español (Nativo)', 'Inglés (B2 - First Certificate)'] },
]

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F29E" />
        <stop offset="50%" stopColor="#00ADF2" />
        <stop offset="100%" stopColor="#9F6DFF" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="url(#locationGradient)"
    />
  </svg>
)

const experiences = [
  {
    role: 'Co-Founder · PipeEye',
    period: '2024 — Actualidad',
    detail: 'Startup de inspección industrial con IA. Lidero el desarrollo técnico y la visión del producto.',
  },
  {
    role: 'Full Stack Developer · Sin Gluten Company',
    period: '2024 — Actualidad',
    detail: 'Desarrollo integral y mantenimiento de la plataforma de beneficios para la comunidad celíaca.',
  },
  {
    role: 'Educadora & Líder de Grupos',
    period: '2023 — Actualidad',
    detail: 'Liderazgo en espacios de educación no formal, planificación de actividades y gestión de grupos.',
  },
]

const studies = [
  {
    title: 'Licenciatura en Tecnología Digital',
    institution: 'Universidad Torcuato Di Tella',
    period: '2025 — Actualidad',
    detail: 'Formación en convergencia de tecnología, negocios y diseño.',
  },
  {
    title: 'Escuela Secundaria (TIC)',
    institution: 'ORT Argentina',
    period: '2021 — 2025',
    detail: 'Bachiller con orientación en Tecnologías de la Información y la Comunicación.',
  },
  {
    title: 'Escuela de Líderes',
    institution: 'Sociedad Hebraica Argentina',
    period: '2023 — 2024',
    detail: 'Formación pedagógica y liderazgo para la gestión de grupos en educación no formal.',
  },
  {
    title: 'First Certificate Exam',
    institution: 'Cambridge Assessment English',
    period: '2023',
    detail: 'Preparación particular y aprobación del examen nivel B2.',
  },
  {
    title: 'Inmersión en Inglés',
    institution: 'Londres, UK',
    period: '2023',
    detail: 'Viaje de perfeccionamiento del idioma y experiencia cultural.',
  },
]

const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+54 9 11 6448-4993',
    url: 'https://wa.me/5491164484993',
  },
  {
    label: 'Email',
    value: 'jazminniew@gmail.com',
    url: 'mailto:jazminniew@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: '/in/jazmin-niewiadomski',
    url: 'www.linkedin.com/in/jazmin-niewiadomski-42200b316',
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
          <h1 className={styles.contentTitle}>¿Quién es Jazmin?</h1>
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
              
              <div className={styles.locationSection}>
                <div className={styles.locationContent}>
                  <LocationIcon />
                  <div>
                    <h3 className={styles.locationTitle}>Ubicación</h3>
                    <p className={styles.locationText}>Palermo, Buenos Aires, Argentina</p>
                  </div>
                </div>
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

              <h2 className={styles.sectionLabel} style={{ marginTop: '2.5rem' }}>estudios</h2>
              <div className={styles.timeline}>
                {studies.map(study => (
                  <article key={study.title} className={styles.timelineItem}>
                    <div>
                      <h3>{study.title}</h3>
                      <span className={styles.period}>{study.period}</span>
                    </div>
                    <p style={{ marginBottom: '0.2rem', color: 'rgba(255,255,255,0.9)' }}>{study.institution}</p>
                    <p>{study.detail}</p>
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
          Si querés crear algo original, creativo y diferente, escribime. Te respondo al toque por los canales de abajo.
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
            <span>Volver</span>
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
