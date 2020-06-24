// import { jsx, Styled } from "theme-ui"
// import { Card, Input, Box, Container } from "@livepeer/ui"

import Layout from "components/Layout"
import Spacer from "components/Spacer"

import styles from "./home.module.css"
import { Button, Text } from "@livepeer/ui"

const Home = () => {
  return (
    <Layout>
      <Spacer padding />
      <section className={styles.inner}>
        <Text variant="h1" as="h1">
          The <span className="gradient">World's Open</span> Video
          Infrastructure
        </Text>
        <Spacer padding y={0.25} />
        <Text variant="h5" as="h5">
          Livepeer supports live streaming, video on demand, and transcoding
          <br />
          across video formats and protocols.
        </Text>
        <Spacer padding y={0.5} />
        <Button variant="primary">Get Started</Button>
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
