import { useForm } from 'react-hook-form';

import { SignupFormInterface } from './index.type';
import { Container, Title, SubTitle, FormWrapper, SubFormWrapper, EmailAuthBtn, SubmitBtn } from './styles';

const SignUp = () => {
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

  const onSubmit = (data: SignupFormInterface) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <Container>
      <Title>회원가입</Title>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SubFormWrapper>
          <SubTitle>아이디/비밀번호</SubTitle>
          <div>
            <input
              type="text"
              placeholder="아이디"
              {...register('id', {
                required: '아이디를 입력해주세요.',
              })}
            />
            {errors?.id?.message}
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                // TODO: 비밀번호 형식 pattern
              })}
            />
            {errors?.password?.message}
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              {...register('passwordCheck', {
                required: '비밀번호를 다시 입력해주세요.',
                // TODO: 비밀번호 형식 pattern, password와 같은지 검증
              })}
            />
            {errors?.passwordCheck?.message}
          </div>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>아주대 메일 인증</SubTitle>
          <div>
            <input
              type="text"
              placeholder="아주대 메일"
              {...register('email', {
                required: '아주대 이메일을 입력해주세요.',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@ajou.ac.kr$/,
                  message: '아주대 이메일만 사용할 수 있습니다.',
                },
              })}
            />
            {errors?.email?.message}
          </div>

          <EmailAuthBtn type="button">인증</EmailAuthBtn>
        </SubFormWrapper>
        <SubFormWrapper>
          <SubTitle>학생 정보</SubTitle>
          <div>
            <input
              type="text"
              placeholder="이름"
              {...register('name', {
                required: '이름을 입력해주세요',
              })}
            />
            {errors?.name?.message}
          </div>

          <div>
            <input
              type="text"
              placeholder="학과"
              {...register('department', {
                required: '학과를 입력해주세요',
              })}
            />
            {errors?.department?.message}
          </div>

          <div>
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
            {errors?.studentId?.message}
          </div>
        </SubFormWrapper>

        <SubmitBtn>회원가입</SubmitBtn>
      </FormWrapper>
    </Container>
  );
};
export default SignUp;
