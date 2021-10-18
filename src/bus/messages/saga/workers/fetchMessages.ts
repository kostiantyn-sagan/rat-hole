// Core
import { put, select } from 'redux-saga/effects';
import { isEqual } from 'lodash';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { MessagesState } from '../../types';
import { RootState } from '../../../../init';

export function* fetchMessages() {
    const { messages }: RootState = yield select((state) => state);
    const newMessages: MessagesState | null = yield makeRequest<MessagesState>({
        fetcher: API.fetchMessages,
    });

    if (newMessages !== null && !isEqual(messages, newMessages)) {
        yield put(messagesActions.setMessages(newMessages));
    }
}
