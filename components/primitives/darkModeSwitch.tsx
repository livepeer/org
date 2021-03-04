/** @jsx jsx */

import { jsx } from "theme-ui";
import { DarkIcon, LightIcon } from "components/svgs/darkMode";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeSwitch = ({ darkMode, setDarkMode }: Props) => {
  return (
    <label
      sx={{
        width: "80px",
        height: "40px",
        background: "#F5F5F5",
        borderRadius: "24px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      htmlFor="darkMode">
      <input
        id="darkMode"
        name="darkMode"
        onChange={() => setDarkMode((prev) => !prev)}
        type="checkbox"
        sx={{ opacity: "0", width: "0", height: "0" }}
      />
      <span
        sx={{
          position: "absolute",
          left: darkMode ? "40px" : "0",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          background: "white",
          border: "1px solid #E5E5E5",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          zIndex: "1",
        }}>
        {darkMode ? <DarkIcon color="black" /> : <LightIcon color="black" />}
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
