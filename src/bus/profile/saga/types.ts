// Fetch
export const FETCH_REGISTER_PROFILE_ASYNC = 'FETCH_REGISTER_PROFILE_ASYNC';
export type FetchRegisterProfileContract = (payload: string) => {
    type: typeof FETCH_REGISTER_PROFILE_ASYNC;
    payload: string;
};

export const FETCH_REFRESH_PROFILE_ASYNC = 'FETCH_REFRESH_PROFILE_ASYNC';
export type FetchRefreshProfileContract = (payload: string) => {
    type: typeof FETCH_REFRESH_PROFILE_ASYNC;
    payload: string;
};
