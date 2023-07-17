import { useEffect } from "react";

import { getRepos } from "../../store/actions/getRepos";
import { clearFound } from "../../store/slices/reposSlice";
import { Repos } from "../Repos";
import { SearchInput } from "../SearchInput";
import Loader from "../UI/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import styles from "./SearchRepos.module.css";
import { Placeholder } from "../UI/Placeholder";

interface ISearchReposProps {
  onChange: (value: string) => void,
  value: string;
}

const SearchRepos = ({ onChange, value }: ISearchReposProps): JSX.Element => {
  const { found, searchInProcess } = useAppSelector((state) => state.repos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRepos(value));
  }, [value, dispatch]);

  const handleFocus = (): void => {
    dispatch(clearFound());
  };

  return (
    <div className={styles.wrap}>
      <SearchInput
        placeholder="Найти репозиторий..."
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
      />
      {searchInProcess ? <Loader /> : <Repos repos={found} />}
      {!found.length && value.length > 1 && <Placeholder>Репозитории не найдены :(</Placeholder>}
    </div>
  );
};

export default SearchRepos;
