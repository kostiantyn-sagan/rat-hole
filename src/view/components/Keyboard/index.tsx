// Core
import React, { MouseEvent } from 'react';

// Bus
import { useKeyboard } from '../../../bus/client/keyboard';

// Data
import { keyboardData } from './types';

// Styles
import * as S from './styles';

export const Keyboard = () => {
    const { setKeyboardText } = useKeyboard();
    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = keyboardData;

    const keyboardHandler = (event: MouseEvent) => {
        const btn = event.target as HTMLElement;
        console.log(btn.textContent);
        btn.textContent && setKeyboardText(btn.textContent);
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
