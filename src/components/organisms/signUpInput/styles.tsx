import styled from '@emotion/styled';
import { FlexDiv } from '@styles/index';
import { theme } from '@styles/theme';

const Title = styled.h3`
  margin-top: 1vh;
  color: ${theme.colors.blue['400']};
  width: 8vw;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-left: 8vw;
  text-align: start;
  padding: 5px 0;
`;

const Wrapper = styled(FlexDiv)`
  align-items: center;
`;

const InputStyle = styled.input`
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.shadow};
  border: none;
  padding-left: 1rem;
  min-width: 350px;
  min-height: 60px;
`;
export { Title, ErrorMessage, Wrapper, InputStyle };
