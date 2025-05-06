import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const cardRootContainer = style({
  width: "30rem",
  height: "100%",
  padding: "1rem",
  backgroundColor: themeVars.color.teal600,
  position: "relative",
});

export const closeButton = style({
  position: "absolute",
  top: "1rem",
  right: "2rem",
  background: "transparent",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",
});

export const cardNameText = style({
  fontSize: "2rem",
  color: themeVars.color.black,
  fontWeight: "bold",
});

export const subText = style({
  fontSize: "1.2rem",
  color: themeVars.color.gray500,
});

export const buttonContainer = style({
  width: "2rem",
  height: "3rem",
  gap: "1rem",
  display: "flex",
  border: "none",
});

export const buttonContent = style({
  alignItems: "center",
  textAlign: "center",
  backgroundColor: themeVars.color.yellow,
  border: "none",
});
