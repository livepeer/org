import { Flex, Avatar, Text, Box, Link as A } from "theme-ui"
import { FiGithub } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

export type MaintainerProps = {
  name: string
  position: string
  avatar: { src: string; alt?: string }
  githubHref: string
}

const Maintainer = ({
  name,
  position,
  avatar,
  githubHref
}: MaintainerProps) => (
  <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
    <Flex sx={{ alignItems: "flex-start" }}>
      <Avatar
        {...avatar}
        sx={{
          width: 8,
          height: 8,
          objectFit: "cover",
          borderRadius: "full",
          mr: 3
        }}
      />
      <Box>
        <Text variant="normal" sx={{ color: "text" }}>
          {name}
        </Text>
        <Text variant="normal" sx={{ color: "lightGray" }}>
          {position}
        </Text>
      </Box>
    </Flex>
    <A href={githubHref} sx={{ fontSize: 5 }}>
      <FaGithub />
    </A>
  </Flex>
)

export default Maintainer
