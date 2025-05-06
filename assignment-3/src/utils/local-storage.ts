const STORAGE_KEY = "recentUsers";

export const saveRecentUser = (user: string) => {
  if (!user) return;

  const stored = localStorage.getItem(STORAGE_KEY);
  let users = stored ? JSON.parse(stored) : [];

  users = users.filter((u: string) => u !== user);

  if (users.length >= 3) {
    users.shift();
  }

  users.push(user);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getRecentUsers = (): string[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const removeRecentUser = (user: string) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  let users = stored ? JSON.parse(stored) : [];

  users = users.filter((u: string) => u !== user);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
