import styles from './hero.module.css'
import { FaCarSide, FaArrowDown } from 'react-icons/fa'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.contenido}>
        <div className={styles.badge}>
          <FaCarSide /> Bienvenido a AutoPrime
        </div>
        <h1 className={styles.titulo}>
          Maneja el auto <span className={styles.highlight}>de tus sueños</span>
        </h1>
        <p className={styles.subtitulo}>
          Tu concesionaria de confianza en Talca. Los mejores vehículos, el mejor precio y financiamiento a tu medida.
        </p>
        <div className={styles.botones}>
          <a href="#vehiculos" className={styles.botonPrimario}>Ver Vehículos</a>
          <a href="#equipo" className={styles.botonSecundario}>Nuestro Equipo</a>
        </div>
      </div>
      <a href="#vehiculos" className={styles.scroll}>
        <FaArrowDown />
      </a>
    </section>
  )
}

export default Hero