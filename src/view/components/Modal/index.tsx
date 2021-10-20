// Core
import React, { FC, MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useEnteredMessage } from '../../../bus/client/enteredMessage';

// Styles
import * as S from './styles';

type PropTypes = {
    children: ReactNode;
};

const modalRoot = document.querySelector('#modal-root');

export const Modal: FC<PropTypes> = ({ children }) => {
    const { setTogglerAction } = useTogglersRedux();

    const { resetEnteredMessage } = useEnteredMessage();

    const handleBackdropClick = (event: MouseEvent) => {
        if (event.currentTarget === event.target) {
            setTogglerAction({
                type:  'showModal',
                value: false,
            });

            setTogglerAction({
                type:  'isMessageEditing',
                value: false,
            });

            setTogglerAction({
                type:  'isMessageDeleting',
                value: false,
            });

            resetEnteredMessage();
        }
    };

    return createPortal(
        <S.Backdrop onClick = { handleBackdropClick }>
            <S.Content>{children}</S.Content>
        </S.Backdrop>,
        modalRoot as Element,
    );
};
