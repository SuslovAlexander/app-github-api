export interface IInitialAuthSlice {
  token: null | string;
  isAuth: boolean;
  user: any;
  isLoading: boolean;
  error: null | string;
}
