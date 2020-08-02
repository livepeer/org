/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  PieChart,
  TranscodingIn,
  TranscodingOut,
  TranscoderRunning,
  Scissors
} from "./styles"

const threshold = [0.1]

const Introduction = ({ onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <div ref={ref}>
      <Container>
        <Section1>
          <PieChart src="/images/primer/pie-chart.svg" />
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-bottom: 0;
              },
            `}
          >
            <h3 className="primer__heading">
              Today, 80% of all internet bandwidth is consumed by video
              streaming.
            </h3>
            <p>
              It’s easy to understand why: video is engaging, educational,
              illuminating, and empowering 💪.
            </p>
          </div>
        </Section1>
        <Section2>
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                min-width: 340px;
                margin-right: 120px;
                margin-bottom: 0;
              },
            `}
          >
            <p>
              But, for companies, video is insanely expensive to stream — and
              even more expensive to live stream.
            </p>
            <p>
              Why? Because broadcasters who want to distribute video on the
              internet need to first transcode it.
            </p>
          </div>
          <TranscodingIn src="/images/primer/transcoding-in.svg" />
        </Section2>
        <Section3>
          <TranscodingOut src="/images/primer/transcoder-pickup.svg" />
          <div
            css={css`
              @media (min-width: 1024px) {
                margin-top: 0;
                max-width: 330px;
                margin-right: 40px;
                margin-bottom: 0;
              },
            `}
          >
            <p>
              Transcoding is the process of taking a raw video file and
              reformatting it so that no matter what bandwidth you have -
              whether 2g or 5g - and no matter what device, you're ensured the
              most optimal viewing experience.
            </p>
          </div>
        </Section3>
        <Section4>
          <div
            css={css`
              @media (min-width: 1024px) {
                max-width: 420px;
                margin-top: 136px;
              },
            `}
          >
            <p>
              Today, this process costs around $3 per stream per hour to a cloud
              service such as Amazon, up to $4500 per month for one media
              server, and up to $1500 per month before bandwidth for a content
              delivery network. That's a lot!
            </p>
          </div>
          <TranscoderRunning src="/images/primer/transcoder-running.svg" />
        </Section4>
        <Section5>
          <Scissors src="/images/primer/scissors.svg" />
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-top: 80px;
                margin-bottom: 0;
              }
            `}
          >
            <p>
              Due to such high infrastructure costs, it's become commonplace for
              aspiring social video startups to find initial success upon
              launch, adding hundreds of thousands of users in a single month,
              only to end up with multi-million dollar streaming bills that
              drain their funding prior to finding a working business model. As
              a result, startups are forced to tax their users by selling their
              data, bombard them with ads, or shut down operations completely.
            </p>
            <p>
              Demand for video services is increasing exponentially on the
              infrastructure side with the arrival of 4k video, ultra-HD, VR
              streaming, and all the cord-cutting that's moving broadcasts off
              of the traditional broadcast pipes and on to the internet. 
            </p>
          </div>
        </Section5>
        <Section6>
          <div>
            <p>
              Video infrastructure needs a more scalable and cost-effective
              solution to keep up with this growth.
            </p>
          </div>
        </Section6>
      </Container>
    </div>
  )
}

export default Introduction
