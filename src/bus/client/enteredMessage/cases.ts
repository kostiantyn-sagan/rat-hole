// Initial state
import { initialState } from './slice';

// Types
import * as types from './types';

export const setKeyboardText: types.SetEnteredMessageContract = (
    state,
    action,
) => {
    if (action.payload.toLowerCase() === 'backspace') {
        return state.slice(0, -1);
    }

    if (action.payload.toLowerCase() === 'space') {
        return `${state} `;
    }

    return `${state + action.payload}`;
};

export const setInputFieldText: types.SetEnteredMessageContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const resetEnteredMessage: types.ResetEnteredMessageContract = () => {
    return initialState;
};
