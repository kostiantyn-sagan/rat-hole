// Core
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding-top: 22px;
  padding-bottom: 22px;
  background-color: ${({ theme }) => theme.second.chatPageBg};
`;

export const CenteredContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ChatContainer = styled.div`
  max-width: 596px;
  margin-left: auto;
  margin-right: auto;
`;
