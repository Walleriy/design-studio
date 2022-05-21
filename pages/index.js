import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import photo from "../media/images/pexels-saya-kimura-401107 1.png"

export default function Main() {
  return (
    <div className={styles.main}>
      <Image src={photo} alt='saya kimura' />;
    </div>
  )
}
