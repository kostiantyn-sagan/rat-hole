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

export function* deleteMessage() {
    const { messageEditingId: id }: RootState = yield select((state) => state);

    const result: boolean = yield makeRequest<boolean>({
        fetcher:     () => API.deleteMessage(id),
        togglerType: 'isMessageDeleting',
    });
    if (result) {
        yield put(fetchMessagesActionAsync());
    }
}
