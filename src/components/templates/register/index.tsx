import { useForm } from 'react-hook-form';

import { SignUpFormInterface, SignUpData, SignUpType } from './index.type';
import { Container, Title, SubTitle, FormWrapper, SubFormWrapper, EmailAuthBtn, SubmitBtn } from './styles';

import Input from '@atoms/input';

const RegisterTemp = () => {
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
          <SubTitle>아이디/비밀번호</SubTitle>
          <Input {...SignUpProps('id')} error={ErrorMessage('id')} />
          <Input {...SignUpProps('password')} error={ErrorMessage('password')} />
          <Input {...SignUpProps('passwordCheck')} error={ErrorMessage('passwordCheck')} />
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>아주대 메일 인증</SubTitle>
          <Input {...SignUpProps('email')} error={ErrorMessage('email')} />
          <EmailAuthBtn type="button">인증</EmailAuthBtn>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>학생 정보</SubTitle>
          <Input {...SignUpProps('name')} error={ErrorMessage('name')} />
          <Input {...SignUpProps('department')} error={ErrorMessage('department')} />
          <Input {...SignUpProps('studentId')} error={ErrorMessage('studentId')} />
        </SubFormWrapper>
        <SubmitBtn>회원가입</SubmitBtn>
      </FormWrapper>
    </Container>
  );
};
export default RegisterTemp;
