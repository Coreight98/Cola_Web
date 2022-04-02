import styled from '@emotion/styled';
const ErrorMessage = styled.p`
  color: red;
  margin-left: 8vw;
  text-align: start;
  padding: 5px 0;
`;
interface Props {
  width: string | number;
  height: string | number;
}
const InputStyle = styled.input<Props>`
  box-shadow: 0px 0px 5px #00000029;
  border: none;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
`;
export { ErrorMessage, InputStyle };
