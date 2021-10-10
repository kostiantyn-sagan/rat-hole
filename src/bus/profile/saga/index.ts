// Core
import { useDispatch } from 'react-redux';
import localStore from 'store';

// Actions
import * as actions from './actions';

// Types
import { Ratuser } from '../types';

export const useAuth = () => {
    const dispatch = useDispatch();

    return {
        refreshRatuser: async () => {
            const ratuserId: Ratuser['_id'] | void = await localStore.get('ratuser');

            ratuserId && void dispatch(
                actions.refresh(ratuserId),
            );
        },
        registerRatuser: (username: Ratuser['username']) => void dispatch(
            actions.register(username),
        ),
    };
};
