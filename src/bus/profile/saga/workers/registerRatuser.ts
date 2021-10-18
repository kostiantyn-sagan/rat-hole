// Core
import { put } from 'redux-saga/effects';
import localStore from 'store';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { profileActions } from '../../slice';

// Types
import { User } from '../../types';
import { FetchRegisterProfileContract } from '../types';

// Tools
import { API_URL } from '../../../../init';
import { makeRequest } from '../../../../tools/utils';

export function* registerRatuser({
    payload: username,
}: ReturnType<FetchRegisterProfileContract>) {
    const fetcher = async () => {
        const response = await fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        if (response.status !== 201) {
            throw new Error('register failed');
        }

        const result = await response.json();

        return result;
    };

    const result: User | null = yield makeRequest<User>({
        fetcher,
        succesAction:      profileActions.setUser,
        successSideEffect: (result) => {
            if (result) {
                localStore.set('userId', result._id);
            }
        },
        togglerType: 'isProfileFetching',
    });

    if (result !== null) {
        yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
    }
}
