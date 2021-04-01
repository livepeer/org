/** @jsx jsx */
import { jsx, Box, Text, Flex, Link as A } from "theme-ui";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export type FooterListProps = {
  title: string;
  items: {
    label: string;
    href: string;
    asPath?: string;
    isExternal?: boolean;
    download?: boolean;
  }[];
};

const FooterList = ({ title, items }: FooterListProps) => (
  <Box>
    <Text
      sx={{
        fontWeight: 600,
        mb: "24px",
        textAlign: ["center", null, null, "left"],
      }}>
      {title}
    </Text>
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: ["center", null, null, "flex-start"],
        "a:not(:last-of-type)": {
          mb: 2,
        },
      }}>
      {items.map((item) =>
        item.isExternal ? (
          <A
            key={`footer-list-link-${title}-${item.label}`}
            href={item.href}
            sx={{
              width: "fit-content",
              textAlign: ["center", null, null, "left"],
              display: "inline-flex",
              alignItems: "center",
            }}
            target="_blank"
            rel="noopener"
            data-dark>
            {item.label}
            <i sx={{ variant: "layout.flexCenter", ml: 1 }}>
              <FiArrowUpRight />
            </i>
          </A>
        ) : (
          <Link
            key={`footer-list-link-${title}-${item.label}`}
            href={item.href}
            as={item.asPath}
            passHref>
            <A
              sx={{
                width: "fit-content",
                textAlign: ["center", null, null, "left"],
              }}
              download={item.download ? item.download : false}
              data-dark>
              {item.label}
            </A>
          </Link>
        )
      )}
    </Flex>
  </Box>
);

export default FooterList;
