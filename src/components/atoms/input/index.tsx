import { forwardRef } from 'react';

import { InputStyle } from './styles';

import { INPUT_TYPE } from '@constants/index';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'small', ...rest }, ref) => {
  return <InputStyle {...INPUT_TYPE[type as keyof typeof INPUT_TYPE]} ref={ref} {...rest} />;
});

Input.displayName = 'Input';

export default Input;
