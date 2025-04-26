import "./App.css";
import Card from "./components/Card";
import { members } from "./mock/member";
import Input from "./components/Search";
import { useState } from "react";
import { handleSearch } from "./hooks/useSearch";

function App() {
  const [search, setSearch] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(members);
  const handleKeyword = (e) => {
    setSearch(e.target.value);
  };
  const handleButtonClick = () => {
    const filtered = handleSearch({ members, search });
    setFilteredMembers(filtered);
  };

  return (
    <>
      <div>
        <Input value={search} onChange={handleKeyword}>
          <button onClick={handleButtonClick}>검색</button>
        </Input>
        {filteredMembers.map((member) => (
          <div className="card__container" key={member.id}>
            <Card.NameKo name={member.name} />
            <Card.NameEn name={member.englishName} />
            <Card.GithubId id={member.github} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
