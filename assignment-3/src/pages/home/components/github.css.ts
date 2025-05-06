import { style } from "@vanilla-extract/css";

export const gihubContainer = style({
  width: "100%",
  height: "80svh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});
