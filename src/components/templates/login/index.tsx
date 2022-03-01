import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormInterface, SignInType } from './index.type';
import { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText } from './styles';

import Button from '@atoms/button';
import Input from '@components/atoms/input';
import Seo from '@components/Seo';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const LoginTemp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({ resolver: yupResolver(schema) });

  const toSignUp = () => router.push('/register');

  const onSubmit: SubmitHandler<LoginFormInterface> = (data) => {
    console.log('submit', data);
  };

  const SignInProps = (value: keyof typeof errors) => {
    return { ...SignInType[value], ...register(value) };
  };

  const ErrorMessage = (value: keyof typeof errors) => errors[value]?.message;

  return (
    <Container>
      <Seo title="Login" />
      <Header>로그인</Header>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input {...SignInProps('email')} error={ErrorMessage('email')} />
        <Input {...SignInProps('password')} error={ErrorMessage('password')} />
        <Button title="로그인" />
      </FormWrapper>
      <AuthContentWrapper>
        <RouterText onClick={toSignUp}>회원가입</RouterText>
        <SocialLogin>
          <p>소셜 로그인</p>
          <ul>
            <li>깃허브</li>
            <li>깃랩</li>
          </ul>
        </SocialLogin>
      </AuthContentWrapper>
    </Container>
  );
};
export default LoginTemp;
