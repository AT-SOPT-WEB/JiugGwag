import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles";

export const listItemStyle = style({
  listStyleType: "none",
  padding: "0.8rem 1.6rem",
  backgroundColor: themeVars.color.teal200,
  borderRadius: "0.4rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#eaeaea",
  },
});
