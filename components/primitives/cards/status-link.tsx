/** @jsx jsx */
import { jsx, Card, Link as A, Heading, Text, Box, SxStyleProp } from "theme-ui"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import { useMemo } from "react"

export type StatusLinkCardProps = {
  title: React.ReactNode
  description: string
  link: {
    label: string
    href: string
    status: { label: string; color?: string }
    asPath?: string
    isExternal?: boolean
  }
  isDark?: boolean
  pushSx?: SxStyleProp
}

const linkSx = {
  variant: "text.small",
  fontWeight: 600,
  color: "primary",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const StatusLinkCard = ({
  title,
  description,
  link,
  isDark = false,
  pushSx
}: StatusLinkCardProps) => {
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
              fill="#00EB88"
              sx={{ fill: link.status.color || "primary" }}
            />
          </svg>
          {link.status.label}
        </Text>
        <Text sx={{ variant: "layout.flexCenter" }}>
          {link.label}
          <FiArrowUpRight size="22px" />
        </Text>
      </>
    ),
    [link]
  )

  return (
    <Card
      sx={{
        bg: isDark ? "text" : "background",
        color: isDark ? "background" : "text",
        borderColor: isDark ? "transparent" : undefined,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...pushSx
      }}
    >
      <Box>
        <Heading
          variant="heading.5"
          sx={{ textAlign: "left", color: "background", my: 3 }}
        >
          {title}
        </Heading>
        <Text variant="normal">{description}</Text>
      </Box>
      {link.isExternal ? (
        <A href={link.href} target="_blank" sx={linkSx}>
          {linkChildren}
        </A>
      ) : (
        <Link href={link.href} as={link.asPath} passHref>
          <A sx={linkSx}>{linkChildren}</A>
        </Link>
      )}
    </Card>
  )
}

export default StatusLinkCard
