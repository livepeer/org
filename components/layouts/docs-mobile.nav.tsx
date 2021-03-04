/** @jsx jsx */
// @ts-nocheck

import { jsx } from "theme-ui";
import LivepeerIconSvg from "components/svgs/icons/livepeer";
import { useState } from "react";
import {
  MobileMenuIcon,
  SearchIcon,
  CloseMobileNav,
} from "components/svgs/darkMode";

const DocsMobileNav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  return (
    <div
      sx={{
        width: "100%",
        height: "58px",
        boxShadow:
          "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
        overflow: "hidden",
        position: "relative",
      }}>
      <div
        sx={{
          display: "flex",
          padding: "9px 32px",
          position: "absolute",
          left: "0",
          background: "white",
          zIndex: "100",
          transform: inputOpen ? "translateX(-150%)" : "0",
          justifyContent: "space-between",
          width: "100vw",
          height: "100%",
          alignItems: "center",
          transition: "all 0.4s",
        }}>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s",
          }}>
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
        <div sx={{ display: "flex", alignItems: "center" }}>
          <i onClick={() => setInputOpen(true)} sx={{ mr: "30px" }}>
            <SearchIcon color="#131418" />
          </i>
          <i onClick={() => setMenuOpen(true)}>
            <MobileMenuIcon />
          </i>
        </div>
      </div>
      <div
        sx={{
          display: "flex",
          position: "absolute",
          left: "0",
          padding: "9px 32px",
          justifyContent: "space-between",
          width: "100vw",
          height: "100%",
          alignItems: "center",
          transition: "all 0.4s",
        }}>
        <label
          htmlFor="seach"
          sx={{
            height: "40px",
            width: "100%",
            maxWidth: "350px",
            borderRadius: "40px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s",
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
        <i
          sx={{ display: "flex", ml: "22px" }}
          onClick={() => setInputOpen(false)}>
          <CloseMobileNav />
        </i>
      </div>
    </div>
  );
};

export default DocsMobileNav;
