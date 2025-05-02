import * as styles from "./navigation.css";

interface NavigationProps {
  texts: string[];
  onClick?: (text: string) => void;
}

const Navigation = ({ texts, onClick }: NavigationProps) => {
  return (
    <>
      {texts.map((text, index) => (
        <button
          className={styles.navigationButton}
          key={index}
          onClick={() => onClick?.(text)}
        >
          {text}
        </button>
      ))}
    </>
  );
};

export default Navigation;
