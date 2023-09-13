import { Link as A, SxStyleProp, Box } from "theme-ui";
import LivepeerLogo from "components/svgs/livepeer-logo";

type Props = {
  pushSx?: SxStyleProp;
  pushLogoSx?: SxStyleProp;
  pushEmailSx?: SxStyleProp;
  id?: string;
};

const LogoAndEmail = ({ pushSx, pushLogoSx, pushEmailSx, id }: Props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...pushSx,
    }}>
    <Box css={{ width: 140 }}>
      <LivepeerLogo isDark pushSx={{ mr: 4, ...pushLogoSx }} id={id} />
    </Box>
    <A
      href="mailto:contact@livepeer.org"
      sx={{
        ml: 3,
        color: "#4cc38a",
        "&:hover": { color: "gradient.to" },
        ...pushEmailSx,
      }}>
      contact@livepeer.org
    </A>
  </Box>
);

export default LogoAndEmail;
