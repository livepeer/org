import Link from "next/link";
import { ReactNode } from "react";
import { Box, Flex, Text, Button } from "@livepeer/design-system";

export type PricingCardProps = {
  pricingTitle: string;
  titleColor?: string;
  bc: string;
  pricingDescription: ReactNode | string;
  btn: { href: string; display: string; bc?: string; color?: string };
  children: ReactNode;
  className?: string;
  color?: string;
};

export type PricingCardContentProps = {
  children?: ReactNode;
};

export const PricingCardContent = ({ children }: PricingCardContentProps) => {
  return (
    <Box
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: 76,
        py: "$3",
        justifyContent: "center",
        borderTop: `1px solid`,
        borderColor: "rgba(255,255,255, .45)",
        color: "$hiContrast",
      }}>
      {children}
    </Box>
  );
};

const PricingCard = ({
  pricingTitle,
  bc,
  pricingDescription,
  btn,
  children,
  color = "$hiContrast",
}: PricingCardProps) => {
  return (
    <Box
      css={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        px: "16px",
        pt: "$5",
        pb: "$7",
        borderRadius: "16px",
        bc: bc,
        textAlign: "center",
      }}>
      <Flex direction="column">
        <Text
          size="7"
          css={{
            fontWeight: 600,
            color,
          }}>
          {pricingTitle}
        </Text>
        <Text
          size="3"
          css={{
            mb: "$4",
            color,
            fontSize: "$3",
          }}>
          {pricingDescription}
        </Text>
        <Link href={btn.href} passHref>
          <Button
            size={3}
            as="a"
            target="_blank"
            arrow
            css={{
              background: btn.bc,
              color: btn.color,
              fontSize: "$3",
              fontWeight: 500,
              "&:hover": {
                boxShadow: "none",
                background: btn.bc,
                color: btn.color,
              },
            }}>
            {btn.display}
          </Button>
        </Link>
      </Flex>
      <Box css={{ display: "flex", flexDirection: "column" }}>{children}</Box>
    </Box>
  );
};

export default PricingCard;
