// Core
import { put } from 'redux-saga/effects';

// // Actions
// import { togglerCreatorAction } from '../../../client/togglers';
// import { profileActions } from '../../slice';

// // Tools
// import { makeRequest } from '../../../../tools/utils';
// import { API_URL } from '../../../../init';

// // Types
// import { RefreshRatUserContract } from '../types';

// export function* refreshRatuser({ payload: ratuserId }: ReturnType<RefreshRatUserContract>) {
//     const fetcher = async () => {
//         const response = await fetch(`${API_URL}/users/refresh/${ratuserId}`, {
//             method:  'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.status !== 200) {
//             throw new Error('refresh failed');
//         }

//         const result = await response.json();

//         return result;
//     };

//     const result: string | null = yield makeRequest({
//         fetcher,
//         togglerType:  'isProfileFetching',
//         succesAction: profileActions.setUser,
//         delay:        500,
//     });

//     if (result !== null) {
//         yield put(togglerCreatorAction({
//             type:  'isLoggedIn',
//             value: true,
//         }));
//     }
// }
