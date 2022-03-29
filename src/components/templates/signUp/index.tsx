import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { SignUpFormInterface, SignUpData, SignUpType } from './index.type';
import {
  Container,
  Title,
  SubTitle,
  FormWrapper,
  SubFormWrapper,
  InputWrapper,
  EmailAuthBtn,
  SubmitBtn,
} from './styles';

import Input from '@atoms/input';

const SignUpTemp = () => {
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

  return (
    <Container>
      <Title>회원가입</Title>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SubFormWrapper>
          <SubTitle>아주대 메일 인증</SubTitle>
          <InputWrapper>
            <Input
              {...SignUpProps('email')}
              type="small"
              error={ErrorMessage('email')}
              onChange={() => {
                setIsEmailValid(false);
                setCheckEmail(false);
              }}
            />
            {!checkEmail && !isEmailValid && (
              <EmailAuthBtn type="button" onClick={onClickEmailAuth}>
                인증
              </EmailAuthBtn>
            )}
            {checkEmail && !isEmailValid && (
              <>
                <Input
                  {...SignUpProps('emailCheck')}
                  type="small"
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                />
                <EmailAuthBtn onClick={onClickEmailAuth}>인증하기</EmailAuthBtn>
              </>
            )}
            {isEmailValid && <p>아주대 메일이 확인되었습니다.</p>}
          </InputWrapper>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>아이디/비밀번호</SubTitle>
          <InputWrapper>
            <Input {...SignUpProps('password')} type="small" error={ErrorMessage('password')} />
            <Input {...SignUpProps('passwordCheck')} type="small" error={ErrorMessage('passwordCheck')} />
          </InputWrapper>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>학생 정보</SubTitle>
          <InputWrapper>
            <Input {...SignUpProps('name')} type="small" error={ErrorMessage('name')} />
            <Input {...SignUpProps('department')} type="small" error={ErrorMessage('department')} />
            <Input {...SignUpProps('studentId')} type="small" error={ErrorMessage('studentId')} />
          </InputWrapper>
        </SubFormWrapper>
        <SubmitBtn>회원가입</SubmitBtn>
      </FormWrapper>
    </Container>
  );
};
export default SignUpTemp;
