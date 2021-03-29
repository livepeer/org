/** @jsx jsx */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Flex, jsx } from "theme-ui";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { useState } from "react";

const Item = ({ active = false, language, locale, flag, ...props }) => (
  <DropdownMenu.CheckboxItem
    checked={active}
    sx={{
      padding: "5px 10px",
      borderRadius: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      color: "text",
      fontWeight: active ? 600 : 400,
      backgroundColor: active ? "#f5f5ff" : "transparent",
      p: 3,
      "&:focus": {
        backgroundColor: "#f5f5ff",
        outline: "none",
      },
    }}
    {...props}>
    <>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ mr: 12 }}>{flag}</Box>
        {language}
      </Flex>
      <DropdownMenu.ItemIndicator>
        <CheckIcon sx={{ width: 6, height: 6 }} />
      </DropdownMenu.ItemIndicator>
    </>
  </DropdownMenu.CheckboxItem>
);

const items = [
  {
    flag: "🇺🇸",
    language: "English",
    locale: "en",
  },
  {
    flag: "🇨🇳",
    language: "Chinese (Simplified)",
    locale: "zh",
  },
  {
    flag: "🇰🇷",
    language: "Korean",
    locale: "ko",
  },
  {
    flag: "🇷🇺",
    language: "Russian",
    locale: "ru",
  },
  {
    flag: "🇪🇸",
    language: "Spanish",
    locale: "es",
  },
];

const LanguageDropdown = () => {
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "uppercase",
          fontWeight: 600,
          ":focus": {
            outline: "none",
          },
        }}>
        <Box>{router.locale}</Box>
        <Box sx={{ ml: 2, mr: 1, fontSize: 18 }}>
          {items.filter((item) => item.locale === router.locale)[0].flag}
        </Box>
        <ChevronDownIcon
          sx={{
            transition: ".2s transform",
            transform: `rotate(${isOpen ? "180deg" : 0})`,
            width: 6,
            height: 6,
          }}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sx={{
          minWidth: 300,
          backgroundColor: "#ffffff",
          borderRadius: 6,
          padding: 2,
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
        }}>
        {items.map((item, i) => (
          <Item
            key={i}
            onSelect={() =>
              router.push(pathname, asPath, { locale: item.locale })
            }
            flag={item.flag}
            active={locale === item.locale ? true : false}
            language={item.language}
            locale="en"
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LanguageDropdown;
