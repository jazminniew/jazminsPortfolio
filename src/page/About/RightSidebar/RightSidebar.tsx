import { NavLink } from 'react-router-dom'
import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/sobre-mi"
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mis-proyectos"
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            Mis proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactame"
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
          >
            Contactame
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
