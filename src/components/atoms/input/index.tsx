import { forwardRef } from 'react';

import { ErrorMessage } from 'src/pages/login/styles';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
});
Input.displayName = 'Input';
export default Input;
