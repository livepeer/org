/** @jsx jsx */
import { jsx, Card, Text, Heading, Flex, Button, Box } from "theme-ui"
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi"

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
        pointerEvents: "none"
      }}
    >
      {headerIllustration}
    </Box>
    <div>
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

    <Button
      variant={accent}
      onClick={cta.onClick}
      sx={{
        bg: accent,
        width: "fit-content",
        position: "relative",
        left: 0,
        "@media screen and (max-width: 360px)": {
          width: "112%",
          left: "-6%"
        }
      }}
    >
      {cta.label}
      <i sx={{ ml: 2, fontSize: 4 }}>
        <FiArrowUpRight />
      </i>
    </Button>
  </Card>
)

export default GetTokenCard
