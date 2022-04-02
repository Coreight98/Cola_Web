import { useState } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import AuthBtn from '@components/atoms/button/auth';
import SubmitBtn from '@components/atoms/button/submit';
import { MAJOR_TYPE } from '@constants/index';

import { SignUpFormInterface, SignUpData, SignUpType } from './index.type';
import {
  Container,
  SubContainer,
  Title,
  SubTitle,
  FormWrapper,
  SubFormWrapper,
  BtnWrapper,
  Wrapper,
  Select,
  Triangle,
} from './styles';

import Input from '@molecules/input';
import Arrow from 'public/arrow.svg';
import Logo from 'public/cola_logo.svg';
import Check from 'public/check.svg';
import Modal from '@components/molecules/modal';
import MajorModal from '@components/molecules/modal/majorModal';

const SignUpTemp = () => {
  const router = useRouter();
  const [major, setMajor] = useState<keyof typeof MAJOR_TYPE>('sw');
  const [modalOnOff, setModalOnOff] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInterface>({
    mode: 'onBlur',
    defaultValues: {
      email: '@ajou.ac.kr',
    },
  });

  const onClickEmailAuth = () => {
    if (!checkEmail) {
      // 이메일 인증 필요
      setCheckEmail(true);
    } else {
      // 이메일 인증 코드 확인
      console.log(emailCode);

      // TODO: email code 비교 및 체크하기
      setEmailCode('');
      setIsEmailValid(true);
    }
  };

  const onSubmit = (data: SignUpFormInterface) => {
    console.log(data);
  };
  const SignUpProps = (value: keyof typeof SignUpData) => {
    return { ...SignUpType[value], ...register(value, SignUpData[value]) };
  };
  const ErrorMessage = (value: keyof typeof errors) => errors[value]?.message;

  const handleModalOnOff = () => setModalOnOff(!modalOnOff);

  const handleChange = () => {
    setIsEmailValid(false);
    setCheckEmail(false);
  };

  return (
    <>
      <Container>
        <BtnWrapper>
          <Arrow onClick={() => router.back()} />
          <Logo onClick={() => router.push('/')} />
        </BtnWrapper>
        <SubContainer>
          <Title>SIGN UP</Title>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <SubFormWrapper>
              <Input {...SignUpProps('name')} error={ErrorMessage('name')}>
                <SubTitle>이름</SubTitle>
              </Input>
            </SubFormWrapper>
            <Wrapper>
              <SubFormWrapper>
                <div style={{ position: 'relative' }}>
                  <Input {...SignUpProps('email')} error={ErrorMessage('email')} onChange={handleChange}>
                    <SubTitle>이메일 인증</SubTitle>
                  </Input>
                  {isEmailValid && <Check style={{ position: 'absolute', right: '20px', top: '20px' }} />}
                </div>
              </SubFormWrapper>
              {!isEmailValid && <AuthBtn onClick={onClickEmailAuth}>인증</AuthBtn>}
            </Wrapper>
            {checkEmail && (
              <SubFormWrapper>
                {!isEmailValid && (
                  <Input
                    style={{ marginLeft: '8vw' }}
                    {...SignUpProps('emailCheck')}
                    value={emailCode}
                    onChange={(e) => setEmailCode(e.target.value)}
                  />
                )}
              </SubFormWrapper>
            )}
            <SubFormWrapper>
              <div style={{ display: 'flex' }}>
                <SubTitle>학과</SubTitle>
                <div style={{ position: 'relative' }}>
                  <Select onClick={handleModalOnOff} {...register('department', SignUpData.department)}>
                    <option id="selected" value={MAJOR_TYPE[major]} selected hidden>
                      {MAJOR_TYPE[major]}
                    </option>
                  </Select>
                  <Triangle />
                </div>
              </div>
            </SubFormWrapper>
            <SubFormWrapper>
              <Input {...SignUpProps('gitEmailId')} error={ErrorMessage('gitEmailId')}>
                <SubTitle>GIT 계정</SubTitle>
              </Input>
            </SubFormWrapper>
            <SubmitBtn>SAVE</SubmitBtn>
          </FormWrapper>
        </SubContainer>
      </Container>
      {modalOnOff && (
        <Modal>
          <MajorModal major={major} setMajor={setMajor} setModalOnOff={setModalOnOff} />
        </Modal>
      )}
    </>
  );
};
export default SignUpTemp;
