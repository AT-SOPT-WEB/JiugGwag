import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const searchBarContainer = style({
  width: "35rem",
  height: "4rem",
  borderRadius: "0.8rem",
  border: `2px solid ${themeVars.color.teal100}`,
  backgroundColor: themeVars.color.gray300,
});
