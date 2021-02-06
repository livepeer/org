/** @jsx jsx */
import { jsx, Link as A, SxStyleProp } from "theme-ui";
import Link from "next/link";
import { LinkProps } from "lib/types/link-props";

export type IconLinkProps = LinkProps & {
  icon: React.ReactNode;
  pushSx?: SxStyleProp;
};

const sx: SxStyleProp = {
  display: "flex",
  alignItems: "center",
  variant: "text.normal",
  px: 4,
  py: 3,
  width: "fit-content",
  transition: "box-shadow .2s",
  color: "text",
  "&:hover": { boxShadow: "magical", color: "text" },
};

const IconLink = ({
  icon,
  label,
  href,
  asPath,
  isExternal = false,
  pushSx,
}: IconLinkProps) =>
  isExternal ? (
    <A
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ ...sx, ...pushSx }}
      className="c-animate">
      <i sx={{ fontSize: 6, mr: 2 }}>{icon}</i>
      {label}
    </A>
  ) : (
    <Link href={href} as={asPath} passHref>
      <A sx={{ ...sx, ...pushSx }} className="c-animate">
        <i sx={{ fontSize: 6, mr: 2 }}>{icon}</i>
        {label}
      </A>
    </Link>
  );

export default IconLink;
