import Header from "../components/header/header";
import Navigation from "../components/naviagation/navigation";

const Home = () => {
  return (
    <Header>
      <Navigation texts={["깃허브 검색", "숫자 야구"]} />
    </Header>
  );
};

export default Home;
