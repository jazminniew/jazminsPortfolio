import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Home.module.css'

type TerminalLine = {
  type: 'command' | 'output'
  text: string
}

const terminalSequence: TerminalLine[] = [
  { type: 'command', text: 'system-check' },
  { type: 'output', text: '✔ Diseño y desarrollo experiencias web' },
  { type: 'output', text: '✔ Creo historias digitales con código' },
  { type: 'output', text: '✔ Lidero grupos de educación no formal' },
  { type: 'command', text: 'open j-computer' },
]

export default function Home() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [typedLines, setTypedLines] = useState<string[]>(() => terminalSequence.map(() => ''))
  const [typingStarted, setTypingStarted] = useState(false)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [activeLine, setActiveLine] = useState(-1)
  const screenRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const screenEl = screenRef.current
    if (!screenEl) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypingStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(screenEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!typingStarted) return

    let currentLine = 0
    let currentChar = 0
    let timeoutId: number

    const type = () => {
      if (currentLine >= terminalSequence.length) {
        setActiveLine(-1)
        setIsTypingComplete(true)
        return
      }

      const fullText = terminalSequence[currentLine].text
      setActiveLine(currentLine)

      if (currentChar < fullText.length) {
        setTypedLines(prev => {
          const next = [...prev]
          next[currentLine] = fullText.slice(0, currentChar + 1)
          return next
        })
        currentChar += 1
        const speed = terminalSequence[currentLine].type === 'command' ? 45 : 35
        timeoutId = window.setTimeout(type, speed)
      } else {
        currentLine += 1
        currentChar = 0
        timeoutId = window.setTimeout(type, 400)
      }
    }

    timeoutId = window.setTimeout(type, 300)

    return () => window.clearTimeout(timeoutId)
  }, [typingStarted])

  return (
    <motion.div 
      className={styles.homeContainer}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Fondo minimalista */}
      <div className={styles.backgroundGlow}></div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src="/favicon.png" alt="Logo" className={styles.logoImg} />
          </div>
          <button className={styles.navBtn} onClick={() => navigate('/sobre-mi')}>
            <span>Ingresar</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hola, soy{' '}
            <span className={styles.nameWrap}>
              <span className={styles.gradient}>Jazmin</span>
              <span className={styles.wave} aria-hidden="true">👋</span>
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Estás por entrar en mi portfolio, una experiencia digital.
            <br />
            Conocé quién soy, qué construyo y explorá mi computadora.
          </p>
        </div>
      </section>

      {/* Computer Screen Section */}
      <section className={styles.computerSection}>
        <div className={styles.screenContainer}>
          <div className={styles.screen} ref={screenRef}>
            <div className={styles.screenGlow}></div>
            <div className={styles.screenContent}>
              <div className={styles.terminalHeader}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.terminalTitle}>jazmin.exe</span>
              </div>
              <div className={styles.terminalBody}>
                {terminalSequence.map((line, index) => (
                  line.type === 'command' ? (
                    <p className={styles.terminalLine} key={`${line.text}-${index}`}>
                      <span className={styles.prompt}>PS {'>'}</span>
                      <span>{typedLines[index]}</span>
                      {activeLine === index && <span className={styles.cursor}></span>}
                    </p>
                  ) : (
                    <p className={styles.terminalOutput} key={`${line.text}-${index}`}>
                      {typedLines[index]}
                      {activeLine === index && <span className={styles.cursor}></span>}
                    </p>
                  )
                ))}
                {isTypingComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button className={styles.enterBtn} onClick={() => navigate('/sobre-mi')}>
                      <span className={styles.enterBtnText}>Ingresar a la computadora de Jaz</span>
                      <svg className={styles.enterBtnIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" y1="12" x2="3" y2="12" />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Diseñado y desarrollado por <span className={styles.gradient}>Jazmin</span>
          </p>
          <p className={styles.footerYear}>© 2025</p>
        </div>
      </footer>
    </motion.div>
  )
}
