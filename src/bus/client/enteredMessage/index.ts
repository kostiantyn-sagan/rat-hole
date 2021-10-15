// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { enteredMessageActions } from './slice';

// Types
import { EnteredMessage } from './types';

// Hooks
export const useEnteredMessage = () => {
    const dispatch = useDispatch();

    const enteredMessage = useSelector(({ enteredMessage }) => enteredMessage);

    return {
        enteredMessage,
        setKeyboardText:     (text: EnteredMessage) => void dispatch(enteredMessageActions.setKeyboardText(text)),
        setInputFieldText:   (text: EnteredMessage) => void dispatch(enteredMessageActions.setInputFieldText(text)),
        resetEnteredMessage: () => void dispatch(enteredMessageActions.resetEnteredMessage()),
    };
};
