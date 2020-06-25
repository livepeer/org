import Layout from "components/Layout"
import Spacer from "components/Spacer"

import styles from "./home.module.css"
import { Button, Text } from "@livepeer/ui"

const Home = () => {
  return (
    <Layout>
      <Spacer y={24} />
      <section className={styles.inner}>
        <Text variant="h1" as="h1">
          The <span className="gradient-text">World's Open</span> Video
          Infrastructure
        </Text>
        <Spacer y={8} />
        <Text variant="h5" as="h5">
          Livepeer supports live streaming, video on demand, and transcoding
          <br />
          across video formats and protocols.
        </Text>
        <Spacer y={8} />
        <Button variant="primary">Get Started</Button>
      </section>
      <Spacer y={24} />
      <section className={styles.illustration}>
        <p>illustration</p>
      </section>
      <Spacer y={3} />
      <section className={styles.inner}>
        <Text variant="large" as="p">
          Subtitle
        </Text>
        <Text variant="h2" as="h2">
          Let Livepeer do <br /> your video’s work
        </Text>
        <Spacer y={0.25} />
        <Text variant="h5" as="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Spacer />
      </section>
      <section className={styles.inner}>
        <Text variant="large" as="p">
          Subtitle
        </Text>
        <Text variant="h2" as="h2">
          Livepeer by the numbers
        </Text>
        <Spacer y={0.25} />
        <Text variant="h5" as="h5">
          We’re proud of the numbers and worked hard to get here. <br />{" "}
          Celebrate with us.
        </Text>
        <Spacer />
      </section>
      <section className={styles.inner}>
        <Text variant="large" as="p">
          Subtitle
        </Text>
        <Text variant="h2" as="h2">
          Community
        </Text>
        <Spacer y={0.25} />
        <Text variant="h5" as="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Spacer />
      </section>
    </Layout>
  )
}

export default Home
