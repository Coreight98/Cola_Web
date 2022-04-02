import { forwardRef } from 'react';

import { InputStyle } from './styles';

import { INPUT_TYPE } from '@constants/index';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ref, type = 'small', ...props }) => {
  return <InputStyle {...INPUT_TYPE.small} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
