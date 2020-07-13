import { Box, Grid } from "theme-ui"
import { useKeenSlider } from "keen-slider/react"
import { useState, useCallback } from "react"
import SliderCard, { SliderCardProps } from "./card"
import SliderImage, { SliderImageProps } from "./image"

const images: SliderImageProps[] = [
  {
    src: "/images/slider/tokenholders.png",
    alt: ""
  },
  {
    src: "/images/slider/infrastructure.png",
    alt: ""
  },
  {
    src: "/images/slider/contributors.png",
    alt: ""
  }
]

const JumpInSlider = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    spacing: 15,
    slideChanged: (slider) => {
      const { direction } = slider.details()

      setCards((prev) => {
        let newActiveIndex: number
        const currentlyActiveIndex = prev.findIndex((p) => p.isActive)
        const newIndexCandidate = currentlyActiveIndex + direction

        if (newIndexCandidate >= prev.length) newActiveIndex = 0
        else if (newIndexCandidate < 0) newActiveIndex = prev.length - 1
        else newActiveIndex = newIndexCandidate

        return prev.map((card, i) => {
          if (i === newActiveIndex) return { ...card, isActive: true }
          if (i === currentlyActiveIndex) return { ...card, isActive: false }
          return card
        })
      })
      setProgress(0)
    }
  })

  const [progress, setProgress] = useState(0)

  const [cards, setCards] = useState<SliderCardProps[]>([
    {
      title: "Tokenholders",
      description:
        "Help improve and secure the Livepeer network by acquiring and staking LPT. Earn ETH and LPT rewards in exchange.",
      linkProps: {
        link: {
          label: "/tokenholders",
          href: "/tokenholders"
        },
        isDark: true
      },
      isActive: true
    },
    {
      title: "Infrastructure operators",
      description:
        "Transcode video on your infrastructure as an infrastructure operator in exchange for ETH and LPT rewards.",
      linkProps: {
        link: {
          label: "/infrastructure",
          href: "/infrastructure"
        },
        isDark: true
      },
      isActive: false
    },
    {
      title: "OSS Contributors",
      description:
        "Help contribute to Livepeer’s open source technology projects as a developer or contributor.",
      linkProps: {
        link: {
          label: "/code",
          href: "/code"
        },
        isDark: true
      },
      isActive: false
    }
  ])

  const nextSlide = useCallback(() => {
    slider.next()
  }, [slider])

  return (
    <Box>
      <Box
        className="keen-slider"
        ref={sliderRef as React.RefObject<HTMLDivElement>}
      >
        {images.map((img) => (
          <SliderImage
            key={`jump-in-slider-image-${img.src}`}
            className="keen-slider__slide"
            {...img}
          />
        ))}
      </Box>
      <Grid columns={3} sx={{ mt: "42px" }}>
        {cards.map((card, i) => (
          <SliderCard
            {...card}
            key={`jump-in-slider-card-${card.title}`}
            nextSlide={nextSlide}
            progress={progress}
            setProgress={setProgress}
            moveToMySlide={() => slider.moveToSlide(i)}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default JumpInSlider
