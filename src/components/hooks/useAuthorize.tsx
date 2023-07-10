import { setIsAuth, setToken } from "../../store/slices/authSlice";
import { TTokenSetAuth } from "../../store/types/TTokenSetAuth";

import { useAppDispatch } from "./hooks";

const useAuthorize = (): void => {
  const dispatch = useAppDispatch();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const codeParam = urlParams.get("code");

  const savedToken = localStorage.getItem("accessToken");
  if (savedToken) {
    dispatch(setToken(savedToken));
    dispatch(setIsAuth());

    return;
  }

  if (codeParam) {
    const getTokenSetAuth: TTokenSetAuth = async () => {
      await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
            dispatch(setToken(data.access_token));
            dispatch(setIsAuth());
          }
        })
        .catch((e) => {
          throw new Error(e);
        });
    };
    getTokenSetAuth();
  }
};

export default useAuthorize;
