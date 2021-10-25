import styled from 'styled-components';

export const KeyboardContainer = styled.div`
margin-bottom: 10px;
  padding: 1px;
  background-color: #000000;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const SecondRow = styled.div<{ isRuKeyboardLayout: boolean }>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  ${(props) => props.isRuKeyboardLayout && {
        gridTemplateColumns: 'repeat(11, 1fr)',
    }
}
`;

export const ThirdRow = styled.div<{ isRuKeyboardLayout: boolean }>`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  ${(props) => props.isRuKeyboardLayout && {
        gridTemplateColumns: 'repeat(11, 1fr)',
    }
}
`;

export const FourthRow = styled.div<{ isRuKeyboardLayout: boolean }>`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  ${(props) => props.isRuKeyboardLayout && {
        gridTemplateColumns: 'repeat(11, 1fr)',
    }
}
`;

export const FifthRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 50% repeat(2, 1fr);
`;

export const Btn = styled.button<{ isShiftPressed?: boolean, backlight: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 2px;
  padding: 4px;
  font-size: 12px;
  letter-spacing: 0.01em;
  color: #ffffff;
  background-color: #757575;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) => props.isShiftPressed && { color: '#757575', backgroundColor: '#ffffff' }};

  ${(props) => props.backlight && { color: '#757575', backgroundColor: '#ffffff' }};

  :hover,
  :focus {
    color: #757575;
    background-color: #ffffff;
  }

  :active {
    color: #ffffff;
    background-color: #ff874d;
  }
`;
