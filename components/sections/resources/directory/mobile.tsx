import { Container, Grid } from "theme-ui"
import Tabs, { TabProps } from "components/primitives/tabs"
import { useRouter } from "next/router"
import ImageCard, { ImageCardProps } from "components/primitives/cards/image"
import { useMemo } from "react"
import posts, { categories } from "./posts"
import KeenSliderGrid from "components/layouts/keen-slider-grid"

const MobileResourcesDirectory = () => {
  const router = useRouter()
  const { filter } = router.query

  const filteredCards: ImageCardProps[] = useMemo(() => {
    const filteredPosts = posts.filter((c) =>
      filter ? c.category.value === filter : true
    )
    return filteredPosts.map((p) => ({
      title: p.title,
      description: p.description,
      footnote: p.subtitle,
      linkProps: { link: { ...p.link, label: p.category.label }, as: "div" },
      image: p.image,
      pushContentSx: p.pushContentSx
    }))
  }, [posts, filter])

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
      ...categories.map((c) => ({
        label: c.label,
        onClick: () => {
          handleClick(c.value)
        },
        isSelected: filter === c.value
      }))
    ],
    [filter, categories]
  )

  return (
    <Container variant="section">
      <Tabs items={tabs} pushSx={{ justifyContent: "center" }} />
      <KeenSliderGrid>
        {filteredCards.map((c) => (
          <ImageCard
            {...c}
            key={`resource-card-${c.title}`}
            isLink
            pushContentSx={{ height: "296px", ...c.pushContentSx }}
          />
        ))}
      </KeenSliderGrid>
    </Container>
  )
}

export default MobileResourcesDirectory
