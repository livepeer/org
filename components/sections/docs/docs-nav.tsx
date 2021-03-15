/** @jsx jsx */

import { jsx } from "theme-ui";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import { SearchIcon } from "components/svgs/darkMode";
import DocsMobileNav from "./docs-mobile.nav";
import DarkModeSwitch from "components/primitives/darkModeSwitch";
import { useState, useCallback } from "react";
import Link from "next/link";

type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  colorMode: string;
  selected: string;
};

const DocsNav = ({ setColorMode, colorMode, selected }: Props) => {
  const [, setSearch] = useState("");

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearch(value);
    },
    [setSearch]
  );

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
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: "90px",
            maxHeight: "25px",
          }}>
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
        <label
          htmlFor="desktop-search"
          sx={{
            width: ["250px", "300px", "400px", "700px"],
            height: "40px",
            borderRadius: "40px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}>
          <i sx={{ position: "absolute", left: "16px" }}>
            <SearchIcon color="#A5A5A5" />
          </i>
          <input
            name="Search"
            id="desktop-search"
            placeholder="Search in docs"
            onChange={handleChange}
            sx={{
              width: "100%",
              height: "100%",
              outline: "none",
              backgroundColor: "docs.muted",
              transition: "all 0.2s",
              color: "docs.text",
              px: "42px",
              "&::placeholder": {
                color: "docs.lightGray",
                fontSize: "16px",
                fontWeight: "300",
              },
            }}
          />
        </label>
        <DarkModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
      </div>
      <div sx={{ display: ["flex", null, "none"] }}>
        <DocsMobileNav
          selected={selected}
          setColorMode={setColorMode}
          colorMode={colorMode}
        />
      </div>
    </div>
  );
};

export default DocsNav;
