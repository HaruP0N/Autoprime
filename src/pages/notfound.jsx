import styles from './notfound.module.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className={styles.seccion}>
      <h1 className={styles.codigo}>404</h1>
      <p className={styles.mensaje}>¡Oops! La página que buscas no existe.</p>
      <Link to="/" className={styles.boton}>Volver al inicio</Link>
    </section>
  )
}

export default NotFound