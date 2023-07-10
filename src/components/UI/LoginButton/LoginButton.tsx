import { ReactNode } from "react";

import styles from "./LoginButton.module.css";

interface ILoginButtonProps {
  children: ReactNode;
  apperanse?: "primary" | "huge";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const LoginButton = ({
  children,
  apperanse = "primary",
  onClick,
}: ILoginButtonProps): JSX.Element => {
  return (
    <button className={styles[apperanse]} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoginButton;
