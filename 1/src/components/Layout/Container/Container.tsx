import { ReactNode } from "react";

import styles from "./Container.module.css";

const Container = ({ children }: { children?: ReactNode }): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
