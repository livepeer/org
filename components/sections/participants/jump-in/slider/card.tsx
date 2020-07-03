import { useState, useEffect, useRef } from "react"
import { Box, Card, Heading, Text, Progress, SxStyleProp } from "theme-ui"
import CardLink, { CardLinkProps } from "components/primitives/links"

export type SliderCardProps = {
  title: React.ReactNode
  description: string
  linkProps: CardLinkProps
  isActive: boolean
  nextSlide?: () => void
  moveToMySlide?: () => void
  progress?: number
  setProgress?: (n: number) => void
  className?: string
  pushSx?: SxStyleProp
}

const SliderCard = ({
  title,
  description,
  linkProps,
  isActive,
  nextSlide,
  progress,
  setProgress,
  moveToMySlide,
  className,
  pushSx
}: SliderCardProps) => {
  const timer = useRef<NodeJS.Timeout>()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (isActive) {
      timer.current = setInterval(() => {
        const newProgress = progress + 0.01
        if (newProgress > 1.05) {
          if (!isTransitioning) {
            nextSlide()
            setIsTransitioning(true)
          }
        } else {
          setProgress(newProgress)
          setIsTransitioning(false)
        }
      }, 30)
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [isActive, nextSlide, progress, isTransitioning])

  return (
    <Card
      sx={{
        bg: "transparent",
        color: "text",
        p: 0,
        border: "none",
        ...pushSx
      }}
      className={className}
    >
      <Progress
        value={!isActive ? 0 : progress}
        sx={{ mb: [3, "40px"], transition: "width .01s ease" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pr: 4,
          height: "218px"
        }}
      >
        <Box sx={{ cursor: "pointer" }} onClick={moveToMySlide}>
          <Heading
            variant="heading.5"
            sx={{
              textAlign: "left",
              mb: 3,
              color: isActive ? "background" : "lightGray",
              transition: "color .2s"
            }}
          >
            {title}
          </Heading>
          <Text
            variant="normal"
            sx={{
              color: isActive ? "background" : "lightGray",
              transition: "color .2s"
            }}
          >
            {description}
          </Text>
        </Box>
        <CardLink {...linkProps} />
      </Box>
    </Card>
  )
}

export default SliderCard
