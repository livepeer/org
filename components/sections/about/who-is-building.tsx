/** @jsx jsx */
import { jsx, Button, Heading, Link as A } from "theme-ui"
import SectionLayout from "components/layouts/section"
import { FiArrowUpRight } from "react-icons/fi"
import Slider from "components/primitives/slider"

const images = [
  {
    src: "/images/slider/tokenholders.png",
    alt: "",
    sx: { width: "450px" }
  },
  {
    src: "/images/slider/infrastructure.png",
    alt: "",
    sx: { width: "460px" }
  },
  {
    src: "/images/slider/contributors.png",
    alt: "",
    sx: { width: "624px" }
  }
]

const WhoIsBuildingSection = () => (
  <SectionLayout
    title="Who's building Livepeer"
    background="muted"
    subtitle={
      <>
        In 2017, the founders of the Livepeer project formed a company called{" "}
        <A variant="coloured">Livepeer Inc</A> to help facilitate its early
        development, bootstrap the network’s supply and demand sides, and guide
        the project’s <A variant="coloured">path to decentralization</A>.
      </>
    }
    pushSx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: ["80px", "160px"]
    }}
  >
    <Button sx={{ variant: "layout.flexCenter" }}>
      Meet the Team Behind Livepeer Inc.{" "}
      <i sx={{ ml: 2, fontSize: 4 }}>
        <FiArrowUpRight />
      </i>
    </Button>
    <Slider pushSx={{ my: 5 }} numberOfCopies={4} duration={20}>
      {images.map((img) => (
        <div key={`slider-image-${img.src}`} sx={{ mx: 4, ...img.sx }}>
          <img
            {...img}
            sx={{
              height: "312px",
              objectFit: "cover",
              borderRadius: "md",
              ...img.sx
            }}
          />
        </div>
      ))}
    </Slider>
    <Heading variant="heading.5">
      Interested in Joining Livepeer Inc.? View its{" "}
      <A
        variant="coloured"
        sx={{ variant: "layout.flexCenter", display: "inline-flex" }}
      >
        open positions <FiArrowUpRight />
      </A>
    </Heading>
  </SectionLayout>
)

export default WhoIsBuildingSection
