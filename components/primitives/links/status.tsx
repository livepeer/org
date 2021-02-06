/** @jsx jsx */
import { jsx, Text, Link as A } from "theme-ui";
import { useMemo, ElementType } from "react";
import { LinkProps } from "lib/types/link-props";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export type StatusLinkProps = {
  link: LinkProps;
  status: string;
  isDark?: boolean;
  as?: ElementType<any>;
  className?: string;
};

const StatusLink = ({
  as = "a",
  link,
  status,
  isDark,
  className,
}: StatusLinkProps) => {
  const linkChildren = useMemo(
    () => (
      <>
        <Text
          sx={{
            variant: "layout.flexCenter",
            fontWeight: 400,
            color: isDark ? "background" : "text",
          }}
          className="status_container">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ mr: 2 }}>
            <circle
              cx="6"
              cy="6"
              r="6"
              sx={{ fill: isDark ? "primary" : "secondary" }}
            />
          </svg>
          {status}
        </Text>
        <Text sx={{ variant: "layout.flexCenter" }}>
          {link.label}
          <FiArrowUpRight size="22px" />
        </Text>
      </>
    ),
    [link, isDark]
  );

  const linkSx = useMemo(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    [isDark]
  );

  if (link.isExternal) {
    return (
      <A
        variant="accent"
        data-dark={isDark}
        href={link.href}
        target="_blank"
        sx={linkSx}
        as={as}
        className={className}>
        {linkChildren}
      </A>
    );
  }
  return (
    <Link href={link.href} as={link.asPath} passHref>
      <A
        variant="accent"
        data-dark={isDark}
        sx={linkSx}
        as={as}
        className={className}>
        {linkChildren}
      </A>
    </Link>
  );
};

export default StatusLink;
