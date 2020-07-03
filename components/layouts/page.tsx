import Head, { HeadProps } from "components/primitives/head"
import Nav from "components/sections/nav"
import { Box, SxStyleProp } from "theme-ui"
import Footer from "components/sections/footer"

type Props = {
  headProps?: HeadProps
  isDark?: boolean
  pushContentSx?: SxStyleProp
}

const PageLayout: React.FC<Props> = ({
  children,
  headProps,
  isDark,
  pushContentSx
}) => (
  <>
    <Head {...headProps} />
    <Nav isDark={isDark} />
    <Box
      as="main"
      sx={{ position: "relative", overflow: "hidden", ...pushContentSx }}
    >
      {children}
    </Box>
    <Footer isDark={isDark} />
  </>
)

export default PageLayout
