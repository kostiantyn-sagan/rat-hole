// Core
import React, { FC, useEffect, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

type PropTypes = {
    children: ReactNode;
};

const modalRoot = document.querySelector('#modal-root');

export const Modal: FC<PropTypes> = ({ children }) => {
    const { setTogglerAction } = useTogglersRedux();

    // const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    //     if (event.code === 'Escape') {
    //         console.log('Нажали ESC, нужно закрыть модалку');
    //         setTogglerAction({
    //             type:  'showModal',
    //             value: false,
    //         });
    //     }
    // };

    useEffect(() => {
        console.log('Modal did mount');
        // window.addEventListener('keydown', (event) => void handleKeyDown(event));

        return () => {
            console.log('Modal will unmount');
            // window.removeEventListener('keydown', (event) => void handleKeyDown(event));
        };
    }, []);


    const handleBackdropClick = (event: MouseEvent) => {
        if (event.currentTarget === event.target) {
            setTogglerAction({
                type:  'showModal',
                value: false,
            });
        }
    };

    return createPortal(
        <S.Backdrop onClick = { handleBackdropClick }>
            <S.Content>{children}</S.Content>
        </S.Backdrop>,
        modalRoot as Element,
    );
};
