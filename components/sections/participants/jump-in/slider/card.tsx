import { useMemo, useState, useEffect, useRef } from "react"
import { Box, Card, Heading, Text, Link as A, Progress } from "theme-ui"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export type SliderCardProps = {
  title: React.ReactNode
  description: string
  link: {
    label: string
    href: string
    asPath?: string
    isExternal?: boolean
  }
  isActive: boolean
  nextSlide?: () => void
  moveToMySlide?: () => void
  progress?: number
  setProgress?: (n: number) => void
}

const linkSx = {
  variant: "text.small",
  fontWeight: 600,
  color: "primary",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const SliderCard = ({
  title,
  description,
  link,
  isActive,
  nextSlide,
  progress,
  setProgress,
  moveToMySlide
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

  const linkChildren = useMemo(
    () => (
      <>
        <Text
          sx={{
            color: "primary",
            variant: "layout.flexCenter"
          }}
        >
          {link.label}
        </Text>
        <Text sx={{ variant: "layout.flexCenter", color: "primary" }}>
          <FiArrowRight size="22px" />
        </Text>
      </>
    ),
    [link]
  )

  return (
    <Card
      sx={{
        bg: "transparent",
        color: "text",
        p: 0,
        border: "none"
      }}
    >
      <Progress
        value={!isActive ? 0 : progress}
        sx={{ mb: 4, transition: "width .01s ease" }}
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
              my: 3,
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
        {link.isExternal ? (
          <A href={link.href} target="_blank" sx={linkSx}>
            {linkChildren}
          </A>
        ) : (
          <Link href={link.href} as={link.asPath} passHref>
            <A sx={linkSx}>{linkChildren}</A>
          </Link>
        )}
      </Box>
    </Card>
  )
}

export default SliderCard
