import { Container, Heading, SxStyleProp } from "theme-ui"

type Props = {
  title: React.ReactNode
  subtitle: React.ReactNode
  illustration: React.ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
}

const CroppedIllustrationHero = ({
  title,
  subtitle,
  illustration,
  background,
  pushSx
}: Props) => {
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
    <Container
      variant="section"
      sx={{ bg, maxWidth: "712px", mb: "-200px", ...pushSx }}
    >
      <Heading variant="heading.1" sx={{ mb: 4, color: titleColor }}>
        {title}
      </Heading>
      <Heading variant="heading.5" sx={{ mb: 5, color: subTitleColor }}>
        {subtitle}
      </Heading>
      {illustration}
    </Container>
  )
}

export default CroppedIllustrationHero
