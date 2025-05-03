interface CardProps {
  name: string;
  onClick: (name: string) => void;
}

const Card = ({ name, onClick }: CardProps) => {
  return (
    <button
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        width: "120px",
        textAlign: "center",
        background: "#f9f9f9",
      }}
      onClick={() => onClick(name)}
    >
      <p>{name}</p>
    </button>
  );
};

export default Card;
