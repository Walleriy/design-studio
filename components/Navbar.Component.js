import styles from '../styles/components/Navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/expindex">
        <a className={styles.navbar_item}>expindex</a>
      </Link>
    </nav>
  )
}
