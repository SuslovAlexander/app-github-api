import { GH_COLORS } from "../../const/ghLangColor";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/slices/reposSlice";

import { useAppDispatch } from "../hooks/hooks";

import Star from "./Star";

import styles from "./RepoItem.module.css";
import { TPartialRepo } from "../../store/types/IRepo";

const RepoItem = ({
  id,
  url,
  name,
  primaryLanguage,
  viewerHasStarred,
}: TPartialRepo): JSX.Element => {



  const dispatch = useAppDispatch();

  const handleStarClick = (): void => {
    if (!id) {
      return;
    }
    if (viewerHasStarred) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  const lalngIconStyle = primaryLanguage ? { backgroundColor: GH_COLORS[primaryLanguage].color } : {};

  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <a className={styles.title} href={url}>
          {name}
        </a>
        <div className={styles.language}>
          <div
            className={styles.round}
            style={lalngIconStyle}
          ></div>
          <span>{primaryLanguage}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={handleStarClick}>
          <span>
            {viewerHasStarred
              ? "Забрать свою звезду (-1)"
              : "Добавить в избранное (+1)"}
          </span>
          <span className={styles.star}>
            <Star />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RepoItem;
