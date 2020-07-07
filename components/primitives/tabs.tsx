/** @jsx jsx */
import { jsx, Link as A, Text, Flex, SxStyleProp } from "theme-ui"
import { LinkProps } from "lib/types/link-props"
import { useMemo, useEffect, useState, useRef } from "react"
import Link from "next/link"

type ButtonProps = { label: string; onClick: () => void }

export type TabProps = (LinkProps | ButtonProps) & { isSelected?: boolean }

const Tab = (props: TabProps) => {
  const markup = useMemo(
    () => (
      <Text
        variant="heading.5"
        sx={{
          color: props.isSelected ? "secondary" : "text",
          px: 2,
          whiteSpace: "pre",
          textDecoration: props.isSelected ? "underline" : "none"
        }}
      >
        {props.label}
      </Text>
    ),
    [props]
  )

  const focusSx: SxStyleProp = useMemo(
    () => ({
      "&:focus": {
        outline: "none",
        opacity: props.isSelected ? 1 : 0.6
      }
    }),
    [props.isSelected]
  )

  if ((props as LinkProps).href) {
    const { href, asPath, isExternal } = props as LinkProps
    if (isExternal) {
      return (
        <A sx={focusSx} className="tab" href={href} target="_blank">
          {markup}
        </A>
      )
    }
    return (
      <Link href={href} as={asPath} passHref>
        <A sx={focusSx} className="tab">
          {markup}
        </A>
      </Link>
    )
  }

  const { onClick } = props as ButtonProps
  return (
    <button sx={focusSx} className="tab" onClick={onClick}>
      {markup}
    </button>
  )
}

type TabsProps = {
  items: TabProps[]
  pushSx?: SxStyleProp
  isFullWidthOnMobile?: boolean
}

const Tabs = ({ items, pushSx, isFullWidthOnMobile = true }: TabsProps) => {
  const [offsetLeft, setOffsetLeft] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && isFullWidthOnMobile) {
      setOffsetLeft(containerRef.current.offsetLeft)
    }
  }, [containerRef, isFullWidthOnMobile])

  return (
    <Flex
      ref={containerRef}
      sx={{
        overflow: "auto",
        width: [isFullWidthOnMobile ? "100vw" : "100%", "100%"],
        position: "relative",
        left: [`-${offsetLeft}px`, 0],
        pl: [`${offsetLeft}px`, 0],
        ".tab:not(:last-of-type)": { mr: 3 },
        ...pushSx
      }}
    >
      {items.map((tab) => (
        <Tab key={`tab-item-${tab.label}`} {...tab} />
      ))}
    </Flex>
  )
}

export default Tabs
