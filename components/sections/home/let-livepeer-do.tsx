import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconCard, { IconCardProps } from "components/primitives/cards/icon"
import { FiUserCheck, FiCode, FiBriefcase } from "react-icons/fi"

const cards: IconCardProps[] = [
  {
    icon: <FiUserCheck />,
    title: "Participants",
    description:
      "Join thousands of participants enabling affordable video streaming at scale in exchange for fees by running infrastructure, contributing code, or delegating work as a tokenholder.",
    linkProps: { link: { label: "/participants", href: "/participants" } },
    isClickable: true
  },
  {
    icon: <FiCode />,
    title: "Developers",
    description:
      "Discover APIs, guides, resources, and tools for adding live or on-demand video to your project using the Livepeer public network.",
    linkProps: { link: { label: "/developers", href: "/developers" } },
    isClickable: true
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise",
    description:
      "Get access to a hosted, enterprise-grade API suite offering instant, scaled and reliable access to the Livepeer public network.",
    linkProps: {
      link: {
        label: "livepeer.com",
        href: "https://livepeer.com",
        isExternal: true
      }
    },
    isClickable: true
  }
]

const LetLivepeerDoSection = () => (
  <SectionLayout
    titleLabel="Get Started"
    title="Ready to jump in?"
    subtitle="Get started by choosing the option that best describes your interest."
    background="muted"
  >
    <Grid
      gap={4}
      sx={{
        gridTemplateColumns: [
          "sm",
          null,
          null,
          null,
          ({ sizes: { sm } }) => `repeat(3, ${sm})`
        ],
        mx: "auto",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {cards.map((card) => (
        <IconCard key={`card-${card.title}`} {...card} />
      ))}
    </Grid>
  </SectionLayout>
)

export default LetLivepeerDoSection
