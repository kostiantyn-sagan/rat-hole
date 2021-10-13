// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import { fetchMessagesActionAsync, createMessageActionAsync } from './saga/actions';

// Hooks
export const useMessages = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(fetchMessagesActionAsync());
        }, 3000);

        return () => {
            console.log('Это функция очистки перед следующим вызовом useEffect', intervalId);
            clearInterval(intervalId);
        };
    }, []);

    return {
        ...selector,
        createMessageAsync: (text: string) => void dispatch(createMessageActionAsync(text)),
    };
};
