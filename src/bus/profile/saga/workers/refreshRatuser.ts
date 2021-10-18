// Core
import { put } from 'redux-saga/effects';
import localStore from 'store';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { profileActions } from '../../slice';

// Types
import { User } from '../../types';
import { FetchRefreshProfileContract } from '../types';

// Tools
import { API_URL } from '../../../../init';
import { makeRequest } from '../../../../tools/utils';

export function* refreshRatuser({
    payload: userId,
}: ReturnType<FetchRefreshProfileContract>) {
    const fetcher = async () => {
        const response = await fetch(`${API_URL}/users/refresh/${userId}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('refresh failed');
        }

        const result = await response.json();

        return result;
    };

    const result: User | null = yield makeRequest<User>({
        fetcher,
        succesAction:    profileActions.setUser,
        errorSideEffect: () => {
            localStore.clearAll();
        },
        togglerType: 'isProfileFetching',
    });

    if (result !== null) {
        yield put(togglerCreatorAction({ type: 'isLoggedIn', value: true }));
    }
}
