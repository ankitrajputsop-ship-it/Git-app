import Header from "../../Component/Header";
import Search from "../../Component/Search";
import {
  HomeContainer,
  HomeContent,
  Title,
  Description,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <Title>GitHub Profile Finder</Title>
        <Search />
        <Description>Search for GitHub profiles by username.</Description>
      </HomeContent>
    </HomeContainer>
  );
};
export default Home;
