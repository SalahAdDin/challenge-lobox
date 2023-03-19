import { createGlobalTheme, globalFontFace } from "@vanilla-extract/css";

const workSans = "Work Sans";

globalFontFace(workSans, {
  src: "url(https://fonts.gstatic.com/s/worksans/v18/QGYsz_wNahGAdqQ43Rh_fKDp.woff2) format('woff2')",
  fontDisplay: "swap",
});

const colors = {
  slateGray: "777b84",
  ghostWhite: "#f2f4ff",
  palatinateBlue: "#1b3fcf",
  antiFlashWhite: "#efefef",
  seaSalt: "#fafafa",
  white: "#ffffff",
};

const commonTokens = {
  font: {
    family: {
      body: `'${workSans}', sans-serif`,
    },
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.5rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    104: "28rem",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  radii: {
    sm: "0.2rem",
    md: "0.4rem",
    lg: "1rem",
    xl: "2rem",
    full: "100%",
  },
};

const tokens = createGlobalTheme(":root", {
  colors: {
    primary: {
      main: colors.palatinateBlue,
      hover: colors.ghostWhite,
    },
    gray: colors.antiFlashWhite,
    text: colors.slateGray,
    background: {
      main: colors.seaSalt,
      white: colors.white,
    },
  },
  ...commonTokens,
});

export default tokens;
