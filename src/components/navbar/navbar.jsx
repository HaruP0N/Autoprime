import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'
import { FaCarSide } from 'react-icons/fa'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSeccion = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInicio = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaCarSide /> AutoPrime
      </div>
      <div className={styles.links}>
        <button onClick={handleInicio} className={styles.linkBtn}>Inicio</button>
        <button onClick={() => handleSeccion('vehiculos')} className={styles.linkBtn}>Vehículos</button>
        <button onClick={() => handleSeccion('equipo')} className={styles.linkBtn}>Equipo</button>
        <Link to="/desarrollador">Desarrollador</Link>
      </div>
    </nav>
  )
}

export default Navbar