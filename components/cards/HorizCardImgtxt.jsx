import Image from 'next/image';

import benefits from '@/public/images/bruce-mars-unsplash.jpg';

import styles from '@/styles/components/cards/horizCardImgtxt.module.scss';

const HorizCardImgtxt = () => {
  return (
    <div className={styles.horizCard}>
      <div className={styles.container}>
        <div className={styles.imageContent}>
          <Image
            alt='benefits,  andrey metelev from unsplash'
            src={benefits}
            fill
            sizes='100vw'
            className={styles.heroImg}
          />
        </div>
        {/* imageContent */}

        <div className={styles.textContent}>
          <h3>Headline text</h3>
          <p>Horizontal card description - this is where we describe maybe some features or benefits in more detail, provide more context, or just show anything we perceive to be important</p>
          <button>Learn more</button>
        </div>
        {/* textContent */}
      </div>
      {/* container */}
    </div>
  )
}

export default HorizCardImgtxt