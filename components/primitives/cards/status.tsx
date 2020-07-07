/** @jsx jsx */
import { jsx, Card, Heading, Text, Box, SxStyleProp } from "theme-ui"
import StatusLink, { StatusLinkProps } from "../links/status"

export type StatusCardProps = {
  title: React.ReactNode
  description: string
  linkProps: StatusLinkProps
  isDark?: boolean
  pushSx?: SxStyleProp
  className?: string
}

const StatusCard = ({
  title,
  description,
  linkProps,
  isDark = false,
  pushSx,
  className
}: StatusCardProps) => (
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
    className={className}
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
    <StatusLink isDark={isDark} {...linkProps} />
  </Card>
)

export default StatusCard
