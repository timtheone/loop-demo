import { ReactComponent as Facebook } from './facebook.svg'
import styles from './Footer.module.scss'
import { ReactComponent as Twitter } from './twitter.svg'

export default function Footer() {
  return (
    <footer className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.rightsDisclaimer}>© 2021. Segel-Team. Alle Rechte vorbehalten</li>
        <div className={styles.icons}>
          <Twitter />
          <Facebook />
        </div>
        <div className={styles.linksList}>
          <li>Impressum</li>
          <li>Datenschutz</li>
          <li>Rechtliches</li>
          <li>Copyright</li>
        </div>
      </ul>
    </footer>
  )
}
