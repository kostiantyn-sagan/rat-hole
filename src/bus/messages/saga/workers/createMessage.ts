// Core
import { put, select } from 'redux-saga/effects';

// Redux
import { messagesActions } from '../../slice';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// // Tools
import { makeRequest } from '../../../../tools/utils';

// // Types
import { RootState } from '../../../../init/redux';
import { Message } from '../../types';
import { CreateMessageContract } from '../types';

export function* createMessage({
    payload: text,
}: ReturnType<CreateMessageContract>) {
    const { profile: ratuser }: RootState = yield select((state) => state);

    const result: Message | null = yield makeRequest<Message>({
        fetcher:      () => API.createMessage(text, ratuser.username ?? ''),
        togglerType:  'isMessageCreating',
        succesAction: messagesActions.createMessage,
    });
    if (result) {
        yield put(fetchMessagesActionAsync());
    }
}
