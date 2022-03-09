import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { Container, TitleWrapper, MenuWrapper, MenuBtn, Title, SubTitle, HeaderBtn } from './styles';

import MenuIcon from '@assets/icon/menu.svg';
import { sideBarState } from '@components/atoms/sidebar';

const Header = () => {
  const router = useRouter();

  const [sidebar, setSideBar] = useRecoilState(sideBarState);

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <MenuBtn type="button" onClick={() => setSideBar(!sidebar)}>
          <MenuIcon fill="#ffffff" />
        </MenuBtn>
        <TitleWrapper>
          <Title onClick={() => router.push('/')}>Cola</Title>
          <SubTitle>아주대학교 개발자 커뮤니티</SubTitle>
        </TitleWrapper>
      </div>
      <MenuWrapper>
        {/* SearchBar Component */}
        <div style={{ display: 'flex', margin: '0 2rem' }}>
          <input type="text" name="" id="" style={{ width: '300px', height: '40px' }} />
          <button type="button" style={{ border: 'none' }}>
            검색
          </button>
        </div>
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
