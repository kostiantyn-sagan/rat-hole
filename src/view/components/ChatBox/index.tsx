// Core
import React, { FC, useLayoutEffect, useRef } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/messages/types';

type PropTypes = {
    messages: Types.MessagesState;
};

export const ChatBox: FC<PropTypes> = ({ messages }) => {
    const chatBoxEl = useRef<null | HTMLUListElement>(null);
    useLayoutEffect(() => {
        if (chatBoxEl.current) {
            chatBoxEl.current.scrollTo({
                top: chatBoxEl.current.scrollHeight,
            });
        }
    }, [ messages[ 0 ]?._id ]);

    return (
        <S.StyledChatBox
            ref = { chatBoxEl }
            onMouseEnter = { () => { console.log('MouseEnter'); } }
            onMouseLeave = { () => { console.log('MouseLeave'); } }>
            {messages
                .map(({ _id, username, text, createdAt, updatedAt }) => (
                    <S.ChatBoxItem key = { _id }>
                        <S.Username>{username}</S.Username>
                        <S.Text>{text}</S.Text>
                        <S.Container>
                            {moment(createdAt).valueOf() !== moment(updatedAt).valueOf() && (
                                <S.StatusEdited>edited</S.StatusEdited>
                            )}
                            <S.Time>{moment(createdAt).format('LT')}</S.Time>
                        </S.Container>
                    </S.ChatBoxItem>
                ))
                .reverse()}
        </S.StyledChatBox>
    );
};
