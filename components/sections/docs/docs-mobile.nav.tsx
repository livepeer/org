/** @jsx jsx */

import { jsx } from "theme-ui";
import { useState } from "react";
import {
  MobileMenuIcon,
  SearchIcon,
  CloseMobileNav,
} from "components/svgs/darkMode";
import MobileLogo from "./mobile-logo";
import DarkModeSwitch from "components/primitives/darkModeSwitch";
import DocsMenu from "./docs-menu";

type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  colorMode: string;
  handleClose: React.MouseEventHandler<HTMLDivElement>;
  selected: string;
};

const OpenMenu = ({
  colorMode,
  setColorMode,
  handleClose,
  selected,
}: Props) => {
  return (
    <div
      sx={{
        height: "100vh",
        position: "sticky",
        top: "0",
        overflowY: "scroll",
        backgroundColor: "docs.background",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "32px 24px",
      }}>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          position: "sticky",
          top: "0",
        }}
        onClick={handleClose}>
        <CloseMobileNav color={colorMode === "dark" ? "#fff" : "#131418"} />
      </div>
      <DocsMenu selected={selected} />
      <div sx={{ position: "fixed", bottom: "100px", right: "16px" }}>
        <DarkModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
      </div>
    </div>
  );
};

const DocsMobileNav = ({ setColorMode, colorMode, selected }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [inputOpen, setInputOpen] = useState<boolean>(false);

  return (
    <div sx={{ width: "100vw", position: "sticky", top: "0" }}>
      <div
        sx={{
          width: "100%",
          height: "58px",
          boxShadow:
            "0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "docs.lightBlack",
          transform: menuOpen ? "translateY(-58px)" : "",
          transition: "all 0.3s",
        }}>
        <div
          sx={{
            display: "flex",
            padding: "9px 32px",
            position: "absolute",
            left: "0",
            backgroundColor: "docs.lightBlack",
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
            <MobileLogo />
            <p sx={{ color: "docs.lightGray", fontSize: "16px", ml: "8px" }}>
              /{" "}
              <span
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "docs.text",
                  ml: "6px",
                }}>
                Docs
              </span>
            </p>
          </div>
          <div sx={{ display: "flex", alignItems: "center" }}>
            <i onClick={() => setInputOpen(true)} sx={{ mr: "30px" }}>
              <SearchIcon color={colorMode === "dark" ? "#fff" : "#131418"} />
            </i>
            <i onClick={() => setMenuOpen(true)}>
              <MobileMenuIcon
                color={colorMode === "dark" ? "#fff" : "#131418"}
              />
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
                backgroundColor: "docs.muted",
                color: "docs.text",
                px: "42px",
                "&::placeholder": {
                  color: "docs.lightGray",
                  fontSize: "16px",
                },
              }}
            />
          </label>
          <i
            sx={{ display: "flex", ml: "22px" }}
            onClick={() => setInputOpen(false)}>
            <CloseMobileNav color={colorMode === "dark" ? "#fff" : "#131418"} />
          </i>
        </div>
      </div>
      <div
        sx={{
          transition: "all, 0.3s",
          opacity: menuOpen ? "1" : "0",
          transform: menuOpen ? "translateY(-58px)" : "",
          height: menuOpen ? "100vh" : "0px",
        }}>
        <OpenMenu
          colorMode={colorMode}
          setColorMode={setColorMode}
          handleClose={() => setMenuOpen(false)}
          selected={selected}
        />
      </div>
      {inputOpen && (
        <div
          sx={{
            height: "calc(100vh - 58px)",
            position: "fixed",
            width: "100vw",
            left: "0",
            top: "58px",
            backgroundColor: "docs.opacity",
            zIndex: "100",
          }}
        />
      )}
    </div>
  );
};

export default DocsMobileNav;
