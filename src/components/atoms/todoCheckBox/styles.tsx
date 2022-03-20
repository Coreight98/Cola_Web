import styled from '@emotion/styled';

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 6vw;
  column-gap: 1vw;
  align-items: center;
  background: #ecdbba;
  padding: 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const CheckBox = styled.div<{ typeColor: string }>`
  min-width: 1rem;
  min-height: 1rem;
  border-radius: 0.6vmin;
  border: 1px solid;
  background-color: ${({ typeColor }) => typeColor};
`;
export { CheckBoxWrapper, CheckBox };
