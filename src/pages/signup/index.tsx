import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignupFormInterface } from './index.type';
import {
  Container,
  Title,
  SubTitle,
  FormWrapper,
  SubFormWrapper,
  InputWrapper,
  ErrorMsg,
  EmailAuthBtn,
  SubmitBtn,
} from './styles';

const SignUp = () => {
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupFormInterface>({
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
  const onSubmit = (data: SignupFormInterface) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <Container>
      <Title>회원가입</Title>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SubFormWrapper>
          <SubTitle>아주대 메일 인증</SubTitle>
          <InputWrapper>
            <input
              type="text"
              placeholder="아주대 메일"
              {...register('email', {
                required: '아주대 이메일을 입력해주세요.',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@ajou.ac.kr$/,
                  message: '아주대 이메일만 사용할 수 있습니다.',
                },
                onChange: () => {
                  setIsEmailValid(false);
                  setCheckEmail(false);
                },
              })}
            />
            <ErrorMsg>{errors?.email?.message}</ErrorMsg>
            {!checkEmail && !isEmailValid && (
              <EmailAuthBtn type="button" onClick={onClickEmailAuth}>
                인증
              </EmailAuthBtn>
            )}
            {checkEmail && !isEmailValid && (
              <>
                <input
                  placeholder="인증번호를 입력하세요"
                  type="text"
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
          <SubTitle>비밀번호</SubTitle>
          <InputWrapper>
            <input
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: '비밀번호는 대소문자, 숫자 포함 8자 이상이여야 합니다.',
                },
              })}
            />
            <ErrorMsg>{errors?.password?.message}</ErrorMsg>
            <input
              type="password"
              placeholder="비밀번호 확인"
              {...register('passwordCheck', {
                required: '비밀번호를 다시 입력해주세요.',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: '비밀번호는 대소문자, 숫자 포함 8자 이상이여야 합니다.',
                },
              })}
            />
            <ErrorMsg>{errors?.passwordCheck?.message}</ErrorMsg>
          </InputWrapper>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>학생 정보</SubTitle>
          <InputWrapper>
            <input
              type="text"
              placeholder="이름"
              {...register('name', {
                required: '이름을 입력해주세요',
              })}
            />
            <ErrorMsg>{errors?.name?.message}</ErrorMsg>

            <input
              type="text"
              placeholder="학과"
              {...register('department', {
                required: '학과를 입력해주세요',
              })}
            />
            <ErrorMsg>{errors?.department?.message}</ErrorMsg>

            <input
              type="text"
              placeholder="학번"
              {...register('studentId', {
                required: '학번을 입력해주세요',
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: '학번을 제대로 입력해주세요.',
                },
              })}
            />
            <ErrorMsg>{errors?.studentId?.message}</ErrorMsg>
          </InputWrapper>
        </SubFormWrapper>

        <SubmitBtn>회원가입</SubmitBtn>
      </FormWrapper>
    </Container>
  );
};
export default SignUp;
