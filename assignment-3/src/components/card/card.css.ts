import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const cardRootContainer = style({
  width: "30rem",
  height: "50rem",
  backgroundClip: themeVars.color.teal600,
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
