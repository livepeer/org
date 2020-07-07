/** @jsx jsx */
import { jsx, Card, Box, Heading, Text } from "theme-ui"

export type RequirementCardProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: string
  className?: string
}

const RequirementCard = ({
  icon,
  title,
  description,
  className
}: RequirementCardProps) => (
  <Card
    className={className}
    sx={{
      //   height: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      bg: "transparent",
      p: 0,
      border: "none"
    }}
  >
    <div>
      <Box sx={{ mb: 4 }}>
        <i
          sx={{
            width: 16,
            height: 16,
            bg: "primary",
            color: "text",
            fontSize: 6,
            variant: "layout.flexCenter",
            borderRadius: "full"
          }}
        >
          {icon}
        </i>
      </Box>
      <Heading
        variant="heading.5"
        sx={{ textAlign: "left", mb: "24px", color: "background" }}
      >
        {title}
      </Heading>
      <Text variant="normal" color="lightGray">
        {description}
      </Text>
    </div>
  </Card>
)

export default RequirementCard
