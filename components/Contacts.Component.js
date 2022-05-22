import styles from '../styles/components/Contacts.module.scss'
import {useState} from "react";
import {EmailService} from "../services/Email.Service";

export default function Contacts() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleEmailSubmit = async email => {
    try {
      const params = {
        email
      }
      const { items, totalCount } = await EmailService.sendEmail(params);
      if (items.length < NFT_ITEMS_LIMIT || (nftItems.length + items.length) === totalCount) {
        setShowLoadMore(false);
      }
      setNftItems({items, totalCount, loading: false});
    } catch (e) {
      console.error(e);
      setNftItems({...nftItems, loading: false});
    }
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.upper}>
        <h5>контакти</h5>
        <h3>зідзвонимось?</h3>
        <div>
          <div className={styles.left}>
            <p>Ми можемо влаштувати зустріч на платформі Google Meet, щоб обговорити всі питання, які Вас цікавлять. Просто залиште адресу Вашої електронної пошти і ми надішлемо Вам запрошення</p>
            <form>
              <input
                type="email"
                placeholder="Електронна адреса"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="submit"
                value="Надіслати"
                onClick={handleEmailSubmit}
              />
            </form>
          </div>
          <div className={styles.right}>
            <div>
              <img src="/images/location.svg" alt="location"/>
              м. Львів, вул. Князя Романа 15
            </div>
            <div>
              <img src="/images/email.svg" alt="email"/>
              cubeSup@gmail.com
            </div>
            <div>
              <img src="/images/phone.svg" alt="phone"/>
              +380 68 654 44 55
            </div>
          </div>
        </div>

      </div>
      <div className={styles.lower}>
        <div className={styles.social_media_links}>
          <img src="/images/sm_links.png" alt="sm_links"/>
        </div>
        <hr/>
        <div>© 2022 cube. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  )
}
