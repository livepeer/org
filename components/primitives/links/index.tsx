import { Link as A } from "theme-ui"
import { useMemo } from "react"
import { LinkProps } from "lib/types/link-props"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export type CardLinkProps = {
  link: LinkProps
  isDark?: boolean
}

const CardLink = ({ link, isDark }: CardLinkProps) => {
  const linkChildren = useMemo(
    () => (
      <>
        {link.label} <FiArrowRight size="22px" />
      </>
    ),
    [link]
  )

  const linkSx = useMemo(
    () => ({
      variant: "text.small",
      fontWeight: 600,
      color: isDark ? "primary" : "secondary",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }),
    [isDark]
  )

  if (link.isExternal) {
    return (
      <A href={link.href} target="_blank" sx={linkSx}>
        {linkChildren}
      </A>
    )
  }
  return (
    <Link href={link.href} as={link.asPath} passHref>
      <A sx={linkSx}>{linkChildren}</A>
    </Link>
  )
}

export default CardLink
