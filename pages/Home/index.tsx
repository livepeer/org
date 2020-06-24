// import { jsx, Styled } from "theme-ui"
// import { Card, Input, Box, Container } from "@livepeer/ui"

import Layout from "components/Layout"
import Spacer from "components/Spacer"

import styles from "./home.module.css"

const Home = () => {
  return (
    <Layout>
      <Spacer padding />
      <section className={styles.inner}>
        <h1>
          The <span className="gradient">World's Open</span> Video
          Infrastructure
        </h1>
        <Spacer padding y={0.25} />
        <h5>
          Livepeer supports live streaming, video on demand, and transcoding{" "}
          <br />
          across video formats and protocols.
        </h5>
        <Spacer padding y={0.5} />
        <button>Get Started</button>
      </section>
      <Spacer padding />
      <section className={styles.illustration}>
        <p>illustration</p>
      </section>
      <Spacer padding y={3} />
      <section className={styles.inner}>
        <h6>Subtitle</h6>
        <Spacer padding y={0.25} />
        <h2>
          Let Livepeer do <br /> your video’s work
        </h2>
        <Spacer padding y={0.25} />
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <Spacer padding />
      </section>
      <section className={styles.inner}>
        <h6>Subtitle</h6>
        <Spacer padding y={0.25} />
        <h2>Livepeer by the numbers</h2>
        <Spacer padding y={0.25} />
        <h5>
          We’re proud of the numbers and worked hard to get here. <br />{" "}
          Celebrate with us.
        </h5>
        <Spacer padding />
      </section>
      <section className={styles.inner}>
        <h6>Subtitle</h6>
        <Spacer padding y={0.25} />
        <h2>Community</h2>
        <Spacer padding y={0.25} />
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <Spacer padding />
      </section>
    </Layout>
  )
}

export default Home
