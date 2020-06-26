/** @jsx jsx */
import { jsx, Link as A } from "theme-ui"
import Link from "next/link"

export type IconLinkProps = {
  icon: React.ReactNode
  label: React.ReactNode
  href: string
  asPath?: string
}

const IconLinkCard = ({ icon, label, href, asPath }: IconLinkProps) => (
  <Link href={href} as={asPath}>
    <A>
      <i>{icon}</i>
      {label}
    </A>
  </Link>
)

export default IconLinkCard
