/** @jsx jsx */
import { jsx, Flex, Box, Text, SxStyleProp } from "theme-ui"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { useMemo, useCallback, useState, useEffect, useRef } from "react"
import { keyframes } from "@emotion/core"
import slugify from "@sindresorhus/slugify"
import { useRouter } from "next/router"

const toggleInKeyframe = keyframes({
  from: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  to: {
    backgroundColor: "rgba(255,255,255,0)"
  }
})

export type AccordionItemProps = {
  heading: {
    icon?: { bg?: string; children: React.ReactNode }
    title: string
    pushSx?: SxStyleProp
  }
  children: React.ReactNode
  withIllustratedBackground?: boolean
  currentlyToggled?: string
  setCurrentlyToggled?: React.Dispatch<React.SetStateAction<string>>
  withAnchorLink?: boolean
}

const AccordionItem = ({
  heading,
  children,
  withIllustratedBackground,
  currentlyToggled,
  setCurrentlyToggled,
  withAnchorLink = true
}: AccordionItemProps) => {
  const router = useRouter()
  const headingRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  const [baseHeight, setBaseHeight] = useState<string>(
    heading.icon ? "48px" : "40px"
  )
  const [fullHeight, setFullHeight] = useState<string>()

  useEffect(() => {
    if (!headingRef.current || !childrenRef.current) return
    const baseHeight = headingRef.current.offsetHeight
    const fullHeight = baseHeight + childrenRef.current.offsetHeight
    setBaseHeight(baseHeight + "px")
    setFullHeight(fullHeight + "px")
  }, [headingRef, childrenRef])

  const id = useMemo(() => slugify(heading.title), [heading.title])

  const isToggled = useMemo(() => currentlyToggled === id, [
    id,
    currentlyToggled
  ])

  const handleClick = useCallback(() => {
    if (isToggled) setCurrentlyToggled(undefined)
    else setCurrentlyToggled(id)
  }, [setCurrentlyToggled, isToggled, id])

  const isAnchorLinked = useMemo(() => {
    const selectedId = router.asPath.split("#")[1]
    if (!selectedId || !id) return false
    return selectedId === id
  }, [id, router.asPath])

  useEffect(() => {
    if (isAnchorLinked) handleClick()
  }, [isAnchorLinked])

  return (
    <IllustratedBackgroundBox
      pushSx={{
        backgroundBlendMode: "color",
        willChange: "background-color, background-image",
        ...(isToggled && withIllustratedBackground
          ? {
              backgroundColor: "rgba(255,255,255,1)",
              animation: `.15s ${toggleInKeyframe} forwards`
            }
          : {
              backgroundColor: "transparent",
              backgroundImage: "none"
            })
      }}
      pushContentSx={{
        boxShadow: "magical",
        p: [3, 4],
        overflow: "hidden",
        willChange: "height",
        height: [
          `calc(${isToggled ? fullHeight : baseHeight} + 32px)`,
          `calc(${isToggled ? fullHeight : baseHeight} + 64px)`
        ],
        transition: "height .15s",
        position: "relative"
      }}
    >
      <span sx={{ position: "absolute", top: "-88px" }} id={id} />
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          overflow: "hidden",
          "&:focus": {
            opacity: isToggled ? 1 : 0.75,
            outline: "none"
          },
          "&:hover .copy": {
            opacity: 0.5
          },
          ...heading.pushSx
        }}
        ref={headingRef}
        onClick={handleClick}
        as="button"
      >
        <Flex sx={{ alignItems: "center" }}>
          {heading.icon && (
            <i
              sx={{
                bg: heading.icon.bg || "primary",
                minWidth: 12,
                width: 12,
                height: 12,
                color: "text",
                fontSize: 6,
                variant: "layout.flexCenter",
                borderRadius: "full",
                mr: 3
              }}
            >
              {heading.icon.children}
            </i>
          )}
          <Text
            variant="heading.5"
            as="h5"
            sx={{
              color: isToggled ? "secondary" : "text",
              textAlign: "left",
              fontWeight: 600
            }}
          >
            {heading.title}
            {withAnchorLink && (
              <>
                {" "}
                <a
                  href={`#${id}`}
                  onClick={(e) => isToggled && e.stopPropagation()}
                  className="copy"
                  sx={{
                    opacity: 0,
                    transition: "opacity .15s",
                    "&:hover": { textDecoration: "underline" }
                  }}
                >
                  #
                </a>
              </>
            )}
          </Text>
        </Flex>
        <Box
          sx={{
            fontSize: 5,
            ml: 2,
            color: isToggled ? "secondary" : "text",
            minWidth: "fit-content",
            variant: "buttons.icon"
          }}
        >
          {isToggled ? <FiChevronDown /> : <FiChevronUp />}
        </Box>
      </Flex>
      <Box
        sx={{ pt: 4, visibility: isToggled ? "visible" : "hidden" }}
        ref={childrenRef}
      >
        {children}
      </Box>
    </IllustratedBackgroundBox>
  )
}

export default AccordionItem
