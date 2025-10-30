import styles from './Projects.module.css'

export default function Projects() {
  return (
    <main className={styles.projects}>
      <div className={styles.container}>
        <section className={`${styles.card} ${styles.section}`}>
          <h1 className={styles.title}>Mis proyectos</h1>
          <p className={styles.text}>Acá más adelante vas a mostrar tus trabajos.</p>
        </section>
      </div>
    </main>
  )
}
