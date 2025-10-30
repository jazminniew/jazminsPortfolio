import { Routes, Route } from 'react-router-dom'
import Home from './page/Home/Home'
import About from './page/About/About'
import Projects from './page/Projects/Projects'
import Contact from './page/Contact/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<About />} />
      <Route path="/mis-proyectos" element={<Projects />} />
      <Route path="/contactame" element={<Contact />} />
    </Routes>
  )
}
