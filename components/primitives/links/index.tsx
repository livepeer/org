import { Link as A } from "theme-ui"
import { useMemo, ElementType } from "react"
import { LinkProps } from "lib/types/link-props"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export type CardLinkProps = {
  link: LinkProps
  isDark?: boolean
  as?: ElementType<any>
}

const CardLink = ({ as = "a", link, isDark }: CardLinkProps) => {
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
      alignItems: "center",
      "&:hover": {
        opacity: 0.8,
        color: isDark ? "primary" : "secondary"
      }
    }),
    [isDark]
  )

  if (link.isExternal) {
    return (
      <A as={as} href={link.href} target="_blank" sx={linkSx}>
        {linkChildren}
      </A>
    )
  }
  return (
    <Link href={link.href} as={link.asPath} passHref>
      <A as={as} sx={linkSx}>
        {linkChildren}
      </A>
    </Link>
  )
}

export default CardLink
