/** @jsx jsx */
import { jsx, Card, Text, Heading, Flex, Button, Box } from "theme-ui"
import { FiCheckCircle } from "react-icons/fi"

export type GetTokenCardProps = {
  title: string
  titleLabel: string
  accent: "primary" | "secondary"
  cta: { label: string; onClick: () => void }
  headerIllustration: React.ReactNode
  listItems: string[]
}

const GetTokenCard = ({
  title,
  titleLabel,
  listItems,
  accent,
  cta,
  headerIllustration
}: GetTokenCardProps) => (
  <Card
    sx={{
      maxWidth: "632px",
      p: [4, 5, null, "90px"],
      pt: ["180px", "200px", "200px", "220px"],
      position: "relative"
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: ["-120px", "-110px", null, "-100px"],
        left: ["-172px", "-142px", null, "-118px"],
        pointerEvents: "none"
      }}
    >
      {headerIllustration}
    </Box>
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
    <Button
      variant={accent}
      onClick={cta.onClick}
      sx={{
        bg: accent,
        width: "unset",
        position: "relative",
        left: 0,
        "@media screen and (max-width: 360px)": {
          width: "112%",
          left: "-6%"
        }
      }}
    >
      {cta.label}
    </Button>
  </Card>
)

export default GetTokenCard
