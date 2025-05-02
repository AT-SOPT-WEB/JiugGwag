import { navigationButton } from "./navigation.css";

interface NavigationProps {
  texts: string[];
  selectedIndex: number;
  onClick?: (index: number) => void;
}

const Navigation = ({ texts, selectedIndex, onClick }: NavigationProps) => {
  return (
    <>
      {texts.map((text, index) => (
        <button
          className={navigationButton({ isSelected: index === selectedIndex })}
          key={index}
          onClick={() => onClick?.(index)}
        >
          {text}
        </button>
      ))}
    </>
  );
};

export default Navigation;
