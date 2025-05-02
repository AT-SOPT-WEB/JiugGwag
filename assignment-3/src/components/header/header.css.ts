import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const headerContainer = style({
  width: "100%",
  height: "15rem",
  backgroundColor: themeVars.color.teal800,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const headerTitle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: themeVars.color.black,
});
