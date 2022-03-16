import { forwardRef } from 'react';

import { ErrorMessage, DefaultInput } from './styles';

import { INPUT_TYPE } from '@constants/index';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
  type?: keyof typeof INPUT_TYPE;
  width?: string;
  height?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, type, ...props }, ref) => {
  return (
    <div>
      <DefaultInput {...INPUT_TYPE[type ?? 'small']} ref={ref} {...props} />
      {error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
