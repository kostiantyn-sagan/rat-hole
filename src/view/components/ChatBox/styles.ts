import styled from 'styled-components';

export const StyledChatBox = styled.ul`
  display: flex;
`;

export const ChatBoxItem = styled.li`
position: relative;
  max-width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Username = styled.p`
 margin-bottom: 10px;
 font-size: 14px;
 line-height: 1.14;
 color: #212121;
`;

export const Text = styled.p`
 font-size: 14px;
 line-height: 1.14;
 color:#212121;
`;

export const Container = styled.div`
`;

export const Time = styled.p`
 font-size: 14px;
 line-height: 1.14;
 color:#212121;
`;

export const StatusEdited = styled.p`
 font-size: 14px;
 line-height: 1.14;
 color:#212121'
`;

