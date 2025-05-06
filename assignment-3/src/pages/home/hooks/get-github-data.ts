import { GihhubDataResponse } from "../../../types/github-response";
import { useCustomQuery } from "../../../utils/useCustomQuery";

export const useGithubData = (queryUser: string) => {
  const isEnabled = !!queryUser;
  const { data, isLoading, error } = useCustomQuery<GihhubDataResponse>(
    `https://api.github.com/users/${queryUser}`,
    isEnabled,
  );

  return { data, isLoading, error };
};
