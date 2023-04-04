import Image from 'next/image';

import fruits from '@/public/images/andrey-metelev-unsplash.jpg';
// import greenField from '@/public/images/appa-unsplash.jpg';

import styles from '@/styles/components/cards/horizCardTxtimg.module.scss';

const HorizCardTxtimg = () => {
  return (
    <div className={styles.horizCard}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3>Headline text</h3>
          <p>Horizontal card description - this is where we describe maybe some features or benefits in more detail, provide more context, or just show anything we perceive to be important</p>
          <button>Learn more</button>
        </div>
        {/* textContent */}

        <div className={styles.imageContent}>
          <Image
            alt='fruits,  andrey metelev from unsplash'
            src={fruits}
            fill
            sizes='100vw'
            className={styles.heroImg}
          />
        </div>
        {/* imageContent */}
      </div>
      {/* container */}
    </div>
  )
}

export default HorizCardTxtimg