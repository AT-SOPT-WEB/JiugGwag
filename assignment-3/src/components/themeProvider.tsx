import { type ReactNode } from "react";

import { themeClass } from "../styles";

export default function ThemeProvider({
  theme,
  className,
  children,
}: {
  children: ReactNode;
  theme?: string;
  className?: string;
}) {
  return (
    <div className={`${theme ?? themeClass} ${className}`}>{children}</div>
  );
}
