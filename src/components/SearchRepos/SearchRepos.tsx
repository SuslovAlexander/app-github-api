import { useEffect, useState } from "react";

import { clearFound } from "../../store/slices/reposSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Repos } from "../Repos";
import { SearchInput } from "../SearchInput";
import Loader from "../UI/Loader/Loader";

import styles from "./SearchRepos.module.css";
import { getRepos } from "../../store/actions/getRepos";

const SearchRepos = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const { found, searchInProcess } = useAppSelector((state) => state.repos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRepos(inputValue));
  }, [inputValue, dispatch]);

  const handleFocus = (): void => {
    dispatch(clearFound());
  };

  return (
    <div className={styles.wrap}>
      <SearchInput
        placeholder="Найти репозиторий..."
        value={inputValue}
        onChange={setInputValue}
        onFocus={handleFocus}
      />
      {searchInProcess ? <Loader /> : <Repos repos={found} />}
    </div>
  );
};

export default SearchRepos;
