import { Dispatch, SetStateAction } from 'react';

import { CheckboxWarpper, Checkbox, CustomCheckbox, CheckboxLabel } from './styles';

interface ICheckbox {
  checked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  id: string;
  name?: string;
  label: string;
}

const CheckboxInput = ({ checked, onChange, name, id, label }: ICheckbox) => {
  return (
    <CheckboxWarpper>
      <Checkbox type={'checkbox'} checked={checked} onChange={(e) => onChange(e.target.checked)} id={id} name={name} />
      <CustomCheckbox htmlFor={id} id={`custom-${id}`} />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxWarpper>
  );
};
export default CheckboxInput;
