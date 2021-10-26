// Core
import React, {
    FC,
    MouseEvent,
    useEffect,
    useState,
    MutableRefObject,
} from 'react';

// Bus
import { useEnteredMessage } from '../../../bus/client/enteredMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Data
import { keyboardData } from './types';

// Styles
import * as S from './styles';

// Types
import {
    PressedKeysState,
    PressedKey,
} from '../../../bus/client/pressedKeyboardKeys/types';

type PropTypes = {
    createMessage: (text: string) => void;
    pressedKeyboardKeys: PressedKeysState;
    setPressedKey: (key: PressedKey) => void;
    deletePressedKey: (key: PressedKey) => void;
    messageInputEl: MutableRefObject<HTMLInputElement | null>;
};

export const Keyboard: FC<PropTypes> = ({
    createMessage,
    pressedKeyboardKeys,
    setPressedKey,
    deletePressedKey,
    messageInputEl,
}) => {
    const {
        setTogglerAction,
        togglersRedux: { isEnKeyboardLayout },
    } = useTogglersRedux();

    const { enteredMessage, setKeyboardText, resetEnteredMessage }
    = useEnteredMessage();

    const [ isShiftPressed, setShiftPressedState ] = useState(false);

    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = keyboardData;

    const keydownHandler = (event: KeyboardEvent) => {
        messageInputEl?.current?.focus();

        setPressedKey(event.keyCode);
    };

    const keyupHandler = (event: KeyboardEvent) => {
        deletePressedKey(event.keyCode);
    };

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);
        window.addEventListener('keyup', keyupHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
            window.removeEventListener('keyup', keyupHandler);
        };
    }, []);

    const onKeyboardClick = (event: MouseEvent) => {
        const { textContent: keyPressed } = event.target as HTMLElement;

        if (!keyPressed) {
            return;
        }

        if (keyPressed === 'Enter' && enteredMessage === '') {
            return;
        }

        if (keyPressed === 'En' || keyPressed === 'Ру') {
            return isEnKeyboardLayout
                ? setTogglerAction({
                    type:  'isEnKeyboardLayout',
                    value: false,
                })
                : setTogglerAction({
                    type:  'isEnKeyboardLayout',
                    value: true,
                });
        }

        if (keyPressed === 'Shift') {
            return setShiftPressedState((prevState) => !prevState);
        }

        if (keyPressed === 'Enter') {
            createMessage(enteredMessage);
            resetEnteredMessage();

            return;
        }

        !isShiftPressed
            ? setKeyboardText(keyPressed)
            : setKeyboardText(keyPressed.toUpperCase());
    };

    return (
        <S.KeyboardContainer onClick = { onKeyboardClick }>
            <S.FirstRow>
                {firstRow.map(({ enCode, ruCode, keyCode }) => (
                    <S.Btn
                        backlight = { pressedKeyboardKeys.some((key) => `${key}` === keyCode) }
                        key = { ruCode }
                        type = 'button'>
                        {enCode}
                    </S.Btn>
                ))}
            </S.FirstRow>
            <S.SecondRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {secondRow.map(
                    ({ enCode, ruCode, keyCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            backlight = { pressedKeyboardKeys.some(
                                (key) => `${key}` === keyCode,
                            ) }
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.SecondRow>
            <S.ThirdRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {thirdRow.map(
                    ({ enCode, ruCode, keyCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            backlight = { pressedKeyboardKeys.some(
                                (key) => `${key}` === keyCode,
                            ) }
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.ThirdRow>
            <S.FourthRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {fourthRow.map(
                    ({ enCode, ruCode, keyCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            backlight = { pressedKeyboardKeys.some(
                                (key) => `${key}` === keyCode,
                            ) }
                            isShiftPressed = { isShiftPressed && enCode === 'Shift' }
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.FourthRow>
            <S.FifthRow>
                {fifthRow.map(({ enCode, ruCode, keyCode }) => (
                    <S.Btn
                        backlight = { pressedKeyboardKeys.some((key) => `${key}` === keyCode) }
                        key = { ruCode }
                        type = 'button'>
                        {isEnKeyboardLayout ? enCode : ruCode}
                    </S.Btn>
                ))}
            </S.FifthRow>
        </S.KeyboardContainer>
    );
};
