import { ReactNode } from 'react';
import { ButtonStyle } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
