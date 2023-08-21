import React from "react";
import SectionLayout from "components/layouts/section";
import {
  Grid,
  Box,
  Flex,
  Heading,
  Text,
  Link as A,
  SxStyleProp,
} from "theme-ui";
import {
  MdPublic,
  MdAttachMoney,
  MdElectricBolt,
  MdAllInclusive,
  MdSentimentSatisfied,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import Link from "next/link";

type ValueProps = {
  title: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
  width?: number | string;
};

const Value = ({ title, description, icon, width = 374 }: ValueProps) => (
  <Box sx={{ width: width }}>
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

type Props = {
  title: string;
  subtitle?: string | React.ReactNode;
  label?: string;
  width?: number | string;
  pushSx?: SxStyleProp;
};

const WhyLivepeer = ({
  title,
  subtitle,
  label,
  width = 374,
  pushSx,
}: Props) => {
  const values = [
    {
      title: "Open",
      description:
        "Livepeer is open source software. Customize Livepeer to your needs and benefit from global innovation.",
      icon: <MdPublic />,
    },
    {
      title: "Affordable",
      description: (
        <Box>
          Save up to 90% on costs with{" "}
          <Link href="/pricing" passHref>
            <A variant="secondary">streamlined pricing</A>
          </Link>{" "}
          that takes advantage of Livepeer's open marketplace of infrastructure
          providers representing access to 70k+ GPUs.
        </Box>
      ),
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
      icon: <MdOutlineVerifiedUser />,
    },
    {
      title: "Scalable",
      description:
        "Livepeer harnesses the power of cryptoeconomic incentives, drawing a worldwide network of independent providers to process and deliver video, enabling near-infinite scalability.",
      icon: <MdAllInclusive />,
    },
    {
      title: "Easy-to-use",
      description:
        "The Livepeer API untangles the intricate web of video infrastructure workflows, offering developers one unified and intuitive API that can fulfill all video application requirements.",
      icon: <MdSentimentSatisfied />,
    },
  ];
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      titleLabel={label}
      pushSx={{ pb: 80, ...pushSx }}>
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
            width={width}
          />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default WhyLivepeer;
