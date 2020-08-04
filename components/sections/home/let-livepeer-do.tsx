import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconCard, { IconCardProps } from "components/primitives/cards/icon"
import { FiCode } from "react-icons/fi"
import TokenSvg from "components/svgs/token"
import GpuSvg from "components/svgs/gpu"

const cards: IconCardProps[] = [
  {
    icon: <FiCode />,
    title: "Developers",
    description:
      "Discover APIs, guides, resources, and tools for adding live video to your project using the Livepeer public network or a hosted service.",
    linkProps: { link: { label: "/developers", href: "/developers" } },
    isClickable: true
  },
  {
    icon: <TokenSvg style={{ width: 24, height: 24 }} />,
    title: "Tokenholders",
    description:
      "Help improve and secure the Livepeer network by acquiring and staking LPT. Earn ETH and LPT rewards in exchange.",
    linkProps: { link: { label: "/tokenholders", href: "/tokenholders" } },
    isClickable: true
  },
  {
    icon: <GpuSvg style={{ width: 28, height: 28 }} />,
    title: "Video Miners",
    description:
      "Run a livepeer node and transcode video on your GPUs in exchange for ETH and LPT rewards.",
    linkProps: { link: { label: "/video-miners", href: "/video-miners" } },
    isClickable: true
  }
]

const LetLivepeerDoSection = () => (
  <SectionLayout
    titleLabel="Get Started"
    title="What role will you play in the Livepeer network?"
    subtitle="Jump in by choosing the option that best describes your interest:"
    id="get-started"
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
