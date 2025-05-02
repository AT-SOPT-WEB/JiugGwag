import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const searchBarContainer = style({
  borderRadius: "0.8rem",
  border: `1px solid ${themeVars.color.teal100}`,
  backgroundColor: themeVars.color.gray300,
});
