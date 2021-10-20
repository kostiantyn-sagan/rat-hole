// Core
import { put, select } from 'redux-saga/effects';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// // Tools
import { makeRequest } from '../../../../tools/utils';

// // Types
import { RootState } from '../../../../init/redux';
import { Message } from '../../types';
import { UpdateMessageContract } from '../types';

export function* updateMessage({
    payload: text,
}: ReturnType<UpdateMessageContract>) {
    const { messageEditingId: id }: RootState = yield select((state) => state);

    const result: Message | null = yield makeRequest<Message>({
        fetcher:     () => API.updateMessage(text, id),
        togglerType: 'isMessageUpdating',
    });
    if (result) {
        yield put(fetchMessagesActionAsync());
    }
}
