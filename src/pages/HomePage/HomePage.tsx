import { useState } from "react";
import { Container } from "../../components/Layout/Container";
import { SearchRepos } from "../../components/SearchRepos";
import { Pagination } from "../../components/UI/Pagination";
import { useAppDispatch, useAppSelector } from "../../components/hooks/hooks";
import { getNextRepos } from "../../store/actions/getNextRepos";

import styles from './HomePage.module.css';
import { getPrevRepos } from "../../store/actions/getPrevtRepos.";

const HomePage = (): JSX.Element => {

  const [inputValue, setInputValue] = useState("");

  const { cursor } = useAppSelector(state => state.repos);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(getNextRepos({ searchStr: inputValue, after: cursor }));
  }
  const handlePrev = () => {
    dispatch(getPrevRepos({ searchStr: inputValue, before: cursor }));
  }

  return (
    <Container>
      <div className={styles.pagination}>
        <Pagination
          hasNext={true}
          hasPrev={true}
          onClickNext={handleNext}
          onClickPrev={handlePrev}
        />
      </div>
      <SearchRepos value={inputValue} onChange={setInputValue} />
    </Container >
  );
};

export default HomePage;
