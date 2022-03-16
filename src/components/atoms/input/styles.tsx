import styled from '@emotion/styled';
const ErrorMessage = styled.p`
  color: red;
  text-align: start;
  padding: 5px 0;
`;
interface Props {
  width: string;
  height: string;
}
const DefaultInput = styled.input<Props>`
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
`;
export { ErrorMessage, DefaultInput };
