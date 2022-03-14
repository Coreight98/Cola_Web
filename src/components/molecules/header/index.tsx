import { useState, useRef, useEffect } from 'react';

import { useRouter } from 'next/router';

import { Container, TitleWrapper, Title, HeaderBtn, DropDownWrapper, DropDownContent, DropDownItem } from './styles';

import UserDefault from '@assets/icon/user_default.svg';
import SideBar from '@molecules/sidebar';

const Header = () => {
  const router = useRouter();

  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setProfileMenu(false);
    };
    const handleOutsideClick = (event: MouseEvent | React.BaseSyntheticEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const openMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  return (
    <Container>
      <TitleWrapper>
        <SideBar />
        <Title onClick={() => router.push('/')}>Cola</Title>
      </TitleWrapper>
      <div style={{ display: 'flex', margin: '0 2rem', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ display: 'flex', margin: '0 2rem' }}>
          <input type="text" name="" id="" style={{ width: '300px', height: '40px' }} />
          <HeaderBtn type="button" style={{ border: 'none' }}>
            검색
          </HeaderBtn>
        </div>
        <HeaderBtn>알림</HeaderBtn>
        <DropDownWrapper>
          <HeaderBtn onClick={openMenu}>
            <UserDefault fill="white" width="40px" height="40px" />
          </HeaderBtn>
          <DropDownContent isOpen={profileMenu} ref={dropdownRef}>
            <DropDownItem>로그아웃</DropDownItem>
            <DropDownItem onClick={() => router.push('/mypage')}>마이페이지</DropDownItem>
          </DropDownContent>
        </DropDownWrapper>
      </div>
    </Container>
  );
};
export default Header;
