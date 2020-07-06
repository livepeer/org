import SectionLayout from "components/layouts/section"
import { Link as A, Heading, Text } from "theme-ui"

const WhoIsMaintainingSection = () => (
  <SectionLayout
    title="Who Mantains Livepeer.org"
    subtitle="The Livepeer.org website is maintained by members of the following organizations:"
    pushSx={{ pt: ["80px", "160px"] }}
  >
    Acc
    <Heading variant="heading.5">
      Anyone is welcome and encouraged to help improve the site on{" "}
      <A sx={{ color: "secondary" }}>GitHub</A> by opening an issue or pull
      request. When submitting a pull request, please take required time to
      discuss your changes and adapt your work.
    </Heading>
    <Text variant="normal" sx={{ color: "lightGray", textAlign: "center" }}>
      Note: Livepeer.org is not an “official” website. Just like nobody owns the
      email technology, nobody owns the Livepeer network. As such, nobody can
      speak with authority in the name of Livepeer.
    </Text>
  </SectionLayout>
)

export default WhoIsMaintainingSection
