import { Dispatch, SetStateAction } from 'react';

import { CheckboxWarpper, Checkbox, CustomCheckbox, CheckboxLabel } from './styles';

interface ICheckbox {
  checked: boolean;
  setCheck: Dispatch<SetStateAction<boolean>>;
  checkboxId: string;
  checkboxName?: string;
  checkboxLabel: string;
}

const CheckboxInput = ({ checked, setCheck, checkboxName, checkboxId, checkboxLabel }: ICheckbox) => {
  return (
    <CheckboxWarpper>
      <Checkbox
        type={'checkbox'}
        checked={checked}
        onChange={(e) => setCheck(e.currentTarget.checked)}
        id={checkboxId}
        name={checkboxName}
      />
      <CustomCheckbox htmlFor={checkboxId} id={`custom-${checkboxId}`} />
      <CheckboxLabel htmlFor={checkboxId}>{checkboxLabel}</CheckboxLabel>
    </CheckboxWarpper>
  );
};
export default CheckboxInput;
