import { Box, Text, Link as A } from "theme-ui"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export type TopNotificationProps = {
  title: string
  description?: string
  link: {
    label: string
    href: string
    asPath?: string
    isExternal?: boolean
  }
}

const TopNotification = ({
  title,
  description,
  link
}: TopNotificationProps) => (
  <Box
    sx={{
      bg: "black",
      color: "background",
      textAlign: "center",
      p: 2,
      variant: "text.small",
      position: "relative",
      zIndex: "1"
    }}
  >
    <Text sx={{ fontWeight: 600, display: "inline" }}>{title}: </Text>
    {description && <Text sx={{ display: "inline" }}>{description}</Text>}
    {link.isExternal ? (
      <A
        variant="coloured"
        sx={{ display: "inline-flex", alignItems: "center", ml: 2 }}
        href={link.href}
        data-dark
      >
        {link.label}
        <i sx={{ ml: 1 }}>
          <FiArrowRight strokeWidth={3} />
        </i>
      </A>
    ) : (
      <Link href={link.href} as={link.asPath}>
        <A
          variant="coloured"
          sx={{ display: "inline-flex", alignItems: "center", ml: 2 }}
          data-dark
        >
          {link.label}
          <i sx={{ ml: 1 }}>
            <FiArrowRight strokeWidth={3} />
          </i>
        </A>
      </Link>
    )}
  </Box>
)

export default TopNotification
