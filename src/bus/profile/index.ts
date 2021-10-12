// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import localStore from 'store';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import {
    fetchRefreshProfileActionAsync,
    fetchRegisterProfileActionAsync,
} from './saga/actions';

// Actions
import { profileActions } from './slice';

// Hooks
export const useProfile = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();

    const { profile } = useSelector((state) => state);

    useEffect(() => {
        const userId: string | void = localStore.get('userId');

        if (userId) {
            dispatch(fetchRefreshProfileActionAsync(userId));
        }
    }, []);

    const logout = () => {
        localStore.clearAll();

        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });

        dispatch(profileActions.clearUser());
    };

    return {
        profile,
        logout,
        // isRefreshing
        registerUserAsync: (username: string) => void dispatch(fetchRegisterProfileActionAsync(username)),
    };
};
