// Types
import * as types from './types';

export const setKeyboardText: types.SetKeyboardTextContract = (state, action) => {
    return `${state + action.payload}`;
};
