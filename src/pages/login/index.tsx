import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormInterface } from './index.type';
import { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText } from './styles';

import Seo from '@components/Seo';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({ resolver: yupResolver(schema) });
  // register : input에 필요한 onChange, onBlur, value 등을 반환해주는 함수
  // watch : form의 모든 값들의 변화를 주시한다.
  // console.log(watch());
  // handleSubmit : onSubmit이 발생했을 때 validation을 담당한다.

  const onSubmit: SubmitHandler<LoginFormInterface> = (data) => {
    console.log('submit', data);
  };

  return (
    <Container>
      <Seo title="Login" />
      <Header>로그인</Header>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="아이디" type="text" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input placeholder="비밀번호" type="password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>
        <button>로그인</button>
      </FormWrapper>
      <AuthContentWrapper>
        <RouterText
          onClick={() => {
            router.push('/signup');
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
export default Login;
