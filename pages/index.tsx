import HomeHero from "components/sections/home/hero"
import ByTheNumbersSection from "components/sections/home/by-the-numbers"
import LetLivepeerDoSection from "components/sections/home/let-livepeer-do"
import PrimerBanner from "components/sections/home/primer-banner"
import CommunitySection from "components/sections/home/community"
import PageLayout from "components/layouts/page"
import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "initial"
    }
  }, [])

  return (
    <PageLayout
      navProps={{ background: "muted", isInmersive: true }}
      pushContentSx={{ marginTop: "-72px" }}
    >
      <HomeHero />
      <LetLivepeerDoSection />
      <PrimerBanner />
      <ByTheNumbersSection />
      <CommunitySection />
    </PageLayout>
  )
}

export default HomePage
