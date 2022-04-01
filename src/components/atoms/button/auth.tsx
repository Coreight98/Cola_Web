import Button from './index';

import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const AuthBtn = styled(Button)`
  border-radius: 5px;
  box-shadow: 0px 0px 5px #00000029;
  min-width: 4vw;
  height: 4vh;
  margin: 0.2vmin;
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: ${theme.colors.VeryLightBlue};
`;

export default AuthBtn;
