export interface IInitialAuthSlice {
    token: null | string;
    isAuth: boolean;
    user: null | string;
    isLoading: boolean;
    error: null | string;
}
