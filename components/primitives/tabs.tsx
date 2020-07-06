import { LinkProps } from "lib/types/link-props"
import { Link as A, Text, Flex } from "theme-ui"
import { useMemo } from "react"
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

  if ((props as LinkProps).href) {
    const { href, asPath, isExternal } = props as LinkProps
    if (isExternal) {
      return (
        <A className="tab" href={href} target="_blank">
          {markup}
        </A>
      )
    }
    return (
      <Link href={href} as={asPath} passHref>
        <A className="tab">{markup}</A>
      </Link>
    )
  }

  const { onClick } = props as ButtonProps
  return (
    <button className="tab" onClick={onClick}>
      {markup}
    </button>
  )
}

type TabsProps = {
  items: TabProps[]
}

const Tabs = ({ items }: TabsProps) => {
  return (
    <Flex
      sx={{
        overflow: "auto",
        ".tab:not(:last-of-type)": { mr: 3 }
      }}
    >
      {items.map((tab) => (
        <Tab key={`tab-item-${tab.label}`} {...tab} />
      ))}
    </Flex>
  )
}

export default Tabs
