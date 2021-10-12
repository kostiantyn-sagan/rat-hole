// Types
import * as types from './types';

// Initial state
import { initialState } from './slice';

export const setUser: types.SetUserContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const clearUser: types.ClearUserContract = () => {
    return initialState;
};
