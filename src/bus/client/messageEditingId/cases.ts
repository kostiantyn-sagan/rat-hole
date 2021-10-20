// Types
import * as types from './types';

export const setMessageEditingId: types.SetMessageEditingIdContract = (
    ...args
) => {
    const [ , action ] = args;

    return action.payload;
};
