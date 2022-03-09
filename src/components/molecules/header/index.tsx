import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { Container, TitleWrapper, MenuWrapper, Title, SubTitle, HeaderBtn } from './styles';

import { sideBarState } from '@components/atoms/sidebar';

const Header = () => {
  const router = useRouter();

  const [sidebar, setSideBar] = useRecoilState(sideBarState);

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={() => setSideBar(!sidebar)}>
          메뉴
        </button>
        <TitleWrapper>
          <Title onClick={() => router.push('/')}>Cola</Title>
          <SubTitle>아주대학교 개발자 커뮤니티</SubTitle>
        </TitleWrapper>
      </div>
      <MenuWrapper>
        {router.route !== '/signIn' && (
          <HeaderBtn type="button" onClick={() => router.push('/signIn')}>
            로그인
          </HeaderBtn>
        )}
      </MenuWrapper>
    </Container>
  );
};
export default Header;
