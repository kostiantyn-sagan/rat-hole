// Instruments
import * as types from './types';

export const fetchRegisterProfileActionAsync: types.FetchRegisterProfileContract = (payload) => ({
    type: types.FETCH_REGISTER_PROFILE_ASYNC,
    payload,
});

export const fetchRefreshProfileActionAsync: types.FetchRefreshProfileContract = (payload) => ({
    type: types.FETCH_REFRESH_PROFILE_ASYNC,
    payload,
});
