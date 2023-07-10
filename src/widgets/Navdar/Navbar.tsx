import { Link, useMatch } from "react-router-dom";

import { useAppSelector } from "../../components/hooks/hooks";
import styles from "./Navbar.module.css";

const Navbar = (): JSX.Element => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const matchFavorites = useMatch(`/favorites`);
  const matchHome = useMatch(`/`);

  if (!isAuth) {
    return <></>;
  }

  return (
    <nav className={styles.navbar}>
      <Link to={"/favorites"} className={matchFavorites ? styles.active : ""}>
        Избранное
      </Link>
      <Link to={"/"} className={matchHome ? styles.active : ""}>
        Домой
      </Link>
    </nav>
  );
};

export default Navbar;
