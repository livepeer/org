import { Container, Text, Link as A } from "theme-ui"
import Tabs, { TabProps } from "components/primitives/tabs"
import { useMemo } from "react"
import Accordion from "components/primitives/accordion"
import { AccordionItemProps } from "components/primitives/accordion/item"
import { useRouter } from "next/router"

const items: AccordionItemProps[] = [
  {
    heading: {
      title:
        "I’m a developer and want to contribute to Livepeer. Where can I find some tools/resources?"
    },
    children: (
      <>
        <Text mb={3}>
          The best way to get started is to join the discussion in the Discord
          Developer Chat. Other helpful links for discovering development
          opportunities:
        </Text>
        <ul>
          <li>
            <A
              variant="coloured"
              href="https://livepeer.readthedocs.io/en/latest/developers.html"
              sx={{ fontWeight: 400 }}
            >
              https://livepeer.readthedocs.io/en/latest/developers.html
            </A>
          </li>
          <li>
            <A
              variant="coloured"
              href="https://github.com/Livepeer-Community-Node/Grant-Program"
              sx={{ fontWeight: 400 }}
            >
              https://github.com/Livepeer-Community-Node/Grant-Program
            </A>
          </li>
          <li>
            <A
              variant="coloured"
              href="https://github.com/livepeer"
              sx={{ fontWeight: 400 }}
            >
              https://github.com/livepeer
            </A>
          </li>
        </ul>
      </>
    )
  },
  {
    heading: {
      title:
        "Is there a community forum where you discuss upcoming proposals or implementations?"
    },
    children: (
      <>
        The best way to get started is to join the discussion in the Discord
        Developer Chat. Other helpful links for discovering development
        opportunities: https://livepeer.readthedocs.io/en/latest/developers.html
        https://github.com/Livepeer-Community-Node/Grant-Program
        https://github.com/livepeer
      </>
    )
  }
]

const FaqsSection = () => {
  const router = useRouter()
  const { filter } = router.query

  const filteredItems: AccordionItemProps[] = useMemo(() => {
    return items
  }, [items, filter])

  const handleClick = (value?: string) => {
    if (!value) return router.push("/faq")
    return router.push(`/faq?filter=${value}`)
  }

  const tabs: TabProps[] = useMemo(
    () => [
      {
        label: "All",
        onClick: () => {
          handleClick()
        },
        isSelected: true
      }
    ],
    []
  )

  return (
    <Container variant="section">
      <Tabs
        items={tabs}
        pushSx={{ justifyContent: ["flex-start", "center"] }}
      />
      <Accordion pushSx={{ mt: 4 }} items={filteredItems} />
    </Container>
  )
}

export default FaqsSection
