import { Dispatch, SetStateAction } from 'react';

import CommonSection from '../index';

import { SectionContent } from './styles';

import CheckBox from '@components/atoms/checkbox';

interface IPolicyCheckProps {
  policyTitle: string;
  policyContent: string;
  checked: boolean;
  setCheck: Dispatch<SetStateAction<boolean>>;
  checkboxLabel: string;
  checkboxId: string;
}

const PolicySection = ({ policyTitle, policyContent, ...rest }: IPolicyCheckProps) => {
  return (
    <CommonSection title={policyTitle}>
      <>
        <SectionContent>{policyContent}</SectionContent>
        <CheckBox {...rest} />
      </>
    </CommonSection>
  );
};
export default PolicySection;
