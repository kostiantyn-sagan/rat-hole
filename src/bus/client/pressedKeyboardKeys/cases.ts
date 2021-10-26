// Types
import * as types from './types';

export const setPressedKey: types.SetPressedKeyContract = (state, action) => {
    const isPressedKey = state.find((key) => key === action.payload);

    if (isPressedKey) {
        return state;
    }

    return [ ...state, action.payload ];
};

export const deletePressedKey: types.DeletePressedKeyContract = (
    state,
    action,
) => {
    return state.filter((key) => key !== action.payload);
};
