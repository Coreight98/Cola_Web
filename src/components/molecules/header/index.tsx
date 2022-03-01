import { useRouter } from 'next/router';

import { Container, TitleWrapper, Title, SubTitle, HeaderBtn } from './styles';

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <TitleWrapper>
        <Title onClick={() => router.push('/')}>Cola</Title>
        <SubTitle>아주대학교 개발자 커뮤니티</SubTitle>
      </TitleWrapper>
      {router.route !== '/login' && (
        <HeaderBtn type="button" onClick={() => router.push('/login')}>
          로그인
        </HeaderBtn>
      )}
    </Container>
  );
};
export default Header;
