import SectionLayout from "components/layouts/section"
import { Link as A, Heading, Text, Box } from "theme-ui"
import Accordion from "components/primitives/accordion"
import { AccordionItemProps } from "components/primitives/accordion/item"
import LivepeerIconSvg from "components/svgs/icons/livepeer"
import BasementIconSvg from "components/svgs/icons/basement"
import Maintainer, { MaintainerProps } from "./maintainer"

const livepeerMaintainers: MaintainerProps[] = [
  {
    name: "Jane Cooper",
    position: "Product Designer",
    avatar: { src: "https://i.pravatar.cc/200" },
    githubHref: ""
  },
  {
    name: "Jane Deo",
    position: "Product Designer",
    avatar: { src: "https://i.pravatar.cc/200" },
    githubHref: ""
  }
]

const basementMaintainers: MaintainerProps[] = [
  {
    name: "Jose Rago",
    position: "Product Designer",
    avatar: { src: "https://i.pravatar.cc/200" },
    githubHref: ""
  }
]

const accordionItems: AccordionItemProps[] = [
  {
    heading: {
      title: "Livepeer",
      icon: {
        children: <LivepeerIconSvg pushSx={{ width: "20px" }} isDark />
      }
    },
    children: (
      <Box pl={3} className="maintainer">
        {livepeerMaintainers.map((m) => (
          <Maintainer key={`maintainer-${m.name}`} {...m} />
        ))}
      </Box>
    )
  },
  {
    heading: {
      title: "basement.studio",
      icon: {
        bg: "#000",
        children: <BasementIconSvg />
      }
    },
    children: (
      <Box pl={3} className="maintainer">
        {basementMaintainers.map((m) => (
          <Maintainer key={`maintainer-${m.name}`} {...m} />
        ))}
      </Box>
    )
  }
]

const WhoIsMaintainingSection = () => (
  <SectionLayout
    title="Livepeer.org Maintainers"
    subtitle="The Livepeer.org website is maintained by members of the following organizations:"
    pushSx={{ pt: ["80px", "160px"] }}
  >
    <Accordion
      items={accordionItems}
      pushSx={{
        ".maintainer > div:not(:last-of-type)": {
          mb: 3,
          pb: 3,
          borderBottom: "1px solid",
          borderColor: "ultraLightGray"
        },
        maxWidth: "800px",
        mx: "auto",
        mb: 5
      }}
      withIllustratedBackground
    />
    <Heading variant="heading.5" sx={{ mb: 4, maxWidth: "4xl", mx: "auto" }}>
      Anyone is welcome and encouraged to help improve the site on{" "}
      <A sx={{ color: "secondary" }}>GitHub</A> by opening an issue or pull
      request. When submitting a pull request, please take required time to
      discuss your changes and adapt your work.
    </Heading>
    <Text
      variant="normal"
      sx={{ color: "gray", textAlign: "center", maxWidth: "4xl", mx: "auto" }}
    >
      Note: Livepeer.org is not an “official” website. Just like nobody owns or
      controls the technology behind email or bitcoin, nobody owns or controls
      the technology behind Livepeer. As such, nobody can speak with authority
      in the name of Livepeer.
    </Text>
  </SectionLayout>
)

export default WhoIsMaintainingSection
