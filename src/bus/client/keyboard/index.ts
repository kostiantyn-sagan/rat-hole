// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { keyboardActions } from './slice';

// Types
import { EnteredKeyboardText } from './types';

// Hooks
export const useKeyboard = () => {
    const dispatch = useDispatch();

    const enteredKeyboardText = useSelector(({ keyboard }) => keyboard);


    return {
        enteredKeyboardText,
        setKeyboardText: (text: EnteredKeyboardText) => void dispatch(keyboardActions.setKeyboardText(text)),
    };
};
