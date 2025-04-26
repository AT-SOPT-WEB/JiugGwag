const Search = ({ keyword, onChange, children }) => {
  return (
    <div>
      <input value={keyword} onChange={onChange} />
      {children}
    </div>
  );
};

export default Search;
