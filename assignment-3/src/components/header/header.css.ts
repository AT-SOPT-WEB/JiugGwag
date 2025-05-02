import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const headerContainer = style({
  width: "100%",
  height: "15rem",
  backgroundColor: themeVars.color.teal800,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
});

export const headerTitle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: themeVars.color.black,
});

export const headerChildrenContent = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});
