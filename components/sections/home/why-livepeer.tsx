import React from "react";
import SectionLayout from "components/layouts/section";
import { useTranslation } from "next-i18next";
import { Grid, Box, Flex, Heading, Text } from "theme-ui";
import {
  MdPublic,
  MdAttachMoney,
  MdElectricBolt,
  MdAnchor,
  MdAllInclusive,
  MdAutoFixHigh,
} from "react-icons/md";

type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const Value = ({ title, description, icon }: Props) => (
  <Box sx={{ width: "374px" }}>
    <Flex
      sx={{
        height: "auto",
        mx: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: "md",
      }}>
      <Flex
        sx={{
          borderRadius: 1000,
          bg: "text",
          width: "64px",
          height: "64px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 3,
          color: "white",
          fontSize: "24px",
        }}>
        {icon}
      </Flex>
      <Heading
        variant="heading.5"
        sx={{
          color: "text",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          marginBottom: 3,
        }}>
        {title}
      </Heading>
      <Text
        sx={{
          textAlign: "center",
          color: "text",
          lineHeight: 1.7,
        }}>
        {description}
      </Text>
    </Flex>
  </Box>
);

const WhyLivepeer = ({ title, subtitle, label }) => {
  const values = [
    {
      title: "Open",
      description:
        "The Livepeer Network is open. Build with a hosted gateway service or self-host. There is no vendor lock-in. ",
      icon: <MdPublic />,
    },
    {
      title: "Affordable",
      description:
        "Cut down on costs by tapping into the network’s competitive marketplace of infrastructure providers representing access to 70k+ GPUs.",
      icon: <MdAttachMoney />,
    },
    {
      title: "Performant",
      description:
        "Deliver outstanding performance by leveraging the network's highly competitive infrastructure providers transmitting high-quality video at astonishing speeds.",
      icon: <MdElectricBolt />,
    },
    {
      title: "Reliable",
      description:
        "Keep your application’s video streams flowing 24/7 with the world’s most resilient and decentralized video infrastructure network.",
      icon: <MdAnchor />,
    },
    {
      title: "Scalable",
      description:
        "Livepeer Protocol harnesses the power of cryptoeconomic incentives, drawing a worldwide network of independent providers to process and deliver video, enabling near-infinite scalability.",
      icon: <MdAllInclusive />,
    },
    {
      title: "Easy-to-use",
      description:
        "The Livepeer API untangles the intricate web of video infrastructure workflows, offering developers one unified and intuitive API that can fulfill all video application requirements.",
      icon: <MdAutoFixHigh />,
    },
  ];
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      titleLabel={label}
      pushSx={{ pb: 100 }}>
      <Grid
        columns={[
          null,
          null,
          "repeat(2, fit-content(260px))",
          "repeat(2, fit-content(260px))",
          "repeat(3, fit-content(260px))",
        ]}
        gap={["100px", null, null, "60px"]}
        sx={{
          mx: "auto",
          width: "100%",
          left: [-3, null, null, 0],
          px: [4, null, null, 0],
          position: "relative",
          justifyContent: "center",
        }}>
        {values.map((value, i) => (
          <Value
            key={`value-${i}`}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default WhyLivepeer;
