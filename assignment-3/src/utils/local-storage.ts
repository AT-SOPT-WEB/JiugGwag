const STORAGE_KEY = "recentUsers";
const MAX_RECENT = 3;

export const getRecentUsers = (): string[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRecentUser = (newUser: string): void => {
  const existing = getRecentUsers().filter((user) => user !== newUser);
  const updated = [...existing, newUser].slice(-MAX_RECENT);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const removeRecentUser = (targetUser: string): void => {
  const filtered = getRecentUsers().filter((user) => user !== targetUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
