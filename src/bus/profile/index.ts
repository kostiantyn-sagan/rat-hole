// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Redux
// import { useTogglersRedux } from '../client/togglers';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchProfileActionAsync } from './saga/actions';

// Actions
// import { profileActions } from './slice';

// Hooks
export const useProfile = () => {
    const dispatch = useDispatch();

    const { profile } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchProfileActionAsync());
    }, []);

    return {
        profile,
    };
};
