import styled from '@emotion/styled';

import Button from './index';

import Google from 'public/google_button.svg';
import Github from 'public/github_button.svg';

import { theme } from '@styles/theme';

const LoginBtnStyle = styled(Button)`
  display: flex;
  border-radius: 43px;
  box-shadow: 0px 0px 5px #00000029;
  min-width: 16vw;
  max-height: 6vh;
  justify-content: center;
  column-gap: 2vmin;
  align-items: center;
  background-color: white;
  p {
    color: ${theme.colors.VeryLightBlue};
    font-size: 2rem;
    font-weight: 600;
  }
  svg {
    width: 4vmin;
    height: 4vmin;
  }
`;

const LoginBtn = ({ type }: { type: 'google' | 'github' }) => {
  return (
    <LoginBtnStyle>
      {type === 'google' && <Google />}
      {type === 'github' && <Github />}
      <p>LOGIN</p>
    </LoginBtnStyle>
  );
};

export default LoginBtn;
