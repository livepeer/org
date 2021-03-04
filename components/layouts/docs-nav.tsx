/** @jsx jsx */

import { jsx } from "theme-ui";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import { useState } from "react";
import { DarkIcon, LightIcon, SearchIcon } from "components/svgs/darkMode";
import DocsMobileNav from "./docs-mobile.nav";
import DarkModeSwitch from "components/primitives/darkModeSwitch";

const DocsNav = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div sx={{ width: "100%" }}>
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
          <LivepeerIconSvg pushSx={{ width: "24px", height: "22px" }} />
          <p sx={{ color: "#A5A5A5", fontSize: "16px", ml: "8px" }}>
            /{" "}
            <span
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#131418",
                ml: "6px",
              }}>
              Docs
            </span>
          </p>
        </div>
        <label
          htmlFor="seach"
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
            id="search"
            placeholder="Search in docs"
            sx={{
              width: "100%",
              height: "100%",
              outline: "none",
              background: "#F9F9F9",
              px: "42px",
              "&::placeholder": {
                color: "#A5A5A5",
                fontSize: "16px",
              },
            }}
          />
        </label>
        <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div sx={{ display: ["flex", null, "none"] }}>
        <DocsMobileNav />
      </div>
    </div>
  );
};

export default DocsNav;
