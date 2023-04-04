import Link from 'next/link';

import NavigationBar from '@/components/NavigationBar';

import styles from '@/styles/components/headers/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h3>ELS Logo</h3>
        </Link>

        <div className={styles.menuContent}>
          <NavigationBar />
          <Link href="/" className={styles.menuContact}>
            <div className={styles.menu}>Contact Us</div>
        </Link>
        </div>
      </div>
    </header>
  )
}

export default Header