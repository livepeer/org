/** @jsx jsx */
import {
  jsx,
  Card,
  Text,
  Heading,
  Flex,
  Button,
  Box,
  Link as A,
  SxStyleProp
} from "theme-ui"
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi"
import { LinkProps } from "lib/types/link-props"
import Link from "next/link"
import { useMemo } from "react"

type ButtonCta = {
  isLink: false
  label: string
  onClick: () => void
  isExternal?: boolean
}
type LinkCta = { isLink: true } & LinkProps

export type HugeCardProps = {
  title: React.ReactNode
  titleLabel: string
  accent: "primary" | "secondary"
  cta?: ButtonCta | LinkCta
  headerIllustration: React.ReactNode
  listItems: React.ReactNode[]
}

const HugeCard = ({
  title,
  titleLabel,
  listItems,
  accent,
  cta,
  headerIllustration
}: HugeCardProps) => {
  const ctaSx: SxStyleProp = useMemo(
    () => ({
      bg: accent,
      width: "fit-content",
      position: "relative",
      left: 0,
      "@media screen and (max-width: 360px)": {
        width: "112%",
        left: "-6%"
      }
    }),
    [accent]
  )

  return (
    <Card
      sx={{
        maxWidth: "632px",
        p: [4, 5, null, "90px"],
        pt: ["180px", "200px", "200px", "220px"],
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: ["-120px", "-110px", null, "-100px"],
          left: ["-172px", "-142px", null, "-118px"],
          pointerEvents: "none",
          width: "464px",
          height: "464px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {headerIllustration}
      </Box>
      <div sx={{ zIndex: "general", position: "relative" }}>
        <Text variant="large" sx={{ textAlign: "left" }}>
          {titleLabel}
        </Text>
        <Heading variant="heading.3" sx={{ textAlign: "left" }}>
          {title}
        </Heading>
        <Box sx={{ mt: "48px", mb: "40px" }}>
          {listItems.map((item) => (
            <Flex
              key={`list-item-${item}`}
              sx={{ "&:not(:last-of-type)": { mb: 4 } }}
            >
              <i sx={{ color: accent, fontSize: 5, mr: 3 }}>
                <FiCheckCircle />
              </i>
              <Text variant="normal">{item}</Text>
            </Flex>
          ))}
        </Box>
      </div>

      {cta.isLink ? (
        cta.isExternal ? (
          <A
            href={cta.href}
            target="_blank"
            sx={ctaSx}
            variant={`buttons.${accent}`}
          >
            {cta.label}
            <i sx={{ ml: 2, fontSize: 4 }}>
              <FiArrowUpRight />
            </i>
          </A>
        ) : (
          <Link href={cta.href} as={cta.asPath} passHref>
            <A sx={ctaSx} variant={`buttons.${accent}`}>
              {cta.label}
            </A>
          </Link>
        )
      ) : (
        <Button
          variant={accent}
          onClick={(cta as ButtonCta).onClick}
          sx={ctaSx}
        >
          {cta.label}
          {cta.isExternal && (
            <i sx={{ ml: 2, fontSize: 4 }}>
              <FiArrowUpRight />
            </i>
          )}
        </Button>
      )}
    </Card>
  )
}

export default HugeCard
