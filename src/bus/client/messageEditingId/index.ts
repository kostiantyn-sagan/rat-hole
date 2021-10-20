// Core
import { useDispatch } from 'react-redux';

// Actions
import { messageEditingIdActions } from './slice';

// Types
import { MessageEditingId } from './types';

// Hooks
export const useMessageEditingId = () => {
    const dispatch = useDispatch();

    return {
        setMessageEditingId: (text: MessageEditingId) => {
            return void dispatch(messageEditingIdActions.setMessageEditingId(text));
        },
    };
};
