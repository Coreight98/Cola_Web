import styled from '@emotion/styled';

const CheckboxWarpper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const Checkbox = styled.input`
  content: none;
  display: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  outline: none;
  &:checked + label {
    background: #90a8f0;
  }
`;

const CustomCheckbox = styled.label`
  /* UI Properties */
  background: #fafbfd;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #90a8f0;
  border-radius: 5px;
  margin-top: 1px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  /* UI Properties */
  text-align: left;
  font-size: 16px;
  font-family: 'GmarketSans';
  letter-spacing: 0px;
  color: #aaaaaa;
  cursor: pointer;
`;

export { CheckboxWarpper, Checkbox, CustomCheckbox, CheckboxLabel };
