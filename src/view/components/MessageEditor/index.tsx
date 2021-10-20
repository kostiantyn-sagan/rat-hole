// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useEnteredMessage } from '../../../bus/client/enteredMessage';

// Styles
import * as S from './styles';

type PropTypes = {
    updateMessage: (text: string) => void;
};

export const MessageEditor: FC<PropTypes> = ({ updateMessage }) => {
    const { setTogglerAction } = useTogglersRedux();

    const { enteredMessage, setInputFieldText, resetEnteredMessage }
    = useEnteredMessage();

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputFieldText(event.target.value);
    };

    const handleSubmit = () => {
        updateMessage(enteredMessage);

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
        <S.StyledMessageEditor>
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
