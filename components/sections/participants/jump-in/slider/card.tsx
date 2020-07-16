import { useState, useEffect, useRef } from "react"
import { Box, Card, Heading, Text, SxStyleProp } from "theme-ui"
import CardLink, { CardLinkProps } from "components/primitives/links/card"
import Progress from "components/primitives/progress"

export type SliderCardProps = {
  title: React.ReactNode
  description: string
  linkProps: CardLinkProps
  isActive: boolean
  nextSlide?: () => void
  moveToMySlide?: () => void
  progress?: number
  setProgress?: React.Dispatch<React.SetStateAction<number>>
  className?: string
  pushSx?: SxStyleProp
}

const intervalTime = 500

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
        let newProgress: number
        setProgress((prev) => {
          newProgress = prev + 20
          return newProgress
        })
        if (newProgress > 100) {
          if (!isTransitioning) {
            nextSlide()
            setIsTransitioning(true)
          }
        } else setIsTransitioning(false)
      }, intervalTime)

      return () => {
        clearInterval(timer.current)
      }
    }
  }, [isActive, nextSlide, isTransitioning])

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
        max={100}
        transitionDuration={!isActive ? "0" : `${intervalTime}ms`}
        pushSx={{ mb: [3, "40px"] }}
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
