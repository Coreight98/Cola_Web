import { forwardRef, ReactNode } from 'react';

import { InputStyle, ErrorMessage } from './styles';

import { INPUT_TYPE } from '@constants/index';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: ReactNode;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ children, error, type = 'small', ...props }, ref) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {children}
        <InputStyle {...INPUT_TYPE.small} ref={ref} {...props} />
      </div>
      {error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
});

Input.displayName = 'Input';

export default Input;
