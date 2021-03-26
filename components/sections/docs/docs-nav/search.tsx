/** @jsx jsx */
import { jsx } from "theme-ui";
import { SearchIcon } from "components/svgs/darkMode";

const DocsSearch = ({ searchButtonRef, onOpen }) => {
  return (
    <button
      sx={{
        width: ["250px", "300px", "400px", "700px"],
        height: "40px",
        borderRadius: "40px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      ref={searchButtonRef}
      onClick={onOpen}>
      <i sx={{ position: "absolute", left: "16px" }}>
        <SearchIcon color="#A5A5A5" />
      </i>
      <span
        sx={{
          width: "100%",
          height: "100%",
          outline: "none",
          backgroundColor: "docs.muted",
          transition: "all 0.2s",
          pl: "42px",
          pr: "12px",
          color: "docs.lightGray",
          fontSize: "16px",
          fontWeight: "300",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        Search in docs
        <span
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "docs.border",
            px: 2,
            height: "26px",
            transition: "all 0.2s",
          }}>
          <span sx={{ variant: "srOnly" }}>Press </span>
          <kbd>
            <abbr
              title="Command"
              sx={{
                textDecoration: "none !important",
                mr: 1,
                fontSize: "22px",
              }}>
              ⌘
            </abbr>
          </kbd>
          <span sx={{ variant: "srOnly" }}> and </span>
          <kbd>K</kbd>
          <span sx={{ variant: "srOnly" }}> to search</span>
        </span>
      </span>
    </button>
  );
};

export default DocsSearch;
