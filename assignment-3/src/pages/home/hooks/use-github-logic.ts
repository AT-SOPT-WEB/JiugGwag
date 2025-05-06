import { useState } from "react";
import {
  getRecentUsers,
  removeRecentUser,
  saveRecentUser,
} from "../../../utils/local-storage";

const useRecentUsers = () => {
  const [recentUsers, setRecentUsers] = useState<string[]>(getRecentUsers());

  const updateRecentUsers = (trimmedUser: string) => {
    saveRecentUser(trimmedUser);
    setRecentUsers(getRecentUsers());
  };

  const handleDeleteChip = (keyword: string) => {
    removeRecentUser(keyword);
    setRecentUsers(getRecentUsers());
  };

  return {
    recentUsers,
    updateRecentUsers,
    handleDeleteChip,
  };
};

const useUserInput = () => {
  const [user, setUser] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const validateInput = (input: string) => input.trim().length > 0;

  return { user, handleOnChange, validateInput, setUser };
};

const useQueryUser = () => {
  const [queryUser, setQueryUser] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const updateQueryUser = (trimmedUser: string) => {
    setQueryUser(trimmedUser);
    setIsCardVisible(true);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
  };

  return {
    queryUser,
    isCardVisible,
    updateQueryUser,
    handleCloseCard,
  };
};

export const useGithubLogic = () => {
  const { user, handleOnChange, validateInput, setUser } = useUserInput();
  const { recentUsers, updateRecentUsers, handleDeleteChip } = useRecentUsers();
  const { queryUser, isCardVisible, updateQueryUser, handleCloseCard } =
    useQueryUser();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && validateInput(user)) {
      const trimmedUser = user.trim();
      updateQueryUser(trimmedUser);
      updateRecentUsers(trimmedUser);
      setUser("");
    }
  };

  const handleChipClick = (keyword: string) => {
    updateQueryUser(keyword);
  };

  return {
    user,
    recentUsers,
    queryUser,
    isCardVisible,
    handleOnChange,
    handleKeyDown,
    handleCloseCard,
    handleDeleteChip,
    handleChipClick,
  };
};
