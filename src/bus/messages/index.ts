// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchMessagesActionAsync, createMessageActionAsync } from './saga/actions';

// eslint-disable-next-line init-declarations
let intervalId: ReturnType<typeof setInterval> | void = void 0;

// Hooks
export const useMessages = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        if (intervalId) {
            return void 0;
        }

        dispatch(fetchMessagesActionAsync());

        intervalId = setInterval(() => {
            dispatch(fetchMessagesActionAsync());
        }, 3000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return {
        ...selector,
        createMessageAsync: (text: string) => void dispatch(createMessageActionAsync(text)),
    };
};
