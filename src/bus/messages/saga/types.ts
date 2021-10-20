// Types
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync;

export const CREATE_MESSAGE_ASYNC = 'CREATE_MESSAGE_ASYNC';
export type CreateMessageContract = (payload: string) => {
    type: typeof CREATE_MESSAGE_ASYNC;
    payload: string;
};

export const UPDATE_MESSAGE_ASYNC = 'UPDATE_MESSAGE_ASYNC';
export type UpdateMessageContract = (payload: string) => {
    type: typeof UPDATE_MESSAGE_ASYNC;
    payload: string;
};

export const DELETE_MESSAGE_ASYNC = 'DELETE_MESSAGE_ASYNC';
export type DeleteMessageContract = () => {
    type: typeof DELETE_MESSAGE_ASYNC;
};
