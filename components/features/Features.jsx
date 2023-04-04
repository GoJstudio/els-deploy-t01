import styles from '@/styles/components/features/features.module.scss';

const Features = ({children}) => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Features</h2>
        <div className={styles.cardsContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Features