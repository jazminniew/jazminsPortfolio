import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.container}>
        <section className={`${styles.card} ${styles.section}`}>
          <h1 className={styles.title}>Contactame</h1>
          <form className={styles.form}>
            <label className={styles.label}>
              Nombre
              <input type="text" placeholder="Tu nombre" className={styles.input} />
            </label>
            <label className={styles.label}>
              Email
              <input type="email" placeholder="tu@email.com" className={styles.input} />
            </label>
            <label className={styles.label}>
              Mensaje
              <textarea placeholder="Contame algo..." className={styles.textarea}></textarea>
            </label>
            <button className={styles.btn} type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </main>
  )
}
