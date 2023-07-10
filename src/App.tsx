import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import useAuthorize from "./components/hooks/useAuthorize";
import Routing from "./pages";
import { getViewer } from "./store/slices/authSlice";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useAuthorize();

  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getViewer());
  }, [isAuth, dispatch]);

  return <Routing />;
};

export default App;
