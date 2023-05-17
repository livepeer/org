/** @jsx jsx */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Flex, jsx } from "theme-ui";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { useState } from "react";

const Item = ({ active = false, text, ...props }) => (
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
      <Flex sx={{ alignItems: "center", fontWeight: 600 }}>{text}</Flex>
      <DropdownMenu.ItemIndicator>
        <CheckIcon sx={{ width: 6, height: 6 }} />
      </DropdownMenu.ItemIndicator>
    </>
  </DropdownMenu.CheckboxItem>
);

const items = [
  {
    link: "/ecosystem/showcase",
    text: "Showcase",
  },
  {
    link: "/ecosystem/get-funded",
    text: "Get Funded",
  },
];

const LanguageDropdown = () => {
  const router = useRouter();
  const { pathname, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          ":focus": {
            outline: "none",
          },
        }}>
        <Box>Ecosystem</Box>
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
          minWidth: 260,
          backgroundColor: "#ffffff",
          borderRadius: 6,
          padding: 2,
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
        }}>
        {items.map((item, i) => (
          <Item
            key={i}
            onSelect={() => router.push(item.link)}
            text={item.text}
            active={asPath === item.text ? true : false}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LanguageDropdown;
