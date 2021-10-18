// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (state, action) => {
    return action.payload;
};

export const createMessage: types.CreateMessagesContract = (state, action) => {
    return [ action.payload, ...state ];
};
