import '../styles/globals.scss'
import Navbar from "../components/Navbar.Component";
import Contacts from "../components/Contacts.Component";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Contacts />
    </div>
  )
}

export default MyApp
