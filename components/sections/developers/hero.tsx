import IconHero from "components/layouts/icon-hero"
import { FiPlay } from "react-icons/fi"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import CodeStoryAnimation from "components/primitives/code-story-animation"
import { AnimatedLineProps } from "components/primitives/code-story-animation/line"
import CodeEditorBox from "components/layouts/code-editor-box"

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
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "Creating data dir:~/.lpData/mainnet"
      }
    ],
    delay: 400,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "No Ethereum account found."
      }
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "Creating new account."
      }
    ],
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: null,
    delay: 800
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
        pushSx={{ height: ["360px", "282px"], mt: "48px", width: "100%" }}
        pushContentSx={{
          p: 0,
          height: ["376px", "298px"],
          boxShadow: "magical",
          mt: "-48px"
        }}
      >
        <CodeEditorBox
          tabs={[{ label: "bash", isSelected: true }]}
          sx={{ height: "100%" }}
        >
          <CodeStoryAnimation lines={lines} />
        </CodeEditorBox>
      </IllustratedBackgroundBox>
    }
  />
)

export default DevelopersHero
