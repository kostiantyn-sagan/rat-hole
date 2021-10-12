// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (state, action) => {
    return [ ...state, ...action.payload ];
};
