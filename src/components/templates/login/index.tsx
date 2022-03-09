import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { LoginFormInterface } from './index.type';
import { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText } from './styles';

import Seo from '@components/Seo';
import Auth from '@utils/api/main';

const LoginTemp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({});

  const onSubmit: SubmitHandler<LoginFormInterface> = ({ email, password }: LoginFormInterface) => {
    const res = Auth.singIn({ email, password });
    console.log(res.message);
  };

  return (
    <Container>
      <Seo title="Login" />
      <Header>로그인</Header>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="이메일"
            type="text"
            {...register('email', {
              required: '이메일을 입력해주세요.',
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input
            placeholder="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
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

export default LoginTemp;
