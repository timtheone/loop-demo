import heroImgSrc from '../../assets/hero.jpg'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.root}>
      <img className={styles.heroImage} src={heroImgSrc} alt="Banner of A Boat" />
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>LOREM IPSUM PROIN GRAVI</h1>
        <p className={styles.heroSubline}>
          LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR ALIQUET. AENEAN SOLLICITUDIN, LOREM QUIS
          BIBENDUM AUCTOR.
        </p>
      </div>
    </section>
  )
}
