import styled from '@emotion/styled';

import Button from './index';

import Google from 'public/google_button.svg';
import Github from 'public/github_button.svg';

import { theme } from '@styles/theme';

const LoginBtnStyle = styled(Button)`
  display: flex;
  border-radius: 4rem;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.shadow};
  min-width: 14rem;
  max-height: 3rem;
  justify-content: center;
  column-gap: 1rem;
  align-items: center;
  background-color: white;
  p {
    color: ${theme.colors.blue[500]};
    font-size: 2rem;
    font-weight: 600;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const LoginBtn = ({ type, onClick }: { type: 'google' | 'github'; onClick: () => void }) => {
  return (
    <LoginBtnStyle onClick={onClick}>
      {type === 'google' && <Google />}
      {type === 'github' && <Github />}
      <p>{type === 'google' ? 'Google' : 'Github'}</p>
    </LoginBtnStyle>
  );
};

export default LoginBtn;
