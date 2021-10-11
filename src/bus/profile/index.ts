// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import localStorage from 'store';

// Redux
// import { useTogglersRedux } from '../client/togglers';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import {
    fetchRefreshProfileActionAsync,
    fetchRegisterProfileActionAsync,
} from './saga/actions';

// Actions
// import { profileActions } from './slice';

// Hooks
export const useProfile = () => {
    const dispatch = useDispatch();

    const { profile } = useSelector((state) => state);

    useEffect(() => {
        const userId: string | void = localStorage.get('userId');

        if (userId) {
            dispatch(fetchRefreshProfileActionAsync(userId));
        }
    }, []);

    return {
        profile,
        // isRefreshing
        registerUserAsync: (username: string) => void dispatch(fetchRegisterProfileActionAsync(username)),
    };
};
