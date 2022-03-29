import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SignInFormInterface, SignInData, SignInType } from './index.type';
import { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText } from './styles';

import Input from '@components/atoms/input';
import Seo from '@components/Seo';
// import Auth from '@utils/api/main';

const SignInTemp = () => {
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
      <FormWrapper>
        <Input {...SignUpProps('email')} type="small" error={ErrorMessage('email')} />
        <Input {...SignUpProps('password')} type="small" error={ErrorMessage('password')} />
        <button>로그인</button>
      </FormWrapper>
      <AuthContentWrapper>
        <RouterText
          onClick={() => {
            router.push('/signUp');
          }}
        >
          회원가입
        </RouterText>
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

export default SignInTemp;
