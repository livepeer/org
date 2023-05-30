import Link from "next/link";
import { ReactNode } from "react";
import { Box, Flex, Text, Button } from "@livepeer/design-system";

export type PricingCardProps = {
  pricingTitle: string;
  titleColor?: string;
  cardBg: string;
  pricingDescription: string;
  btn: { href: string; display: string; bg?: string; color?: string };
  children: ReactNode;
  className?: string;
  color?: string;
};

export type PricingCardContentProps = {
  children?: ReactNode;
  comingSoon?: boolean;
  color?: string;
  customPricing?: boolean;
  borderColor?: string;
};

export const PricingCardContent = ({
  children,
  comingSoon,
  customPricing,
  color = "$hiContrast",
}: PricingCardContentProps) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: 76,
        py: "$3",
        justifyContent: "center",
        borderTop: `1px solid`,
        borderColor: "rgba(255,255,255, .45)",
        color,
      }}>
      {children}
      {comingSoon ? (
        <Box
          css={{
            fontSize: "$3",
          }}>
          Coming soon
        </Box>
      ) : customPricing ? (
        <Box css={{ display: "flex", alignItems: "center" }}>
          <Box
            css={{
              fontSize: "$3",
              color,
            }}>
            Custom pricing
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

const PricingCard = ({
  pricingTitle,
  cardBg,
  pricingDescription,
  btn,
  children,
  className,
  color = "$hiContrast",
}: PricingCardProps) => {
  return (
    <Box
      className={className}
      css={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        px: "16px",
        paddingTop: "25px",
        borderRadius: "16px",
        background: cardBg,
        textAlign: "center",
      }}>
      <Flex direction="column">
        <Text
          size="6"
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
              background: btn.bg,
              color: btn.color,
              fontSize: "$3",
              fontWeight: 500,
              "&:hover": {
                boxShadow: "none",
                background: btn.bg,
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
