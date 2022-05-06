import { ReactNode } from 'react';

import styled from '@emotion/styled';
// import { ButtonStyle } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const ButtonStyle = styled.button`
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;


const Button = ({ children, ...props }: Props) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
