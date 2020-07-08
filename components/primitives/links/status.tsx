/** @jsx jsx */
import { jsx, Text, Link as A } from "theme-ui"
import { useMemo } from "react"
import { LinkProps } from "lib/types/link-props"
import { FiArrowUpRight } from "react-icons/fi"
import Link from "next/link"

export type StatusLinkProps = {
  link: LinkProps
  status: string
  isDark?: boolean
}

const StatusLink = ({ link, status, isDark }: StatusLinkProps) => {
  const linkChildren = useMemo(
    () => (
      <>
        <Text
          sx={{
            color: "background",
            variant: "layout.flexCenter",
            fontWeight: 400
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ mr: 2 }}
          >
            <circle
              cx="6"
              cy="6"
              r="6"
              sx={{ fill: isDark ? "primary" : "secondary" }}
            />
          </svg>
          {status}
        </Text>
        <Text sx={{ variant: "layout.flexCenter" }}>
          {link.label}
          <FiArrowUpRight size="22px" />
        </Text>
      </>
    ),
    [link, isDark]
  )

  const linkSx = useMemo(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }),
    [isDark]
  )

  if (link.isExternal) {
    return (
      <A
        variant="coloured"
        data-dark={isDark}
        href={link.href}
        target="_blank"
        sx={linkSx}
      >
        {linkChildren}
      </A>
    )
  }
  return (
    <Link href={link.href} as={link.asPath} passHref>
      <A variant="coloured" data-dark={isDark} sx={linkSx}>
        {linkChildren}
      </A>
    </Link>
  )
}

export default StatusLink
