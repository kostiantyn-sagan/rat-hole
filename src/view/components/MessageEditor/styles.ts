import styled from 'styled-components';

export const StyledMessageEditor = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #212121;
  border-radius: 4px;
  margin-bottom: 20px;
  font-family: Roboto, sans-serif;
`;

export const Textarea = styled.textarea`
  height: (16px * 3) + 24px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;

export const Btn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #ff874d;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #1976d2;
  }

  :active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
