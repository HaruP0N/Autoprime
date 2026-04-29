import { equipo } from '../../data/dummy'
import styles from './equipo.module.css'

function Equipo() {
  return (
    <section className={styles.seccion} id="equipo">
      <h2 className={styles.titulo}>Nuestro Equipo</h2>
      <div className={styles.grid}>
        {equipo.map((persona) => (
          <div key={persona.id} className={styles.card}>
            <img src={persona.imagen} alt={persona.nombre} className={styles.imagen} />
            <h3 className={styles.nombre}>{persona.nombre}</h3>
            <p className={styles.cargo}>{persona.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Equipo