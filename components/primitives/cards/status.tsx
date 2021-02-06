/** @jsx jsx */
import { jsx, Card, Heading, Text, Box, SxStyleProp } from "theme-ui";
import StatusLink, { StatusLinkProps } from "../links/status";
import Link from "next/link";
import { useMemo } from "react";

export type StatusCardProps = {
  title: React.ReactNode;
  description: string;
  linkProps: StatusLinkProps;
  isDark?: boolean;
  pushSx?: SxStyleProp;
  className?: string;
  isClickable?: boolean;
};

const StatusCard = ({
  title,
  description,
  linkProps,
  isDark = false,
  pushSx,
  className,
  isClickable,
}: StatusCardProps) => {
  const hoverSx = useMemo(
    () => ({
      transition: "box-shadow .2s, color .2s, background .2s",
      ".status-card-link": {
        transition: "color .2s",
      },
      ".status-card-link .status_container": {
        transition: "color .2s",
        circle: {
          transition: "fill .2s",
        },
      },
      "&:hover": {
        boxShadow: "0px 80px 96px rgba(0, 0, 0, 0.32)",
        bg: isDark ? "background" : "text",
        color: isDark ? "text" : "background",
        ".status-card-link": {
          color: isDark ? "secondary" : "primary",
          ".status_container": {
            color: isDark ? "text" : "background",
            circle: {
              fill: isDark ? "secondary" : "primary",
            },
          },
          "&:hover": {
            color: isDark ? "secondary" : "primary",
          },
        },
        ".title": {
          color: isDark ? "text" : "background",
        },
      },
    }),
    [isDark]
  );

  const markup = (
    <Card
      sx={{
        bg: isDark ? "text" : "background",
        color: isDark ? "background" : "text",
        borderColor: isDark ? "transparent" : undefined,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "unset",
        ...(isClickable ? hoverSx : {}),
        ...pushSx,
      }}
      className={isClickable ? undefined : className}>
      <Box>
        <Heading
          variant="heading.5"
          sx={{
            textAlign: "left",
            my: 3,
            transition: "color .2s",
            color: isDark ? "background" : "text",
          }}
          className="title">
          {title}
        </Heading>
        <Text variant="normal">{description}</Text>
      </Box>
      <StatusLink
        as={isClickable ? "div" : "a"}
        isDark={isDark}
        {...linkProps}
        className="status-card-link"
      />
    </Card>
  );

  if (!isClickable) return markup;
  if (linkProps.link.isExternal) {
    return (
      <a
        href={linkProps.link.href}
        className={isClickable ? className : undefined}
        target="_blank">
        {markup}
      </a>
    );
  }
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath} passHref>
      <a className={isClickable ? className : undefined}>{markup}</a>
    </Link>
  );
};

export default StatusCard;
