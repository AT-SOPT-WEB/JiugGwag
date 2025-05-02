import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "../../styles";

export const navigationButton = recipe({
  base: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: "0.5rem 1rem",
  },
  variants: {
    isSelected: {
      true: {
        color: themeVars.color.teal200,
        borderBottom: `2px solid ${themeVars.color.black}`,
      },
      false: {
        color: themeVars.color.black,
        borderBottom: "2px solid transparent",
      },
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});
