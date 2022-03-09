import { forwardRef } from 'react';

import { ErrorMessage } from './styles';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
      {error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
});
Input.displayName = 'Input';
export default Input;
