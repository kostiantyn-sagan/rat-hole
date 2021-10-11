// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchMessages } from '../../bus/messages/saga';
import { watchProfile } from '../../bus/profile/saga';

export function* rootSaga() {
    yield all([ watchMessages(), watchProfile() ]);
}
