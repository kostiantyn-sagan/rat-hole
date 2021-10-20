// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import messages from '../../bus/messages/slice';
import profile from '../../bus/profile/slice';
import enteredMessage from '../../bus/client/enteredMessage/slice';
import messageEditingId from '../../bus/client/messageEditingId/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        messages,
        profile,
        enteredMessage,
        messageEditingId,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
