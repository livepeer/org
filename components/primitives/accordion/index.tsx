import { Box, SxStyleProp } from "theme-ui"
import AccordionItem, { AccordionItemProps } from "./item"
import { useState } from "react"

type Props = {
  items: AccordionItemProps[]
  withIllustratedBackground?: boolean
  pushSx?: SxStyleProp
}

const Accordion = ({ items, withIllustratedBackground, pushSx }: Props) => {
  const [currentlyToggled, setCurrentlyToggled] = useState<string>()

  return (
    <Box sx={pushSx}>
      {items.map((item) => (
        <AccordionItem
          key={`accordion-item-${item.heading.title}`}
          withIllustratedBackground={withIllustratedBackground}
          currentlyToggled={currentlyToggled}
          setCurrentlyToggled={setCurrentlyToggled}
          {...item}
        />
      ))}
    </Box>
  )
}

export default Accordion
