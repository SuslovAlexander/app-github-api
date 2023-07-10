import Container from "../../components/Layout/Container/Container";
import { useAppSelector } from "../../components/hooks/hooks";

const Authorization = (): JSX.Element => {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Container>
      <h1>
        {!token
          ? "Вы не авторизованы. Нажмите Войти в левом верхнем углу страницы"
          : "Вы авторизованы в системе!"}
      </h1>
    </Container>
  );
};

export default Authorization;
