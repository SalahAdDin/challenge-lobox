import tokens from "@presentation/themes.css";
import { style } from "@vanilla-extract/css";

const dropdownContainer = style({});

const dropdownInputContainer = style({
  display: "flex",
  position: "relative",
  marginTop: tokens.space.sm,
  marginBottom: tokens.space.sm,
});

const dropdownInput = style({
  "width": "100%",
  "border": `3px solid ${tokens.colors.gray}`,
  ":focus-visible": {
    outline: `5px solid ${tokens.colors.primary.hover}`,
    border: `2px solid ${tokens.colors.primary.main}`,
  },
  "selectors": {
    [`${dropdownInputContainer} &`]: {
      padding: tokens.space.md,
      borderRadius: tokens.radii.lg,
    },
  },
});

const dropdownDownArrowContainer = style({
  pointerEvents: "none",
  selectors: {
    [`${dropdownInputContainer} &`]: {
      background: tokens.colors.background.white,
      border: "none",
      alignSelf: "center",
      position: "absolute",
      right: tokens.space.md,
      padding: tokens.space.sm,
    },
  },
});

const dropdownMenuContainer = style({
  overflow: "hidden",
  border: `3px solid ${tokens.colors.gray}`,
  borderRadius: tokens.radii.xl,
  background: tokens.colors.background.white,
  boxShadow: tokens.boxShadow.lg,
});

const dropdownMenu = style({
  listStyleType: "none",
  paddingTop: tokens.space.lg,
  paddingBottom: tokens.space.lg,
  paddingLeft: tokens.space.md,
  paddingRight: tokens.space.md,
  overflow: "auto",
  maxHeight: tokens.space[80],
});

const dropdownOption = style({
  "display": "flex",
  "justifyContent": "space-between",
  "padding": tokens.space.md,
  "borderRadius": tokens.radii.lg,
  ":hover": {
    color: tokens.colors.primary.main,
    background: tokens.colors.primary.hover,
  },
});

const dropdownOptionCheck = style({
  selectors: {
    [`${dropdownOption} &`]: {
      alignSelf: "center",
    },
  },
});

export default {
  dropdownContainer,
  dropdownDownArrowContainer,
  dropdownInputContainer,
  dropdownInput,
  dropdownMenuContainer,
  dropdownMenu,
  dropdownOption,
  dropdownOptionCheck,
};
