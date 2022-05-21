import styles from '../styles/components/Navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>куб</h1>
      <nav>
        <Link href="/expindex">
          <a className={styles.navbar_item}>expindex</a>
        </Link>
      </nav>
    </div>
  )
}
