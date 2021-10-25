// Core
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Actions
import { pressedKeyboardKeysActions } from './slice';

// Types
import { PressedKey } from './types';

// Hooks
export const usePressedKeyboardKeys = () => {
    const dispatch = useDispatch();

    const pressedKeyboardKeys = useSelector(({ pressedKeyboardKeys }) => pressedKeyboardKeys);

    return {
        pressedKeyboardKeys,
        setPressedKey:    (key: PressedKey) => void dispatch(pressedKeyboardKeysActions.setPressedKey(key)),
        deletePressedKey: (key: PressedKey) => void dispatch(pressedKeyboardKeysActions.deletePressedKey(key)),
    };
};
