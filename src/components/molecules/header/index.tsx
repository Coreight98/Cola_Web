import { Dispatch, SetStateAction } from 'react';

import { useRouter } from 'next/router';

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
        <div style={{ display: 'flex', margin: '0 2rem' }}>
          <input type="text" name="" id="" style={{ width: '300px', height: '40px' }} />
          <HeaderBtn type="button" style={{ border: 'none' }}>
            검색
          </HeaderBtn>
        </div>
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
