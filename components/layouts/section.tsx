import { Box, Container, Text, Heading, SxStyleProp } from "theme-ui"

type Props = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  titleLabel?: React.ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
  headingContainerPushSx?: SxStyleProp
}

const SectionLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  titleLabel,
  background,
  pushSx,
  headingContainerPushSx
}) => {
  let bg = "background"
  let titleColor = "text"
  let subTitleColor = "gray"
  switch (background) {
    case "muted":
      bg = "muted"
      break
    case "dark":
    case "black":
      titleColor = "background"
      subTitleColor = "lightGray"
      bg = background === "black" ? "black" : "text"
      break
    default:
      break
  }

  return (
    <Box sx={{ bg, color: titleColor }}>
      <Container variant="section" sx={pushSx}>
        <Box
          sx={{
            zIndex: "general",
            position: "relative",
            mb: ["56px", "72px"],
            ...headingContainerPushSx
          }}
        >
          {titleLabel && (
            <Text variant="section.titleLabel" sx={{ color: titleColor }}>
              {titleLabel}
            </Text>
          )}
          {title && (
            <Heading variant="section.title" sx={{ color: titleColor }}>
              {title}
            </Heading>
          )}
          {subtitle && (
            <Heading variant="section.subtitle" sx={{ color: subTitleColor }}>
              {subtitle}
            </Heading>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  )
}

export default SectionLayout
