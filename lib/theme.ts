const theme = {
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
    transparent: "transparent",
    muted: "#fafafa",
    primary: "#00EB88",
    secondary: "#3F3FE2",
    gray: "#666666",
    lightGray: "#A5A5A5",
    ultraLightGray: "#E5E5E5",
    gradient: { from: "#00A55F", mid: "#28CD88", to: "#4CF1AC" }
  },
  fonts: {
    body:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    special:
      '"TT Firs Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: "'Roboto Mono', monospace"
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
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    md: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    float: "30px 20px 60px rgba(0, 0, 0, 0.1)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    long: "0px 8px 32px rgba(0, 0, 0, 0.12)",
    magical:
      "0px 30px 30px rgba(0, 0, 0, 0.02), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 1px 0px rgba(0, 0, 0, 0.05)"
  },
  zIndices: {
    header: 1000,
    dropdown: 90,
    general: 10,
    behind: -1
  },
  // VARIANTS
  layout: {
    container: {
      maxWidth: 1200,
      mx: "auto",
      p: 3
    },
    hero: {
      maxWidth: 1200,
      mx: "auto",
      p: 3,
      pt: "80px"
    },
    section: {
      variant: "layout.container",
      position: "relative",
      px: 3,
      py: "80px"
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    centerAbsolute: {
      left: "50%",
      transform: "translateX(-50%)"
    }
  },
  text: {
    normal: {
      fontFamily: "body",
      fontSize: [2, 3],
      fontWeight: 400,
      lineHeight: "body"
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
    clamp: {
      3: {
        fontFamily: "body",
        fontSize: [2, 3],
        fontWeight: 400,
        lineHeight: "body",
        textOverflow: "ellipsis",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical"
      }
    },
    heading: {
      1: {
        fontFamily: "special",
        fontSize: ["56px", "88px"],
        fontWeight: 700,
        letterSpacing: "heading",
        lineHeight: [1, "heading"],
        textAlign: "center"
      },
      2: {
        fontFamily: "special",
        fontSize: ["48px", "72px"],
        fontWeight: 800,
        letterSpacing: "heading",
        lineHeight: [1.2, "heading"],
        textAlign: "center"
      },
      3: {
        fontFamily: "special",
        fontSize: ["40px", 8],
        fontWeight: 800,
        letterSpacing: "heading",
        lineHeight: [1, "heading"],
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
        fontSize: ["20px", 5],
        fontWeight: 500,
        letterSpacing: "heading",
        lineHeight: "body",
        textAlign: "center",
        color: "gray"
      }
    },
    gradientBase: {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    gradient: {
      background: `linear-gradient(90deg, #00A55F 0%, #4CF1AC 100%)`,
      variant: "text.gradientBase"
    },
    section: {
      titleLabel: {
        variant: "text.large",
        fontSize: [3, "22px"],
        textAlign: "center",
        mb: [2, 3],
        maxWidth: "960px",
        mx: "auto"
      },
      title: {
        variant: "text.heading.2",
        fontSize: ["48px", "72px"],
        fontFamily: "body",
        mb: [3, 4],
        maxWidth: "960px",
        mx: "auto"
      },
      subtitle: {
        variant: "text.heading.5",
        maxWidth: "960px",
        mx: "auto"
      }
    }
  },
  buttons: {
    primary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "default",
      bg: "primary",
      color: "text",
      py: 2,
      px: 4,
      height: 12,
      variant: "text.default",
      fontWeight: 600,
      transition: "background .15s",
      "&:hover": {
        bg: "gradient.to"
      },
      "&:focus": {
        boxShadow: "0 0 0 4px rgba(0, 235, 136, .5)",
        outline: "none"
      }
    },
    secondary: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "default",
      bg: "secondary",
      color: "background",
      py: 2,
      px: 4,
      height: 12,
      variant: "text.default",
      fontWeight: 600,
      transition: "background .15s",
      "&:hover": {
        bg: "#6565FC"
      },
      "&:focus": {
        boxShadow: "0 0 0 4px rgba(0, 0, 235, 0.5)",
        outline: "none"
      }
    },
    neutral: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "default",
      color: "background",
      bg: "text",
      py: 2,
      px: 4,
      height: 12,
      variant: "text.default",
      fontWeight: 600,
      transition: "opacity .15s",
      "&:hover": {
        opacity: 0.82
      },
      "&:focus": {
        boxShadow: "0 0 0 4px rgba(19, 20, 24, .5)",
        outline: "none"
      }
    },
    icon: {
      p: 2,
      borderRadius: "md",
      height: "auto",
      width: "auto"
    }
  },
  cards: {
    primary: {
      p: 4,
      maxWidth: "sm",
      borderRadius: "md",
      bg: "background",
      border: "1px solid",
      borderColor: "ultraLightGray",
      overflow: "hidden"
    }
  },
  links: {
    nav: {
      transition: "color .1s",
      color: "text",
      ":hover": {
        color: "secondary"
      },
      ":focus": {
        color: "text",
        ":hover": {
          color: "secondary"
        }
      },
      '&[data-dark="true"]': {
        color: "background",
        ":hover": {
          color: "primary"
        },
        ":focus": {
          color: "background",
          ":hover": {
            color: "primary"
          }
        }
      }
    },
    accent: {
      color: "secondary",
      fontWeight: 600,
      ":hover": {
        opacity: 0.8,
        color: "secondary"
      },
      '&[data-dark="true"]': {
        color: "primary",
        ":hover": {
          opacity: 0.8,
          color: "primary"
        }
      }
    }
  },
  forms: {
    input: {
      bg: "background",
      variant: "text.small",
      border: "none",
      px: 3,
      height: 12,
      "&::placeholder": {
        color: "gray"
      },
      "&:focus": {
        boxShadow: "0 0 0 4px rgba(19, 20, 24, .5)",
        outline: "none"
      }
    }
  },
  // STYLES
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    a: {
      color: "text",
      ":hover": {
        color: "secondary"
      },
      "&[data-dark]": {
        color: "background",
        ":hover": {
          color: "primary"
        }
      }
    },
    progress: {
      height: "1px"
    }
  }
}

export default theme
