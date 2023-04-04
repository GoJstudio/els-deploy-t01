import styles from '@/styles/components/cards/textCard.module.scss';

const TextCard = () => {
  return (
    <div className={styles.textCard}>
      <h3 className={styles.title}>Headline</h3>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil laborum mollitia delectus commodi optio! Ipsa!</p>
      <button className={styles.btn}>Learn More!</button>
    </div>
  )
}

export default TextCard