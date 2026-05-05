import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconos}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/HaruP0N" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <p className={styles.copy}>Talca, 2024</p>
      <Link to="/desarrollador" className={styles.devLink}>Desarrollador</Link>
    </footer>
  )
}

export default Footer
