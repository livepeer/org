import { SxStyleProp } from "theme-ui"

type Category = { label: string; value: string }

export type Post = {
  title: string
  subtitle: string
  description?: string
  link: { href: string; asPath?: string; isExternal: boolean }
  category: Category
  image: { src: string; alt?: string }
  pushContentSx?: SxStyleProp
}

const categories: Category[] = [
  {
    label: "Education",
    value: "education"
  },
  {
    label: "Products & Tools",
    value: "products-and-tools"
  },
  {
    label: "Exchange",
    value: "exchange"
  }
]

const posts: Post[] = [
  {
    title: "The Livepeer Whitepaper",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network",
    subtitle: "By Doug Petkanics & Eric Tang",
    link: {
      href: "https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md",
      isExternal: true
    },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-1.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "The Livepeer Streamflow Paper",
    description:
      "Livepeer Scalability on Ethereum through Orchestration, Probabilistic Micropayments, and Offchain Job Negotiation",
    subtitle: "By Doug Petkanics & Yondon Fu",
    link: {
      href: "https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md",
      isExternal: true
    },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-4.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "The Livepeer Primer",
    description:
      "Through storytelling, illustration, and data, the Livepeer Primer explains, at a high level, the problem Livepeer solves, and how it works. ",
    subtitle: "By Adam Soffer & Kellie Pcolar",
    link: { href: "https://livepeer.org/primer/", isExternal: true },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-6.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Telegram Orchestrator Watcher Bot",
    description:
      "A telegram bot for real time notifications about your orchestrator",
    subtitle: "By Livepeer contributor, “vires-in-numeris”",
    link: { href: "https://t.me/OrchestratorWatcherBot", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-7.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Scout Analytics",
    description:
      "A data analytics tool that shows you the current economics of the protocol, such as the amount of token in supply, inflation rate, and more.",
    subtitle: "By Scout",
    link: { href: "https://scout.cool/livepeer/mainnet", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-8.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Hubble",
    subtitle: "By Figment Networks",
    description: "Rewards reporting and alerts for stakers",
    link: {
      href: "https://hubble.figment.network/livepeer/chains/mainnet",
      isExternal: true
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-9.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Livepool",
    subtitle: "By Nico Vergauwen",
    description:
      "The first open transcoding pool built on the Livepeer Network",
    link: { href: "https://www.livepool.io/", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-10.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Orchestrator Price API",
    subtitle: "By Buidl Labs",
    description:
      "An API for fetching off-chain orchestrator pricing information",
    link: {
      href: "https://github.com/buidl-labs/livepeer-pricing-tool",
      isExternal: true
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-11.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "The Livepeer Subgraph",
    subtitle: "By Livepeer Inc.",
    description:
      "Query indexed Livepeer protocol data over GraphQL using the Graph Protocol.",
    link: {
      href: "https://thegraph.com/explorer/subgraph/livepeer/livepeer",
      isExternal: true
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-12.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Uniswap",
    subtitle: "Non-custodial exchange",
    link: {
      href:
        "https://uniswap.exchange/swap/0x58b6a8a3302369daec383334672404ee733ab239",
      isExternal: true
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-13.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Balancer",
    subtitle: "Non-custodial exchange",
    link: { href: "https://balancer.exchange", isExternal: true },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-14.png",
      alt: "Resource cover image"
    }
  },
  {
    title: "Poloniex",
    subtitle: "Custodial exchange (Asia only)",
    link: { href: "https://poloniex.com/exchange#btc_lpt", isExternal: true },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-15.png",
      alt: "Resource cover image"
    }
  }
]

export default posts
export { categories }
