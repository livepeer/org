/** @jsx jsx */
import { jsx, Flex, Box, Text, IconButton } from "theme-ui"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { useMemo, useCallback, useState, useEffect, useRef } from "react"

export type AccordionItemProps = {
  heading: { icon?: { bg?: string; children: React.ReactNode }; title: string }
  children: React.ReactNode
  withIllustratedBackground?: boolean
  currentlyToggled?: number
  index?: number
  setCurrentlyToggled?: React.Dispatch<React.SetStateAction<number>>
}

const AccordionItem = ({
  heading,
  children,
  withIllustratedBackground,
  currentlyToggled,
  setCurrentlyToggled,
  index
}: AccordionItemProps) => {
  const headingRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  const [baseHeight, setBaseHeight] = useState<string>("48px")
  const [fullHeight, setFullHeight] = useState<string>()

  useEffect(() => {
    if (!headingRef.current || !childrenRef.current) return
    const baseHeight = headingRef.current.offsetHeight
    const fullHeight = baseHeight + childrenRef.current.offsetHeight
    setBaseHeight(baseHeight + "px")
    setFullHeight(fullHeight + "px")
  }, [headingRef, childrenRef])

  const isToggled = useMemo(() => currentlyToggled === index, [
    index,
    currentlyToggled
  ])

  const handleClick = useCallback(() => {
    if (isToggled) setCurrentlyToggled(undefined)
    else setCurrentlyToggled(index)
  }, [setCurrentlyToggled, isToggled, index])

  return (
    <IllustratedBackgroundBox
      pushSx={{
        transition: "background-color .15s",
        backgroundBlendMode: "color",
        ...(isToggled && withIllustratedBackground
          ? { backgroundColor: "rgba(255,255,255,0)" }
          : { backgroundColor: "rgba(255,255,255,1)" })
      }}
      pushContentSx={{
        boxShadow: "magical",
        p: 4,
        overflow: "hidden",
        height: `calc(${isToggled ? fullHeight : baseHeight} + 64px)`,
        transition: "height .15s"
      }}
    >
      <Flex
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        ref={headingRef}
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
            sx={{
              color: isToggled ? "secondary" : "text",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            {heading.title}
          </Text>
        </Flex>
        <IconButton
          sx={{
            fontSize: 5,
            color: isToggled ? "secondary" : "text",
            minWidth: "fit-content"
          }}
          onClick={handleClick}
        >
          {isToggled ? <FiChevronDown /> : <FiChevronUp />}
        </IconButton>
      </Flex>
      <Box sx={{ pt: 4 }} ref={childrenRef}>
        {children}
      </Box>
    </IllustratedBackgroundBox>
  )
}

export default AccordionItem
