// Core
import { select } from 'redux-saga/effects';

// Redux
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// // Tools
import { makeRequest } from '../../../../tools/utils';

// // Types
import { RootState } from '../../../../init/redux';
import { Message } from '../../types';
import { CreateMessageContract } from '../types';

export function* createMessage({ payload: text }: ReturnType<CreateMessageContract>) {
    const { profile:  ratuser }: RootState = yield select((state) => state);


    yield makeRequest<Message>({
        fetcher:      () => API.createMessage(text, ratuser.username ?? ''),
        togglerType:  'isMessageCreating',
        succesAction: messagesActions.createMessage,
    });
}
