import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SignInFormInterface, SignInData, SignInType } from './index.type';
import { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText } from '@styles/signIn';

import Input from '@molecules/input';
import Seo from '@components/Seo';
import LoginBtn from '@components/atoms/button/login';
// import Auth from '@utils/api/main';

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInterface>({});

  // const onSubmit: SubmitHandler<SignInFormInterface> = ({ email, password }: SignInFormInterface) => {
  //   const res = Auth.singIn({ email, password });
  //   console.log(res.message);
  // };
  const SignUpProps = (value: keyof typeof SignInData) => {
    return { ...SignInType[value], ...register(value, SignInData[value]) };
  };
  const ErrorMessage = (value: keyof typeof errors) => errors[value]?.message;

  return (
    <Container>
      <Seo title="SignIn" />
      <Header>로그인</Header>
      <AuthContentWrapper>
        <SocialLogin>
          <LoginBtn type="google" />
          <LoginBtn type="github" />
        </SocialLogin>
      </AuthContentWrapper>
    </Container>
  );
};

export default SignIn;
