import { style } from "@vanilla-extract/css";

import tokens from "./themes.css";

const mainStyle = style({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  fontFamily: tokens.font.family.body,
  color: tokens.colors.text,
  background: tokens.colors.background.main,
});

export default { mainStyle };
