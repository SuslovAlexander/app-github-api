import { useState } from "react";

import { GH_COLORS } from "../../const/ghLangColor";
import { addToFavorite } from "../../store/actions/addToFavorite";
import { removeFromFavorite } from "../../store/actions/removeFromFavorite";
import "../../store/slices/reposSlice";
import { useAppDispatch } from "../hooks/hooks";
import styles from "./RepoItem.module.css";
import Star from "./Star";

interface IRepoItemProps {
  id?: string;
  url?: string;
  name?: string;
  primaryLanguage?: string;
  viewerHasStarred?: boolean;
  onRepoClick: (value: boolean) => void;
}

const RepoItem = ({
  id,
  url,
  name,
  primaryLanguage,
  viewerHasStarred,
  onRepoClick,
}: IRepoItemProps): JSX.Element => {
  const [hasStar, setHasStar] = useState(viewerHasStarred);

  const dispatch = useAppDispatch();

  const handleStarClick = (): void => {
    if (!id) {
      return;
    }
    if (hasStar) {
      dispatch(removeFromFavorite(id));
      onRepoClick(false);
    } else {
      dispatch(addToFavorite(id));
      onRepoClick(true);
    }
    setHasStar((prev) => !prev);
  };

  const lalngIconStyle = primaryLanguage
    ? { backgroundColor: GH_COLORS[primaryLanguage].color }
    : {};

  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <a className={styles.title} href={url}>
          {name}
        </a>
        <div className={styles.language}>
          <div className={styles.round} style={lalngIconStyle}></div>
          <span>{primaryLanguage}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={handleStarClick}>
          <span>
            {hasStar ? "Забрать свою звезду (-1)" : "Добавить в избранное (+1)"}
          </span>
          <span className={styles.star}>
            {hasStar ? <Star fill="gold" /> : <Star />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default RepoItem;
