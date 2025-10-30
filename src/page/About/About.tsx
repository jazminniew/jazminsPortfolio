import RightSidebar from './RightSidebar/RightSidebar'
import styles from './About.module.css'

export default function About() {
  return (
    <main className={styles.about}>
      <div className={styles.container}>
        <section className={`${styles.card} ${styles.content}`}>
          <h1 className={styles.title}>Sobre mí</h1>
          <p className={styles.text}>
            [Acá va tu info personal, presentación, skills, etc.]
          </p>
        </section>

        <RightSidebar /> {/* ← ahora visible */}
      </div>
    </main>
  )
}
