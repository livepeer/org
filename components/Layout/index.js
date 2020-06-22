import Header from "components/Header"
import Footer from "components/Footer"

import styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  )
}

export default Layout
