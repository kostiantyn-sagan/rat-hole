import styled from 'styled-components';

export const StyledChatBox = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  height: 430px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  border: 1px solid #b2dbbf;
  padding: 10px 30px;
  font-family: Roboto, sans-serif;
  background-image: linear-gradient(
    to bottom,
    rgba(243, 255, 189, 1) 0%,
    rgba(178, 219, 191, 1) 35%,
    rgba(112, 193, 179, 1) 100%
  );
`;

export const ChatBoxItem = styled.li`
  position: relative;
  min-width: 200px;
  max-width: 100%;
  margin-right: auto;
  border-radius: 6px;
  padding: 8px 10px;
  overflow-wrap: break-word;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Username = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: #ff1654;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.02em;
  color: #212121;
`;

export const Container = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
`;

export const Time = styled.p`
  font-size: 10px;
  letter-spacing: 0.01em;
  color: rgba(47, 48, 58, 0.8);
`;

export const StatusEdited = styled.p`
  margin-right: 4px;
  font-size: 10px;
  letter-spacing: 0.01em;
  color: rgba(47, 48, 58, 0.8);
`;
