// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

//  Workers
import {
    registerRatuser,
    refreshRatuser,
} from './workers';

function* watchRegisterUser(): SagaIterator {
    yield takeEvery(types.FETCH_REGISTER_PROFILE_ASYNC, registerRatuser);
}
function* watchRefreshUser(): SagaIterator {
    yield takeEvery(types.FETCH_REFRESH_PROFILE_ASYNC, refreshRatuser);
}

export function* watchProfile(): SagaIterator {
    yield all([ call(watchRegisterUser), call(watchRefreshUser) ]);
}

// // Core
// import { useDispatch } from 'react-redux';
// import localStore from 'store';

// // // Actions
// // import * as actions from './actions';

// // // Types
// // import { Ratuser } from '../types';

// // export const useAuth = () => {
// //     const dispatch = useDispatch();

// //     return {
// //         refreshRatuser: async () => {
// //             const ratuserId: Ratuser['_id'] | void = await localStore.get('ratuser');

// //             ratuserId && void dispatch(
// //                 actions.refresh(ratuserId),
// //             );
// //         },
// //         registerRatuser: (username: Ratuser['username']) => void dispatch(
// //             actions.register(username),
// //         ),
// //     };
// // };

