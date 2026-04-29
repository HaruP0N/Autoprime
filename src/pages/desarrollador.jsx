import styles from './desarrollador.module.css'
import { FaGithub, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa'

function Desarrollador({ nombre, carrera, ciudad, github }) {
  return (
    <section className={styles.seccion}>
      <div className={styles.card}>
        <img
          src="https://github.com/HaruP0N.png"
          alt="Foto desarrollador"
          className={styles.imagen}
        />
        <h2 className={styles.nombre}>{nombre}</h2>
        <p className={styles.carrera}>
          <FaUserGraduate /> {carrera}
        </p>
        <p className={styles.ciudad}>
          <FaMapMarkerAlt /> {ciudad}
        </p>
        <a 
          href={github}
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        >
          <FaGithub /> Ver GitHub
        </a>
      </div>
    </section>
  )
}

export default Desarrollador