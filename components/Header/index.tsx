import Link from "next/link"

import styles from "./header.module.css"
import LivepeerLogo from "components/icons/livepeer-logo"

const Header = () => {
  return (
    <header className={styles.header}>
      <LivepeerLogo className={styles.logo} />
      <nav>
        <Link href="/participants">
          <a>Participants</a>
        </Link>
        <Link href="/developers">
          <a>Developers</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/enterprise">
          <a>Enterprise</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
