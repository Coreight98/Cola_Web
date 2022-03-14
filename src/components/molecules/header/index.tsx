import { Dispatch, SetStateAction } from 'react';

import { useRouter } from 'next/router';

import SearchBar from '../searchBar';

import { Container, TitleWrapper, MenuBtn, Title, HeaderBtn } from './styles';

import MenuIcon from '@assets/icon/menu.svg';

export interface IHeader {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSidebar }: IHeader) => {
  const router = useRouter();

  return (
    <Container>
      <TitleWrapper>
        <MenuBtn onClick={() => setSidebar((prev: boolean) => !prev)}>
          <MenuIcon fill="#f5f5f5" />
        </MenuBtn>
        <Title onClick={() => router.push('/')}>Cola</Title>
      </TitleWrapper>
      <div style={{ display: 'flex', margin: '0 2rem', justifyContent: 'space-around' }}>
        <SearchBar />
        <HeaderBtn>알림</HeaderBtn>
        {router.route !== '/signIn' && (
          <HeaderBtn type="button" onClick={() => router.push('/signIn')}>
            로그인
          </HeaderBtn>
        )}
      </div>
    </Container>
  );
};
export default Header;
