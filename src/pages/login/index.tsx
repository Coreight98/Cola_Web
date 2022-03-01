import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormInterface } from './index.type';
import { Container, Header, FormWrapper } from './styles';

import Input from '@components/atoms/input';
import Seo from '@components/Seo';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const Login = () => {
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
        <Input placeholder="아이디" type="text" error={errors.email?.message} {...register('email')} />
        <Input placeholder="비밀번호" type="password" error={errors.password?.message} {...register('password')} />
        <button>로그인</button>
      </FormWrapper>
      {/* <div>소셜로그인자리</div> */}
    </Container>
  );
};
export default Login;
