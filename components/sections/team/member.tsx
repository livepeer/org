import { Box, Flex, Heading, Link } from "@theme-ui/components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../lib/client";
import { FaTwitter, FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const TeamMember = ({
  fullname,
  image,
  role,
  twitter,
  github,
  linkedin,
  medium,
  ...props
}) => {
  const builder = imageUrlBuilder(client as any);

  return (
    <Box
      sx={{
        textAlign: "center",
        borderRadius: 24,
        border: "1px solid #F5F5F5",
        p: 40,
        bg: "background",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "box-shadow .15s",
        flex: ["1 1 100%", "1 1 50%", "1 1 25%"],
        "&:hover": {
          boxShadow:
            "0px 2px 1px rgba(0, 0, 0, 0.04), 0px 16px 40px rgba(0, 0, 0, 0.04)",
        },
      }}
      {...props}>
      <Box>
        <Box
          sx={{
            ".team-member": {
              borderRadius: 1000,
              width: 130,
              height: 130,
              objectFit: "cover",
              m: "0 auto 8px",
            },
          }}>
          <Image
            className="team-member"
            layout="fixed"
            width={130}
            height={130}
            src={builder.image(image).url()}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Heading
            as="h3"
            sx={{
              mb: 2,
              mt: 3,
              fontWeight: 500,
              fontSize: "20px",
            }}>
            {fullname}
          </Heading>
          <Box sx={{ fontSize: 2, color: "gray" }}>{role}</Box>
        </Box>
      </Box>
      <Flex
        sx={{
          maxWidth: 120,
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {twitter && (
          <Link
            sx={{
              "&:not(:last-of-type)": { mr: 3 },
              color: "black",
              fontSize: 3,
              transition: "color .15s",
              "&:hover": { color: "primary" },
            }}
            href={twitter}
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </Link>
        )}
        {linkedin && (
          <Link
            sx={{
              "&:not(:last-of-type)": { mr: 3 },
              color: "black",
              fontSize: 3,
              transition: "color .15s",
              "&:hover": { color: "primary" },
            }}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        )}
        {medium && (
          <Link
            sx={{
              "&:not(:last-of-type)": { mr: 3 },
              color: "black",
              fontSize: 3,
              transition: "color .15s",
              "&:hover": { color: "primary" },
            }}
            href={medium}
            target="_blank"
            rel="noopener noreferrer">
            <FaMedium />
          </Link>
        )}
        {github && (
          <Link
            sx={{
              "&:not(:last-of-type)": { mr: 3 },
              color: "black",
              fontSize: 3,
              transition: "color .15s",
              "&:hover": { color: "primary" },
            }}
            href={github}
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default TeamMember;
