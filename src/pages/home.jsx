import styles from './home.module.css'
import Hero from '../components/hero/hero'
import Cards from '../components/cards/cards'
import Equipo from '../components/equipo/equipo'
import Propuesta from '../components/propuesta/propuesta'
import { FaTrophy, FaCreditCard, FaWrench } from 'react-icons/fa'

function Home() {
  return (
    <main>
      <Hero />

      <section className={styles.propuestas}>
        <h2 className={styles.titulo}>¿Por qué elegirnos?</h2>
        <div className={styles.grid}>
          <Propuesta
            icono={<FaTrophy />}
            titulo="Calidad Garantizada"
            descripcion="Todos nuestros vehículos pasan por rigurosos controles de calidad antes de ser ofrecidos."
          />
          <Propuesta
            icono={<FaCreditCard />}
            titulo="Financiamiento Fácil"
            descripcion="Contamos con planes de financiamiento flexibles adaptados a tu presupuesto."
          />
          <Propuesta
            icono={<FaWrench />}
            titulo="Servicio Técnico"
            descripcion="Taller propio con técnicos certificados para mantener tu vehículo en óptimas condiciones."
          />
        </div>
      </section>

      <Cards />
      <Equipo />
    </main>
  )
}

export default Home