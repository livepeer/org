import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconLinkCard, {
  IconLinkProps
} from "components/primitives/cards/icon-link"
import { FaDiscourse } from "react-icons/fa"

const links: IconLinkProps[] = [
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join Livepeer on <b>Discourse</b>
      </>
    ),
    href: "/discourse"
  }
]

const CommunitySection = () => (
  <SectionLayout
    title="Community"
    titleLabel="Subtitle"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    pushSx={{ pt: "160px" }}
  >
    <Grid>
      {links.map((link) => (
        <IconLinkCard key={`icon-link-${link.label}`} {...link} />
      ))}
    </Grid>
  </SectionLayout>
)

export default CommunitySection
