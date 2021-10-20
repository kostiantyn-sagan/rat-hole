// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    fetchMessages,
    createMessage,
    updateMessage,
    deleteMessage,
} from './workers';

function* watchFetchMessages(): SagaIterator {
    yield takeEvery(types.FETCH_MESSAGES_ASYNC, fetchMessages);
}

function* watchCreateMessage(): SagaIterator {
    yield takeEvery(types.CREATE_MESSAGE_ASYNC, createMessage);
}

function* watchUpdateMessage(): SagaIterator {
    yield takeEvery(types.UPDATE_MESSAGE_ASYNC, updateMessage);
}

function* watchDeleteMessage(): SagaIterator {
    yield takeEvery(types.DELETE_MESSAGE_ASYNC, deleteMessage);
}

export function* watchMessages(): SagaIterator {
    yield all([
        call(watchFetchMessages),
        call(watchCreateMessage),
        call(watchUpdateMessage),
        call(watchDeleteMessage),
    ]);
}
