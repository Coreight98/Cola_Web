import { Dispatch, SetStateAction } from 'react';

import CommonSection from '../index';

import { SectionContent } from './styles';

import CheckBox from '@components/atoms/checkbox';

interface IPolicyCheckProps {
  policyTitle: string;
  policyContent: string;
  policyCheck: boolean;
  setPolicyCheck: Dispatch<SetStateAction<boolean>>;
  checkLabel: string;
  checkboxId: string;
}

const PolicySection = ({
  policyTitle,
  policyContent,
  policyCheck,
  setPolicyCheck,
  checkboxId,
  checkLabel,
}: IPolicyCheckProps) => {
  return (
    <CommonSection title={policyTitle}>
      <>
        <SectionContent>{policyContent}</SectionContent>

        <CheckBox checked={policyCheck} onChange={setPolicyCheck} id={checkboxId} label={checkLabel} />
      </>
    </CommonSection>
  );
};
export default PolicySection;
