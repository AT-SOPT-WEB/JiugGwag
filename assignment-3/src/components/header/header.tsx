import { ReactNode } from "react";
import * as styles from "./header.css";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>숫자야구 || 깃허브 검색</h1>
      {children}
    </header>
  );
};

export default Header;
