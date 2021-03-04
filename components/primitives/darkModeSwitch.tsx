/** @jsx jsx */

import { jsx } from "theme-ui";
import { DarkIcon, LightIcon } from "components/svgs/darkMode";

type Props = {
  colorMode: string;
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
};

const DarkModeSwitch = ({ setColorMode, colorMode }: Props) => {
  return (
    <label
      sx={{
        width: "80px",
        height: "40px",
        backgroundColor: "docsDarkGrey",
        borderRadius: "24px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      htmlFor="darkMode">
      <input
        id="darkMode"
        name="darkMode"
        onChange={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
        type="checkbox"
        sx={{ opacity: "0", width: "0", height: "0" }}
      />
      <span
        sx={{
          position: "absolute",
          left: colorMode === "dark" ? "40px" : "0",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          backgroundColor: "docsMuted",
          border: "1px solid",
          borderColor: "docsBorder",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          zIndex: "1",
        }}>
        {colorMode === "dark" ? (
          <DarkIcon color="white" />
        ) : (
          <LightIcon color="black" />
        )}
      </span>
      <i
        sx={{
          position: "absolute",
          left: "12px",
        }}>
        <LightIcon color="#A5A5A5" />
      </i>
      <i
        sx={{
          position: "absolute",
          right: "12px",
        }}>
        <DarkIcon color="#A5A5A5" />
      </i>
    </label>
  );
};

export default DarkModeSwitch;
