import { autos } from '../../data/dummy'
import styles from './cards.module.css'

function Cards() {
  return (
    <section className={styles.seccion} id="vehiculos">
      <h2 className={styles.titulo}>Nuestra Flota</h2>
      <div className={styles.grid}>
        {autos.map((auto) => (
          <div key={auto.id} className={styles.card}>
            <img src={auto.imagen} alt={auto.nombre} className={styles.imagen} />
            <div className={styles.info}>
              <h3 className={styles.nombre}>{auto.nombre}</h3>
              <p className={styles.descripcion}>{auto.descripcion}</p>
              <span className={styles.precio}>{auto.precio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards