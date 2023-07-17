import { ReactNode } from "react";

import { useAppSelector } from "../hooks/hooks";
import NotAuthorized from "../NotAuthorized/NotAuthorized";


const RequireAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  const { isAuth } = useAppSelector((state) => state.auth);


  if (!isAuth) {
    return (
      <NotAuthorized text="Похоже, что вы не авторизованы! Нажмите `Войти`" />
    );
  }
 
  return <>{children}</>;

};

export default RequireAuth;
