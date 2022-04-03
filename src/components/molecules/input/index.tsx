import { forwardRef, ReactNode } from 'react';

import { Title, InputStyle, ErrorMessage } from './styles';

import { INPUT_TYPE } from '@constants/index';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: ReactNode;
  label?: string;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ children, label, error, type = 'small', ...props }, ref) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <Title>{label}</Title>
        <InputStyle {...INPUT_TYPE.small} ref={ref} {...props} />
        {children}
      </div>
      {error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
