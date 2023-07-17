import useAuthorize from "./components/hooks/useAuthorize";
import Routing from "./pages";

const App = (): JSX.Element => {
  useAuthorize();

  return <Routing />;

};

export default App;
