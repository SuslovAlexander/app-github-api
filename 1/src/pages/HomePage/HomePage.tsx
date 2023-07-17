import { Container } from "../../components/Layout/Container";
import { SearchRepos } from "../../components/SearchRepos";

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <SearchRepos />
    </Container>
  );
};

export default HomePage;
