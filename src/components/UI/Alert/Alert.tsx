import { ReactNode } from "react";

import styles from "./Alert.module.css";

const Alert = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive?: boolean;
}): JSX.Element => {
  const alertClasses = `${styles.alert} ${isActive ? styles.active : ""}`;

  return <div className={alertClasses}>{children}</div>;
};

export default Alert;
