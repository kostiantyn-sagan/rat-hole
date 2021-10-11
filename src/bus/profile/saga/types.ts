// Fetch
export const FETCH_PROFILE_ASYNC = 'FETCH_PROFILE_ASYNC';
export type FetchProfileActionAsync = {
    type: typeof FETCH_PROFILE_ASYNC;
};
export type FetchProfileContract = () => FetchProfileActionAsync
