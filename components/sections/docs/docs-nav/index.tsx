/** @jsx jsx */
import { jsx } from "theme-ui";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import DocsMobileNav from "../docs-mobile.nav";
import DarkModeSwitch from "components/primitives/darkModeSwitch";
import Link from "next/link";
import { Menu } from "../docs-menu";
import DocsSearch from "./search";

type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  colorMode: string;
  selected: string;
  menu: Menu[];
};

const DocsNav = ({ setColorMode, colorMode, selected, menu }: Props) => {
  return (
    <div
      sx={{
        width: "100%",
        backgroundColor: "docs.lightBlack",
        transition: "all 0.2s",
        position: "sticky",
        top: "0",
      }}>
      <div
        sx={{
          width: "100%",
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
          padding: "9px 32px",
          display: ["none", "none", "flex"],
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/">
            <i sx={{ cursor: "pointer" }}>
              <LivepeerIconSvg pushSx={{ width: "24px", height: "22px" }} />
            </i>
          </Link>
          <p sx={{ color: "docs.lightGray", fontSize: "16px", ml: "8px" }}>
            /
            <Link href="/docs">
              <a
                sx={{
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "docs.text",
                  transition: "all 0.2s",
                  ml: "6px",
                }}>
                Docs
              </a>
            </Link>
          </p>
        </div>
        <DocsSearch />
        <DarkModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
      </div>
      <div sx={{ display: ["flex", null, "none"] }}>
        <DocsMobileNav
          menu={menu}
          selected={selected}
          setColorMode={setColorMode}
          colorMode={colorMode}
        />
      </div>
    </div>
  );
};

export default DocsNav;
