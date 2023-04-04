import FaqAccordion from '../faqUnits/FaqAccordion'

import styles from '@/styles/components/faqs/faqs.module.scss';

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className={styles.faqsContainer}>
          <FaqAccordion
            title='Headline1: frequently asked questions #1'
            desc='1'
          />
          <FaqAccordion
            title='Headline2: frequently asked questions #2'
            desc='2'
          />
          <FaqAccordion
            title='Headline3: frequently asked questions #3'
            desc='3'
          />
          <FaqAccordion
            title='Headline4: frequently asked questions #4'
            desc='4'
          />
        </div>
      </div>
    </section>
  )
}

export default Faqs