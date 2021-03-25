/** @jsx jsx */

import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import {
  MobileMenuIcon,
  SearchIcon,
  CloseMobileNav,
} from "components/svgs/darkMode";
import MobileLogo from "./mobile-logo";
import DarkModeSwitch from "components/primitives/darkModeSwitch";
import DocsMenu, { Menu } from "./docs-menu";
import { useDocSearch } from "./docs-nav/algolia-doc-search";

type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  colorMode: string;
  handleClose: React.MouseEventHandler<HTMLDivElement>;
  selected: string;
  menuOpen: boolean;
  menu?: Menu[];
};

const OpenMenu = ({
  colorMode,
  setColorMode,
  handleClose,
  selected,
  menuOpen,
  menu,
}: Props) => {
  return (
    <div
      sx={{
        height: menuOpen ? "100vh" : "0px",
        width: "100%",
        position: "sticky",
        top: "0",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "docs.background",
        padding: "32px 24px",
        overflowY: "scroll",
        transition: "all 0.2s",
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
      <DocsMenu selected={selected} menu={menu} />
      <div sx={{ position: "fixed", bottom: "150px", right: "16px" }}>
        <DarkModeSwitch colorMode={colorMode} setColorMode={setColorMode} />
      </div>
    </div>
  );
};

const DocsMobileNav = ({ setColorMode, colorMode, selected, menu }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { Modal, onOpen, searchButtonRef } = useDocSearch();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.removeProperty("overflow");
      };
    }
  }, [menuOpen]);

  return (
    <>
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
              transform: "0",
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
              <button
                onClick={onOpen}
                ref={searchButtonRef}
                sx={{ mr: "6px", p: 2 }}>
                <SearchIcon color={colorMode === "dark" ? "#fff" : "#131418"} />
              </button>
              <button onClick={() => setMenuOpen(true)} sx={{ p: 1 }}>
                <MobileMenuIcon
                  color={colorMode === "dark" ? "#fff" : "#131418"}
                />
              </button>
            </div>
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
            menu={menu}
            menuOpen={menuOpen}
            colorMode={colorMode}
            setColorMode={setColorMode}
            handleClose={() => setMenuOpen(false)}
            selected={selected}
          />
        </div>
      </div>
      <Modal />
    </>
  );
};

export default DocsMobileNav;
