// Core
import { put, call } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';
import { errorsActions } from '../../../client/errors';
import { profileActions } from '../../slice';

// Types
import { UserState } from '../../types';

// Tools
import { API_URL } from '../../../../init';
import { IControlledError } from '../../../../tools/utils';


export function* registerRatuser() {
    try {
        // ------------- SUCCESS BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isProfileFetching',
            value: true,
        }));

        const fetcher = async () => {
            console.log('in fetcher');
            console.log(API_URL);
            const response = await fetch(`${API_URL}/users/register`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'RAT:91EA0' }),
            });
            console.log('это response', response);

            if (response.status !== 201) {
                throw new Error('refresh failed');
            }

            const result = await response.json();

            return result;
        };

        const result: UserState = yield call(fetcher);

        if (result) {
            yield put(profileActions.setUser(result));
        }
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        const controlledError = error as IControlledError;
        yield put(errorsActions.setControlledError(controlledError));
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        yield put(togglerCreatorAction({
            type:  'isProfileFetching',
            value: false,
        }));
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
        // ------------- FINALLY BLOCK END -------------
    }
}

// // Core
// import { put } from 'redux-saga/effects';

// // Actions
// import { togglerCreatorAction } from '../../../client/togglers';
// import { profileActions } from '../../slice';

// // Tools
// import { makeRequest } from '../../../../tools/utils';
// import { API_URL } from '../../../../init';

// // Types
// import { FetchProfileContract } from '../types';

// export function* registerRatuser(ratuserName: ReturnType<FetchProfileContract>) {
//     const fetcher = async () => {
//         const response = await fetch(`${API_URL}/users/register`, {
//             method:  'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username: ratuserName }),
//         });

//         if (response.status !== 201) {
//             throw new Error('refresh failed');
//         }

//         const result = await response.json();

//         return result;
//     };

//     const result: string | null = yield makeRequest({
//         fetcher,
//         togglerType:  'isProfileFetching',
//         succesAction: profileActions.setUser,
//     });

//     if (result !== null) {
//         yield put(togglerCreatorAction({
//             type:  'isLoggedIn',
//             value: true,
//         }));
//     }
// }
