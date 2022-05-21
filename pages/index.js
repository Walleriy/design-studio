import styles from '../styles/Main.module.scss'
import Link from "next/link";

export default function Main() {
  const services = [
    {
      header: "ЛОГОТИПИ",
      content: "Створення логотипу — один з перших, але найважливіших кроків у організації та розвитку бізнес-проекту. Для нас логотип це інструмент візуальної комунікації бренду і споживача, а не художнє самовираження дизайнера.",
    },
    {
      header: "банери",
      content: "Банери – це невід’ємний елемент реклами. Це означає, що банерна реклама одна з найпопулярніших та дієвіших методів розповісти про свій товар, послугу чи підприємство. Ми розуміємо, як зробити банер, який продаватиме ваш товар.\n",
    },
    {
      header: "пакування",
      content: "Привабливий і якісний дизайн упаковки - важливий атрибут бренду. Це не просто тара для продукту, а канал комунікації з аудиторією і найсильніший маркетинговий інструмент. Ми знаємо як зробити Ваше пакування винятковим!",
    },
  ]

  const service = ({
    header,
    content,
  }) => {
    return (
      <div className={styles.service}>
        <h2>{header}</h2>
        <div className={styles.content}>{content}</div>
        <Link href="/services">
          <a>
            <img src="/images/arrow-right.svg"/>
          </a>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <img src="/images/pexels-saya-kimura-401107.png" alt="saya kimura"/>
      <div className={styles.services}>
        {services.map(serviceItem => service(serviceItem))}
      </div>
    </div>
  )
}
