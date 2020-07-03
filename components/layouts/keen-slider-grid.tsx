import { SxStyleProp, Box } from "theme-ui"
import { useKeenSlider } from "keen-slider/react"
import { TOptionsEvents } from "keen-slider"
import {
  useEffect,
  useState,
  useCallback,
  Children,
  isValidElement
} from "react"

type Breakpoint = {
  value: string
  slidesPerView: number
}

type Props = {
  config?: TOptionsEvents
  pushSx?: SxStyleProp
  breakpoints?: Breakpoint[]
}

const defaultBreakpoints: Breakpoint[] = [
  { value: "320px", slidesPerView: 1 },
  { value: "664px", slidesPerView: 2 },
  { value: "1152px", slidesPerView: 3 }
]

const getMedia = (value: string) => `(min-width: ${value})`

const KeenSliderGrid: React.FC<Props> = ({
  children,
  config,
  pushSx,
  breakpoints = defaultBreakpoints
}) => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  const [sliderRef] = useKeenSlider({
    slidesPerView,
    duration: 1000,
    spacing: 20,
    ...config
  })

  const handleScreenSizeChange = useCallback(() => {
    const matches = breakpoints.filter(
      ({ value }) => window.matchMedia(getMedia(value)).matches
    )
    const last = matches[matches.length - 1]
    if (last) setSlidesPerView(last.slidesPerView)
  }, [breakpoints])

  useEffect(() => {
    handleScreenSizeChange()
    const mediaQueryLists: MediaQueryList[] = []
    breakpoints.forEach(({ value }) => {
      const mql = window.matchMedia(getMedia(value))
      mediaQueryLists.push(mql)
      if (mql.addEventListener) {
        mql.addEventListener("change", handleScreenSizeChange)
      } else if (mql.addListener) {
        mql.addListener(handleScreenSizeChange)
      }
    })

    return () => {
      mediaQueryLists.forEach((mql) => {
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handleScreenSizeChange)
        } else if (mql.addListener) {
          mql.removeListener(handleScreenSizeChange)
        }
      })
    }
  }, [breakpoints])

  return (
    <Box
      className="keen-slider"
      ref={sliderRef as React.RefObject<HTMLDivElement>}
      sx={{
        position: "relative",
        overflow: "visible",
        width: "100%",
        ...pushSx
      }}
    >
      {Children.map(children, (child) => {
        // Add the keen-slider__slide className to childs
        if (isValidElement(child)) {
          return {
            ...child,
            props: {
              ...child.props,
              className: `${child.props.className} keen-slider__slide`
            }
          }
        }
        return child
      })}
    </Box>
  )
}

export default KeenSliderGrid
