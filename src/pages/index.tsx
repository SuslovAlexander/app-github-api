import { Route, Routes } from "react-router-dom";

import RequireAuth from "../components/hoks/RequireAuth";
import FavoritsPage from "./FavoritsPage/FavoritsPage";
import General from "./General/General";
import HomePage from "./HomePage/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <FavoritsPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;


