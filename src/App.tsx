import { useRoutes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { cloneElement } from 'react'
import Home from './page/Home/Home'
import About from './page/About/About'
import Projects from './page/Projects/Projects'
import Contact from './page/Contact/Contact'

export default function App() {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre-mi', element: <About /> },
    { path: '/mis-proyectos', element: <Projects /> },
    { path: '/contactame', element: <Contact /> },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  )
}
