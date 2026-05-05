import styles from './propuesta.module.css'

function Propuesta({ titulo, descripcion, icono }) {
  return (
    <div className={styles.card}>
      <div className={styles.icono}>{icono}</div>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  )
}

export default Propuesta