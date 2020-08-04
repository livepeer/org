import HomeHero from "components/sections/home/hero"
import ByTheNumbersSection from "components/sections/home/by-the-numbers"
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do"
import PrimerBanner from "components/sections/home/primer-banner"
import CommunitySection from "components/sections/home/community"
import PageLayout from "components/layouts/page"
import { useEffect } from "react"
import HaveACallSection from "components/sections/participants/have-a-call"
import { getTotalActiveStake } from "lib/document-helpers"

const HomePage = ({ youtubeVideos, totalActiveStake }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "initial"
    }
  }, [])

  return (
    <PageLayout
      navProps={{ isInmersive: true }}
      pushContentSx={{ marginTop: "-72px" }}
    >
      <HomeHero />
      <LetLivepeerDoSection />
      <PrimerBanner />
      <ByTheNumbersSection totalActiveStake={totalActiveStake} />
      <CommunitySection />
      <HaveACallSection youtubeVideos={youtubeVideos} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLkw6hm1fcjtEo9HydrGKP2R_NHhSu1Mpl&key=${process.env.YOUTUBE_API_KEY}`
  )

  const youtubeData = await response.json()

  const totalActiveStake = await getTotalActiveStake()

  return {
    props: {
      youtubeVideos: youtubeData.items,
      totalActiveStake: totalActiveStake / 10e17
    },
    revalidate: 1
  }
}

export default HomePage
