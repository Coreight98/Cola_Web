import { useState, useEffect } from 'react';

import { Container, Title, PolicyWrapper, NextBtn } from './styles';

import PolicySection from '@components/molecules/section/PolicySection';
import { policyDummy1, policyDummy2 } from '@constants/singupPolicy';

const SignUpPolicy = () => {
  const [policy1, setPolicy1] = useState(false);
  const [policy2, setPolicy2] = useState(false);

  useEffect(() => {
    console.log('change policy1', policy1);
  }, [policy1]);
  useEffect(() => {
    console.log('change policy2', policy2);
  }, [policy2]);
  return (
    <Container>
      <Title>SIGN UP</Title>
      <PolicyWrapper>
        <PolicySection
          policyCheck={policy1}
          setPolicyCheck={setPolicy1}
          checkboxId="singup-policy1"
          policyTitle={policyDummy1.title}
          policyContent={policyDummy1.content}
          checkLabel="[필수] 이용약관에 동의하였으며 약관에 동의합니다"
        />
        <PolicySection
          policyCheck={policy2}
          setPolicyCheck={setPolicy2}
          checkboxId="singup-policy2"
          policyTitle={policyDummy2.title}
          policyContent={policyDummy2.content}
          checkLabel="[필수] 개인정보처리방침을 확인했으며 개인정보수집 및 이용에 동의합니다"
        />
      </PolicyWrapper>

      <NextBtn>NEXT</NextBtn>
    </Container>
  );
};
export default SignUpPolicy;
