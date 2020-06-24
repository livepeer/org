import Link from "next/link"

import styles from "./footer.module.css"
import LivepeerLogo from "icons/livepeer-logo"

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <LivepeerLogo />
      </div>
    </footer>
  )
}

export default Footer
