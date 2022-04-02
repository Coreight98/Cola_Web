import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Title = styled.h3`
  margin-top: 1vh;
  color: ${theme.colors.JordyBlue};
  width: 8vw;
`;

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
export { Title, ErrorMessage, InputStyle };
