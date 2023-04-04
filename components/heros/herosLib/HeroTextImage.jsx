import Image from 'next/image';

import greenField from '@/public/images/navi-unsplash.jpg';

import styles from '@/styles/components/heros/hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Title - Website Headline
          </h1>
          <p className={styles.desc}>
            This is a website for a fictional company that develops an app that provides features and services for its users
          </p>
          <button>Learn more</button>
        </div>
        {/* textContent */}

        <div className={styles.imageContent}>
          <Image
            alt='green-field, navi from unsplash'
            src={greenField}
            fill
            sizes='100vw'
            className={styles.heroImg}
          />
        </div>
      </div>
      {/* container */}
    </section>
  )
}

export default Hero