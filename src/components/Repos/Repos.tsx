import { setAlert } from "../../store/slices/uiSlice";
import { TPartialRepo } from "../../store/types/IRepo";
import RepoItem from "../RepoItem/RepoItem";
import Alert from "../UI/Alert/Alert";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useDelayAtion } from "../hooks/useDelayAction";
import styles from "./Repos.module.css";

const Repos = ({ repos }: { repos: TPartialRepo[] }): JSX.Element => {
  const { alertIsShown } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const { handleClick } = useDelayAtion(
    () => dispatch(setAlert(true)),
    () => dispatch(setAlert(false))
  );

  return (
    <>
      <ul className={styles.list}>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.item}>
            <RepoItem {...repo} onRepoClick={handleClick} />
          </li>
        ))}
      </ul>
      <Alert isActive={alertIsShown}>Готово!</Alert>
    </>
  );
};

export default Repos;
