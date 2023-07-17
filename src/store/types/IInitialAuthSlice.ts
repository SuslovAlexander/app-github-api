import { IUser } from "./IUser";

/**Интерфейс для auth слайса */
export interface IInitialAuthSlice {
  token: null | string;
  isAuth: boolean;
  user: any;
  isLoading: boolean;
  error: null | string;
}
