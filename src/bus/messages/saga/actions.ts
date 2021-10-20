// Types
import * as types from './types';

export const fetchMessagesActionAsync: types.FetchMessagesContract = () => ({
    type: types.FETCH_MESSAGES_ASYNC,
});

export const createMessageActionAsync: types.CreateMessageContract = (
    payload,
) => ({
    type: types.CREATE_MESSAGE_ASYNC,
    payload,
});

export const updateMessageActionAsync: types.UpdateMessageContract = (
    payload,
) => ({
    type: types.UPDATE_MESSAGE_ASYNC,
    payload,
});

export const deleteMessageActionAsync: types.DeleteMessageContract = () => ({
    type: types.DELETE_MESSAGE_ASYNC,
});
