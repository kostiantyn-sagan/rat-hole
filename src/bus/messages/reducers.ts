// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (state, action) => {
    return action.payload;
};

export const createMessage: types.CreateMessageContract = (state, action) => {
    return [ action.payload, ...state ];
};

export const updateMessage: types.UpdateMessageContract = (state, action) => {
    return [ action.payload, ...state ];
};
