import { Outlet } from "react-router";

import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";
import styles from "./General.module.css";

const General = (): JSX.Element => {
  return (
    <div className={styles.general}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default General;
