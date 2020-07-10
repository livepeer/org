import IconHero from "components/layouts/icon-hero"
import { FiPlay } from "react-icons/fi"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import WindowBox from "components/layouts/window-box"
import CodeStoryAnimation from "components/primitives/code-story-animation"
import { AnimatedLineProps } from "components/primitives/code-story-animation/line"

const lines: AnimatedLineProps[] = [
  {
    frames: [{ text: "livepeer -broadcaster -network mainnet", isBold: true }]
  },
  {
    frames: [
      {
        text: "Livepeer is running on the mainnet network"
      }
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true
  },
  {
    frames: [
      {
        text: "Creating data dir:~/.lpData/mainnet"
      }
    ],
    delay: 400,
    prefix: null,
    withoutTextAnimation: true
  },
  {
    frames: [
      {
        text: "No Ethereum account found. Creating a new account."
      }
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true
  },
  {
    frames: [],
    delay: 1000
  }
]

const DevelopersHero = () => (
  <IconHero
    icon={<FiPlay />}
    title="Developers"
    subtitle="Livepeer supports live streaming, video on demand, and transcoding
          across video formats and protocols."
    illustration={
      <IllustratedBackgroundBox
        pushSx={{ height: "282px", mt: "70px", width: "100%" }}
        pushContentSx={{
          p: 0,
          height: "320px",
          boxShadow: "magical",
          mt: "-70px"
        }}
      >
        <WindowBox sx={{ height: "100%" }}>
          <CodeStoryAnimation lines={lines} />
        </WindowBox>
      </IllustratedBackgroundBox>
    }
  />
)

export default DevelopersHero
