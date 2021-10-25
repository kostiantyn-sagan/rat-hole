// Types
import * as types from './types';

export const setPressedKey: types.SetPressedKeyContract = (
    state,
    action,
) => {
    console.log('in action');
    const isPressedKey = state.find((key) => key === action.payload);
    console.log('in action', isPressedKey);
    if (isPressedKey) {
        return state;
    }

    return [ ...state, action.payload ];
};

export const deletePressedKey: types.DeletePressedKeyContract = (state, action) => {
    return state.filter((key) => key !== action.payload);
};
