import cx from 'classnames'

import boat from '../../assets/Boat.jpg'
import boat2 from '../../assets/Boat2.jpg'
import flag from '../../assets/Flag.jpg'
import { ReactComponent as Calendar } from './Calendar.svg'
import ContentCard from './ContentCard'
import styles from './ContentCardWrapper.module.scss'
import { ReactComponent as News } from './News.svg'

export default function ContentCardWrapper() {
  return (
    <>
      <section className={styles.root}>
        <div className={styles.newsCards}>
          <ContentCard classname={styles.grayCard}>
            <div className={styles.calendarWrapper}>
              <Calendar />
              <p className={styles.calendarText}>23 MAI 2021</p>
            </div>
            <h4 className={styles.cardTitle}>News Headline</h4>
            <p className={styles.cardText}>
              Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin... quis
              bibendum auctor.
            </p>
          </ContentCard>
          <ContentCard classname={styles.blackCard}>
            <div className={styles.calendarWrapper}>
              <Calendar />
              <p className={styles.calendarText}>23 MAI 2021</p>
            </div>
            <h4 className={styles.cardTitle}>News Headline</h4>
            <p className={styles.cardText}>
              Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin... quis
              bibendum auctor.
            </p>
          </ContentCard>
        </div>
        <div className={styles.mapCardClipped}>
          <h3 className={styles.mapCardText_title}>17 MAI</h3>
          <h4 className={styles.mapCardText_headline}>HEADLINE BEITRAG 2021</h4>
          <h5 className={styles.mapCardText_subtitle}>SUBTITLE</h5>
          <p className={styles.mapCardText_description}>
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
            quis bibendum auctor. nisi elit consequat ipsum, nec sagittis sem nibh id elit.{' '}
          </p>
        </div>
      </section>
      <section className={styles.root2}>
        <img className={styles.boatImage} src={boat} alt="Boat" />
        <div>
          <div className={styles.mapCard}>
            <h3 className={styles.mapCardText_title}>03 OKT</h3>
            <h4 className={styles.mapCardText_headline}>HEADLINE BEITRAG 2021</h4>
            <h5 className={styles.mapCardText_subtitle}>SUBTITLE - ORT - JAHR</h5>
            <p className={styles.mapCardText_description}>
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor. nisi elit consequat ipsum, nec sagittis sem nibh id elit.{' '}
            </p>
          </div>
          <div className={styles.mapCardImages}>
            <img src={boat2} alt="Boat" />
            <img src={flag} alt="Flag" />
          </div>
        </div>
      </section>
      <section className={styles.root3}>
        <div className={cx(styles.cardHorizontal, styles.cardHorizontalWithImage)}>
          <div className={styles.cardHorizontal_content}>
            <News />
            <h3 className={styles.cardHorizontal_content_title}>NEWS+BILDER</h3>
          </div>
        </div>
        <div className={styles.cardHorizontal}>
          <div className={styles.cardHorizontal_content}>
            <span className={styles.cardHorizontal_content_calendar}>
              <Calendar />
            </span>
            <h3 className={styles.cardHorizontal_content_title}>SEGELTEAM TERMINE 2021</h3>
          </div>
        </div>
      </section>
    </>
  )
}
