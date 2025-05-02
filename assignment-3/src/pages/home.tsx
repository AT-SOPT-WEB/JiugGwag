import { useState } from "react";
import Header from "../components/header/header";
import Navigation from "../components/naviagation/navigation";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Header>
      <Navigation
        texts={["깃허브 검색", "숫자 야구"]}
        selectedIndex={selectedIndex}
        onClick={setSelectedIndex}
      />
    </Header>
  );
};

export default Home;
