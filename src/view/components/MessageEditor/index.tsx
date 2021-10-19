// Core
import React, { ChangeEvent } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useEnteredMessage } from '../../../bus/client/enteredMessage';

// Styles
import * as S from './styles';

export const MessageEditor = () => {
    const { setTogglerAction } = useTogglersRedux();

    const { enteredMessage, setInputFieldText, resetEnteredMessage }
    = useEnteredMessage();

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event);
        setInputFieldText(event.target.value);
    };

    const handleSubmit = () => {
        console.log('fetch update message');

        setTogglerAction({
            type:  'showModal',
            value: false,
        });

        setTogglerAction({
            type:  'isMessageEditing',
            value: false,
        });

        resetEnteredMessage();
    };

    return (
        <S.StyledMessageEditor >
            <S.Textarea
                value = { enteredMessage }
                onChange = { handleChange }>
            </S.Textarea>
            <S.Btn
                type = 'button'
                onClick = { handleSubmit }>
                Save
            </S.Btn>
        </S.StyledMessageEditor>
    );
};
