import { Container, Header, AuthContentWrapper, SocialLogin } from '@styles/signIn';

import Seo from '@components/Seo';
import LoginBtn from '@components/atoms/button/login';
import Link from 'next/link';
// import Auth from '@utils/api/main';

const SignIn = () => {
  // const onSubmit: SubmitHandler<SignInFormInterface> = ({ email, password }: SignInFormInterface) => {
  //   const res = Auth.singIn({ email, password });
  //   console.log(res.message);
  // };
  const onClickGithub = () => {
    alert('singIn github');
  };
  const onClickGoogle = () => {
    alert('singIn google');
  };

  return (
    <Container>
      <Seo title="SignIn" />
      <Header>로그인</Header>
      <AuthContentWrapper>
        <Link href="">
          <LoginBtn type="google" onClick={onClickGoogle} />
        </Link>
        <Link href="http://ec2-3-39-4-189.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/github">
          <LoginBtn type="github" onClick={onClickGithub} />
        </Link>
      </AuthContentWrapper>
    </Container>
  );
};

export default SignIn;
