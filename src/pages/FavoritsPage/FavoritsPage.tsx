import { useEffect } from "react";

import Container from "../../components/Layout/Container/Container";
import { Repos } from "../../components/Repos";
import Loader from "../../components/UI/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../components/hooks/hooks";
import { getFavoriteRepos } from "../../store/slices/reposSlice";

const FavoritsPage = (): JSX.Element => {
  const { favorites, faforiteIsFetching } = useAppSelector(
    (state) => state.repos
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoriteRepos());
  }, [dispatch]);

  return (
    <Container>
      {faforiteIsFetching ? <Loader /> : <Repos repos={favorites} />}
    </Container>
  );
};

export default FavoritsPage;
