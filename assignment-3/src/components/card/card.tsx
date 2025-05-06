import { ReactNode } from "react";
import * as styles from "./card.css";

interface RootProps {
  children: ReactNode;
  onClick: VoidFunction;
}

interface NameProps {
  name: string;
}

interface UserIdProps {
  userId: string;
}

interface UserDescriptionProps {
  description: string;
}

interface ButtonProps {
  followers: number;
  following: number;
}

interface ProfileImageProps {
  imageUrl: string;
}

const Root = ({ children, onClick }: RootProps) => {
  return (
    <div className={styles.cardRootContainer}>
      <button className={styles.closeButton} onClick={onClick}>
        X
      </button>
      {children}
    </div>
  );
};

const Name = ({ name }: NameProps) => {
  return <p className={styles.cardNameText}>{name}</p>;
};

const UserId = ({ userId }: UserIdProps) => {
  return <p className={styles.subText}>{userId}</p>;
};

const UserDescription = ({ description }: UserDescriptionProps) => {
  return <p className={styles.subText}>{description}</p>;
};

const Button = ({ followers, following }: ButtonProps) => {
  const data = [
    { label: "followers", value: followers },
    { label: "following", value: following },
  ] as const;

  return (
    <div className={styles.buttonContainer}>
      {data.map(({ label, value }) => (
        <button key={label} className={styles.buttonContent}>
          <div>
            <p>{label}</p>
            <p>{value}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

const ProfileImage = ({ imageUrl }: ProfileImageProps) => {
  return <img src={imageUrl} alt="Profile" />;
};

const Card = {
  ProfileImage: ProfileImage,
  Root: Root,
  Name: Name,
  UserId: UserId,
  UserDescription: UserDescription,
  Button: Button,
};

export default Card;
