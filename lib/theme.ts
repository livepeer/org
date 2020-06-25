import { Theme } from "theme-ui"

const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  sizes: {
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem"
  },
  colors: {
    text: "#131418",
    background: "#fff",
    muted: "#E5E5E5",
    primary: "#00EB88",
    secondary: "#3F3FE2",
    gray: "#666666",
    lightGray: "#A5A5A5",
    gradient: { from: "#00A55F", to: "#4CF1AC" }
  },
  fonts: {
    body:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    special: "TT Firs Neue"
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  letterSpacings: {
    heading: "-0.05em",
    default: "0em"
  },
  lineHeights: {
    heading: 0.9,
    body: 1.6
  },
  breakpoints: ["640px", "832px", "1024px", "1280px"],
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "50%"
  },
  // VARIANTS
  layout: {
    container: {
      maxWidth: 1160,
      mx: "auto",
      p: 3
    },
    sectionContainer: {
      position: "relative",
      maxWidth: 1200,
      mx: "auto",
      px: 3,
      py: 5
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  text: {
    default: {
      fontFamily: "body",
      fontSize: [2, 3],
      fontWeight: 400
    },
    large: {
      fontFamily: "body",
      fontSize: [3, "22px"],
      fontWeight: 500
    },
    small: {
      fontFamily: "body",
      fontSize: [1, 2],
      fontWeight: 400
    },
    heading: {
      1: {
        fontFamily: "special",
        fontSize: ["56px", "88px"],
        fontWeight: 700,
        letterSpacing: "heading",
        textAlign: "center"
      },
      2: {
        fontFamily: "special",
        fontSize: [7, "72px"],
        fontWeight: 800,
        letterSpacing: "heading",
        textAlign: "center"
      },
      3: {
        fontFamily: "special",
        fontSize: ["40px", 8],
        fontWeight: 800,
        letterSpacing: "heading",
        textAlign: "center"
      },
      4: {
        fontFamily: "body",
        fontSize: [6, 7],
        fontWeight: 700,
        letterSpacing: "heading",
        textAlign: "center"
      },
      5: {
        fontFamily: "body",
        fontSize: 5,
        fontWeight: 500,
        letterSpacing: "heading",
        textAlign: "center",
        color: "gray"
      }
    },
    gradient: {
      // @ts-ignore
      background: `linear-gradient(90deg, #00A55F 0%, #4CF1AC 100%)`,
      // @ts-ignore
      WebkitBackgroundClip: "text",
      // @ts-ignore
      WebkitTextFillColor: "transparent"
    }
  },
  buttons: {
    primary: {
      color: "text",
      py: 2,
      px: 4,
      height: 12,
      variant: "text.default",
      fontWeight: 500
    },
    secondary: {}
  },
  // STYLES
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline"
      }
    }
  }
}

export default theme
