import { useEffect } from 'react';

import Link from 'next/link';

import LoginBtn from '@components/atoms/button/login';
import Seo from '@components/Seo';
import { Container, Header, AuthContentWrapper } from '@styles/signIn';
import Api from '@utils/api/core';

// import Auth from '@utils/api/main';

const googleLink = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=https://www.googleapis.com/auth/indexing&redirect_uri=${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/auth/callback/google&client_id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`;
const githubLink = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}`;

const SignIn = () => {
  const onClickGithub = async () => {
    const data = await Api.get('/oauth2/authorization/github?redirect_uri=http://localhost:3000');
    console.log(data);
  };
  const onClickGoogle = async () => {
    const data = await Api.get('/oauth2/authorization/google?redirect_uri=http://localhost:3000');
    console.log(data);
  };
  return (
    <Container>
      <Seo title="SignIn" />
      <Header>로그인</Header>
      <AuthContentWrapper>
        <LoginBtn type="google" onClick={onClickGoogle} />
        <LoginBtn type="github" onClick={onClickGithub} />
      </AuthContentWrapper>
    </Container>
  );
};

export default SignIn;
