import { Container, Grid } from "theme-ui"
import Tabs, { TabProps } from "components/primitives/tabs"
import { useRouter } from "next/router"
import ImageCard, { ImageCardProps } from "components/primitives/cards/image"
import { useMemo } from "react"
import posts, { categories } from "./posts"

const ResourcesDirectory = () => {
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
      image: p.image
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
      <Grid columns={3} gap={4} sx={{ my: 5, justifyContent: "center" }}>
        {filteredCards.map((c) => (
          <ImageCard
            key={`resource-card-${c.title}`}
            pushContentSx={{ height: "296px" }}
            isLink
            {...c}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default ResourcesDirectory
