import { Link as A, SxStyleProp, Box } from "theme-ui"
import LivepeerLogo from "components/icons/livepeer-logo"

type Props = {
  pushSx?: SxStyleProp
  pushLogoSx?: SxStyleProp
  pushEmailSx?: SxStyleProp
}

const LogoAndEmail = ({ pushSx, pushLogoSx, pushEmailSx }: Props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...pushSx
    }}
  >
    <LivepeerLogo isDark pushSx={{ mr: 4, ...pushLogoSx }} />
    <A
      href="mailto:contact@livepeer.org"
      sx={{
        color: "primary",
        "&:hover": { color: "gradient.to" },
        ...pushEmailSx
      }}
    >
      contact@livepeer.org
    </A>
  </Box>
)

export default LogoAndEmail
