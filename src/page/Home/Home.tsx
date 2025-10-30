import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import bgUrl from '/background.png' 

export default function Home() {
  const navigate = useNavigate()

  return (
    <main
      className={styles.home}
      style={{ ['--home-bg' as any]: `url(${bgUrl})` }}
    >
      <div className={styles.container}>
          <section className={`${styles.card} ${styles.hero}`}>
            <h1 className={styles.title}>
              Hola bienvenido a mi <span className={styles.accent}>computadora</span>
              <span className={styles.wave} aria-hidden>👋</span>
            </h1>

            <p className={styles.subtitle}>
              Soy <strong>Jazmin</strong>. Acá vas a encontrar quién soy, mis proyectos y cómo contactarme.
            </p>

            <div className={styles.btnContainer}>
              <button className={styles.btn} onClick={() => navigate('/sobre-mi')}>
                <span className={styles.btnText}>INGRESAR</span>
              </button>
            </div>
          </section>

      </div>
    </main>
  )
}
