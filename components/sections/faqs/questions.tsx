/** @jsx jsx */
import { jsx, Link as A, Text } from "theme-ui"

type Category = { label: string; value: string }

export type Question = {
  question: string
  answer: React.ReactNode
  category: Category
}

const categories: Category[] = [
  {
    label: "General",
    value: "general"
  },
  {
    label: "Developers",
    value: "developers"
  },
  {
    label: "Tokenholders",
    value: "tokenholders"
  },
  {
    label: "Infrastructure Operators",
    value: "infrastructure"
  },
  {
    label: "Lexicon",
    value: "lexicon"
  }
]

const questions: Question[] = [
  {
    question: "I am new to Livepeer. Where is the best place to start?",
    answer: (
      <>
        The{" "}
        <A href="https://primer.livepeer.org/" target="_blank">
          Livepeer 10-minute Primer
        </A>{" "}
        serves as a great starting point.
      </>
    ),
    category: categories[0]
  },
  {
    question: "Who is Livepeer Inc.?",
    answer:
      // TODO
      "Livepeer Inc. is the legal entity and core team shepherding the protocol and moving it along its path towards decentralization.",
    category: categories[0]
  },
  // TODO
  {
    question: "Does Livepeer have a roadmap?",
    answer:
      "Albeit slightly out of date, you can read about the philosophical phases of the Livepeer roadmap here.",
    category: categories[0]
  },
  // TODO
  {
    question: "What is the current implementation Livepeer team is working on?",
    answer: "It is called “Streamflow” and you can read about it here.",
    category: categories[0]
  },
  // TODO
  {
    question: "Where can I find Livepeer whitepaper?",
    answer: "You can find whitepaper here and the Streamflow paper here.",
    category: categories[0]
  },
  // TODO
  {
    question:
      "I’m a developer and want to contribute to Livepeer. Where can I find some tools/resources?",
    answer: (
      <>
        <Text mb={3}>
          The best way to get started is to join the discussion in the Discord
          Developer Chat. Other helpful links for discovering development
          opportunities:
        </Text>
        <ul>
          <li>
            <A
              variant="coloured"
              href="https://livepeer.readthedocs.io/en/latest/developers.html"
              sx={{ fontWeight: 400 }}
            >
              https://livepeer.readthedocs.io/en/latest/developers.html
            </A>
          </li>
          <li>
            <A
              variant="coloured"
              href="https://github.com/Livepeer-Community-Node/Grant-Program"
              sx={{ fontWeight: 400 }}
            >
              https://github.com/Livepeer-Community-Node/Grant-Program
            </A>
          </li>
          <li>
            <A
              variant="coloured"
              href="https://github.com/livepeer"
              sx={{ fontWeight: 400 }}
            >
              https://github.com/livepeer
            </A>
          </li>
        </ul>
      </>
    ),
    category: categories[1]
  },
  {
    question:
      "I’d like to use Livepeer for my video application. Should I use the Livepeer public network or Livepeer.com’s hosted gateway API?",
    answer: "to-do",
    category: categories[1]
  },
  {
    question: "How was Livepeer token distributed? Was there an ICO?",
    answer: (
      <>No ICO. Details regarding the token distribution can be found here.</>
    ),
    category: categories[2]
  },
  {
    question: "How do I stake my LPT?",
    answer: <>Follow the staking guide in the Livepeer Protocol Explorer.</>,
    category: categories[2]
  },
  {
    question:
      "What is the contract address for adding LPT to Metamask or MyCrypto?",
    answer: "0x58b6a8a3302369daec383334672404ee733ab239",
    category: categories[2]
  },
  {
    question:
      "How do I evaluate which orchestrator I should stake my LPT towards?",
    answer:
      "It's your job as a tokenholder to research orchestrators based upon their past performance, statistics, rates they are charging, and any social campaigns that they’ve posted indicating why they believe they will do a good job for the network.",
    category: categories[2]
  },
  {
    question: "How long do I need to wait for unstaking/withdrawing my tokens?",
    answer:
      "Once you click on Unstake, it takes seven days for your LPT to unstake at which point your tokens will be ready for you to withdraw into your own wallet.",
    category: categories[2]
  },
  {
    question: "Can I stake to multiple orchestrators?",
    answer: "Yes, but not from the same ETH account.",
    category: categories[2]
  },
  {
    question: "I want to become an orchestrator. How do I do that?",
    answer: "Follow this guide.",
    category: categories[3]
  },
  {
    question: "Why am I not receiving any fees?",
    answer: (
      <>
        Don’t set your price per pixel setting too high Don’t set your price per
        pixel setting too low Make sure you’re transcoding in “sub real-time”.
        Check the docs to test your own transcoding setup. Turn on logging to a
        more verbose level to debug this (-v 10).
      </>
    ),
    category: categories[3]
  },
  {
    question: "How much should I charge per pixel?",
    answer: (
      <>
        The price you should set should be based on the max price broadcasters
        are willing to pay. For example, Livepeer Inc’s broadcasters have a max
        price set at 3k wei per pixel which comes out to around 40 cents per
        hour per stream for its customers so if you want to win this work set
        your price at or below 3k wei per pixel.
      </>
    ),
    category: categories[3]
  },
  {
    question: "How can I optimize my ROI?",
    answer: (
      <>
        Check out this financial model open sourced by Chris Remus and Gleb
        Dudka.
      </>
    ),
    category: categories[3]
  },
  {
    question:
      "Where can I find what other registered orchestrators are charging to optimize my price settings?",
    answer: (
      <>
        This information is exposed in the Livepeer Protocol Explorer on the
        orchestrators page under the “price” column.
      </>
    ),
    category: categories[3]
  },
  {
    question:
      "How are Orchestrators picked right now? How does the orchestrator selection algorithm work?",
    answer: (
      <>
        A high level overview of the orchestrator selection algorithm can be
        found on YouTube here.
      </>
    ),
    category: categories[3]
  },
  {
    question: "Staking (Bonding)",
    answer: (
      <>
        The act of “locking” your Livepeer token within the Livepeer protocol
        smart contracts on the Ethereum blockchain in exchange for the right to
        perform work on the network and earn inflationary token and broadcaster
        fees in return. Similar to a performance bond, tokens at stake provide
        security for developers using the network that work will be performed
        honestly, correctly and competitively.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Livepeer Protocol",
    answer: (
      <>
        The code that dictates all of the rules of using and interacting with
        Livepeer. Implemented as a set of smart contracts that run on the
        Ethereum blockchain.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Segment",
    answer: (
      <>
        A video segment (or chunk) is a fragment of video information that is a
        collection of video frames. Combined together, these segments make up a
        whole video.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Transcoding",
    answer: (
      <>
        The process of taking a raw video file and reformatting it so that no
        matter bandwidth you have - whether 2g or 5g - and no matter what
        device, you're ensured the most optimal viewing experience.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Rendition",
    answer: (
      <>
        The resulting compressed version of the video file after it's been
        transcoded.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Delegator",
    answer: (
      <>
        A Livepeer tokenholder that stakes with an orchestrator on the network,
        in effect delegating the role of performing transcoding video in
        exchange for a cut of its rewards and fees.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Broadcaster",
    answer: (
      <>
        A Livepeer actor sending video streams into the network for transcoding.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Orchestrator",
    answer: (
      <>
        A smart, 24/7 connected, Livepeer aware actor (human + piece of
        software), that negotiates with broadcasters, and represents that
        they’re going to do the work correctly.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Transcoder",
    answer: (
      <>
        Dumb hardware that just knows how to encode video. (A GPU or CPU).
        Orchestrators pass video to transcoders and they encode and send it
        back.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Node",
    answer: (
      <>
        Livepeer client software. Currently there exists a single client
        implementation written in Go called go-livepeer which can be run in
        broadcaster mode, transcoder mode, or orchestrator mode.
      </>
    ),
    category: categories[4]
  },
  {
    question: "Livepeer Token (LPT)",
    answer: (
      <>
        In the Livepeer protocol, Livepeer Token (LPT) is required to perform
        the work of transcoding and distributing video on the network. Its
        purpose is to coordinate, bootstrap, and incentivize participants to
        make sure the Livepeer network is as cheap, effective, secure, reliable
        and useful as possible.
      </>
    ),
    category: categories[4]
  }
]

export default questions
export { categories }
