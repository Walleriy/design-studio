import styles from '../styles/components/Navbar.module.scss'
import Link from "next/link";

export default function Navbar() {
  const pages = [
    {
      url: "/",
      name: "головна",
    },
    {
      url: "/about",
      name: "про нас",
    },
    {
      url: "/services",
      name: "послуги",
    },
    {
      url: "/portfolio",
      name: "портфоліо",
    },
    {
      url: "/contacts",
      name: "контакти",
    },
  ]

  return (
    <div className={styles.navbar}>
      <h1>куб</h1>
      <nav>
        {pages.map(({url, name}, key) => (
          <Link href={url} key={key}>
            <a className={styles.navbar_item}>{name}</a>
          </Link>
        ))}
      </nav>
    </div>
  )
}
