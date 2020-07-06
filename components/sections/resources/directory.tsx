import { Container, Grid } from "theme-ui"
import Tabs, { TabProps } from "components/primitives/tabs"
import { useRouter } from "next/router"
import ImageCard, { ImageCardProps } from "components/primitives/cards/image"
import { useMemo } from "react"

type Tag =
  | { label: "Education"; value: "education" }
  | { label: "Products & Tools"; value: "products-and-tools" }
  | { label: "Exchanges"; value: "exchanges" }

const cards: (ImageCardProps & { tag: Tag })[] = [
  {
    title: "The Livepeer Whitepaper",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network.",
    footnote: "By Doug Petkanics & Eric Tang",
    image: { src: "" },
    linkProps: { link: { href: "/education", label: "Education" } },
    tag: { label: "Education", value: "education" }
  },
  {
    title: "The Livepeer Whitepaper 2",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network.",
    footnote: "By Doug Petkanics & Eric Tang",
    image: { src: "" },
    linkProps: { link: { href: "/education", label: "Education" } },
    tag: { label: "Products & Tools", value: "products-and-tools" }
  },
  {
    title: "The Livepeer Whitepaper 3",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network.",
    footnote: "By Doug Petkanics & Eric Tang",
    image: { src: "" },
    linkProps: { link: { href: "/education", label: "Education" } },
    tag: { label: "Products & Tools", value: "products-and-tools" }
  }
]

const ResourcesDirectory = () => {
  const router = useRouter()
  const { filter } = router.query

  const filteredCards = useMemo(() => {
    if (filter) return cards.filter((c) => c.tag.value === filter)
    return cards
  }, [cards, filter])

  const handleClick = (value?: string) => {
    if (!value) return router.push("/resources")
    return router.push(`/resources?filter=${value}`)
  }

  const tabs: TabProps[] = useMemo(
    () => [
      {
        label: "All",
        onClick: () => {
          handleClick()
        },
        isSelected: !filter
      },
      {
        label: "Education",
        onClick: () => {
          handleClick("education")
        },
        isSelected: filter === "education"
      },
      {
        label: "Products and Tools",
        onClick: () => {
          handleClick("products-and-tools")
        },
        isSelected: filter === "products-and-tools"
      },
      {
        label: "Exchange",
        onClick: () => {
          handleClick("exchange")
        },
        isSelected: filter === "exchange"
      }
    ],
    [filter]
  )

  return (
    <Container variant="section">
      <Tabs items={tabs} pushSx={{ justifyContent: "center" }} />
      <Grid columns={3} sx={{ my: 5, justifyContent: "center" }}>
        {filteredCards.map((c) => (
          <ImageCard
            key={`resource-card-${c.title}`}
            pushContentSx={{ height: "296px" }}
            {...c}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default ResourcesDirectory
