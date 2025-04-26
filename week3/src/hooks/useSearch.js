export const handleSearch = ({ members, search }) => {
  const filtered = members.filter(
    (member) =>
      member.name.includes(search) || member.englishName.includes(search),
  );
  return filtered;
};
