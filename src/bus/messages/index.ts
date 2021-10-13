// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchMessagesActionAsync, createMessageActionAsync } from './saga/actions';

// Types
// import { MessagesState } from './types';

// Interfaces
// import { messagesActions } from './slice';

// Hooks
export const useMessages = (isFetching = false) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        if (isFetching) {
            setInterval(() => {
                dispatch(fetchMessagesActionAsync());
            }, 5000);
        }
    }, []);

    return {
        ...selector,
        createMessageAsync: (text: string) => void dispatch(createMessageActionAsync(text)),
    };
};
