import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const chipContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "5rem",
  height: "3rem",
  color: themeVars.color.black,
  cursor: "pointer",
  borderRadius: "2rem",
  border: `1px solid ${themeVars.color.gray500}`,
});
