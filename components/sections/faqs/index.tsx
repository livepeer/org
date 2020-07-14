import { Container } from "theme-ui"
import Tabs, { TabProps } from "components/primitives/tabs"
import { useMemo } from "react"
import Accordion from "components/primitives/accordion"
import { AccordionItemProps } from "components/primitives/accordion/item"
import { useRouter } from "next/router"
import questions, { categories } from "./questions"

const FaqsSection = () => {
  const router = useRouter()
  const { filter } = router.query

  const filteredItems: AccordionItemProps[] = useMemo(() => {
    const filteredQuestions = questions.filter((q) =>
      filter ? q.category.value === filter : q.category.value === "general"
    )
    return filteredQuestions.map((q) => ({
      heading: { title: q.question },
      children: q.answer
    }))
  }, [questions, filter])

  const handleClick = (value?: string) => {
    if (!value || value === "general") return router.push("/faq")
    return router.push(`/faq?filter=${value}`)
  }

  const tabs: TabProps[] = useMemo(
    () => [
      ...categories.map((c) => ({
        label: c.label,
        onClick: () => {
          handleClick(c.value)
        },
        isSelected: filter === c.value || (!filter && c.value === "general")
      }))
    ],
    [filter, categories]
  )

  return (
    <Container variant="section">
      <Tabs
        items={tabs}
        pushSx={{ justifyContent: ["flex-start", null, null, "center"] }}
        fullWidthBreakpointIndex={2}
      />
      <Accordion pushSx={{ mt: 4 }} items={filteredItems} />
    </Container>
  )
}

export default FaqsSection
