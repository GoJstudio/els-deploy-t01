import Link from 'next/link';

import { FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";

import styles from '@/styles/components/footers/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row1}>
          <h4>ELS Logo</h4>
          <p>&copy; 2017-2023 CompanyName Inc.</p>
          <div className={styles.socials}>
            <FaYoutube />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
        </div>
        {/* row1 */}

        <hr />

        <div className={styles.row2}>
          <ul className={styles.linklist}>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 1</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 2</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 3</Link>
            </li>
          </ul>

          <ul className={styles.linklist}>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 1</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 2</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 3</Link>
            </li>
          </ul>

          <ul className={styles.linklist}>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 1</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 2</Link>
            </li>
            <li className={styles.linkmenu}>
              <Link href='/'>Link 3</Link>
            </li>
          </ul>
        </div>
        {/* row2 */}
      </div>
      {/* container */}
    </footer>
  )
}

export default Footer