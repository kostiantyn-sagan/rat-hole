// Core
import React, { FC, MouseEvent, useEffect, useState } from 'react';

// Bus
import { useEnteredMessage } from '../../../bus/client/enteredMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';


// Data
import { keyboardData } from './types';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    createMessage: (text: string) => void;
};

export const Keyboard: FC<PropTypes> = ({ createMessage }) => {
    const {
        setTogglerAction,
        togglersRedux: { isEnKeyboardLayout },
    } = useTogglersRedux();

    const { enteredMessage, setKeyboardText, resetEnteredMessage }
    = useEnteredMessage();

    const [ isShiftPressed, setShiftPressedState ] = useState(false);
    const [ pressedKeys, setPressedKeysState ] = useState<[] | number[]>([]);

    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = keyboardData;

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            console.log(event.keyCode);
            setPressedKeysState((prevState) => [ ...prevState, Number(event.code) ]);
        });

        window.addEventListener('keyup', (event) => {
            console.log(`отпустили ${event.code}`);
        });

        return () => {
            window.removeEventListener('keydown', () => void 0);
        };
    }, [  ]);

    const keyboardHandler = (event: MouseEvent) => {
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
        <S.KeyboardContainer
            onClick = { keyboardHandler }>
            <S.FirstRow>
                {firstRow.map(({ enCode, ruCode }) => (
                    <S.Btn
                        key = { ruCode }
                        type = 'button'>
                        {enCode}
                    </S.Btn>
                ))}
            </S.FirstRow>
            <S.SecondRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {secondRow.map(
                    ({ enCode, ruCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.SecondRow>
            <S.ThirdRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {thirdRow.map(
                    ({ enCode, ruCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.ThirdRow>
            <S.FourthRow isRuKeyboardLayout = { !isEnKeyboardLayout }>
                {fourthRow.map(
                    ({ enCode, ruCode }) => (enCode ?? !isEnKeyboardLayout) && (
                        <S.Btn
                            isShiftPressed = { isShiftPressed && enCode === 'Shift' }
                            key = { ruCode }
                            type = 'button'>
                            {isEnKeyboardLayout ? enCode : ruCode}
                        </S.Btn>
                    ),
                )}
            </S.FourthRow>
            <S.FifthRow>
                {fifthRow.map(({ enCode, ruCode }) => (
                    <S.Btn
                        key = { ruCode }
                        type = 'button'>
                        {isEnKeyboardLayout ? enCode : ruCode }
                    </S.Btn>
                ))}
            </S.FifthRow>
        </S.KeyboardContainer>
    );
};
