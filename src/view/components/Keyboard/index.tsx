// Core
import React, { FC, MouseEvent, useState } from 'react';

// Bus
import { useEnteredMessage } from '../../../bus/client/enteredMessage';

// Data
import { keyboardData } from './types';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    createMessage: (text: string) => void;
};

export const Keyboard: FC<PropTypes> = ({ createMessage }) => {
    const { enteredMessage, setKeyboardText, resetEnteredMessage }
    = useEnteredMessage();

    const [ isShiftPressed, setShiftPressedState ] = useState(false);

    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = keyboardData;

    const keyboardHandler = (event: MouseEvent) => {
        const { textContent: keyPressed } = event.target as HTMLElement;

        if (!keyPressed) {
            return;
        }

        if (keyPressed === 'Enter' && enteredMessage === '') {
            return;
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
        <S.KeyboardContainer onClick = { keyboardHandler }>
            <S.FirstRow>
                {firstRow.map(({ enCode }) => (
                    <S.Btn
                        key = { enCode }
                        type = 'button'>
                        {enCode}
                    </S.Btn>
                ))}
            </S.FirstRow>
            <S.SecondRow>
                {secondRow.map(
                    ({ enCode }) => enCode && (
                        <S.Btn
                            key = { enCode }
                            type = 'button'>
                            {enCode}
                        </S.Btn>
                    ),
                )}
            </S.SecondRow>
            <S.ThirdRow>
                {thirdRow.map(
                    ({ enCode }) => enCode && (
                        <S.Btn
                            key = { enCode }
                            type = 'button'>
                            {enCode}
                        </S.Btn>
                    ),
                )}
            </S.ThirdRow>
            <S.FourthRow>
                {fourthRow.map(
                    ({ enCode }) => enCode && (
                        <S.Btn
                            isShiftPressed = { isShiftPressed && enCode === 'Shift' }
                            key = { enCode }
                            type = 'button'>
                            {enCode}
                        </S.Btn>
                    ),
                )}
            </S.FourthRow>
            <S.FifthRow>
                {fifthRow.map(({ enCode }) => (
                    <S.Btn
                        key = { enCode }
                        type = 'button'>
                        {enCode}
                    </S.Btn>
                ))}
            </S.FifthRow>
        </S.KeyboardContainer>
    );
};
