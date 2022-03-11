import { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';

import { useRouter } from 'next/router';

import {
  Container,
  TitleWrapper,
  MenuBtn,
  Title,
  HeaderBtn,
  DropDownWrapper,
  DropDownContent,
  DropDownItem,
} from './styles';

import MenuIcon from '@assets/icon/menu.svg';
import UserDefault from '@assets/icon/user_default.svg';

export interface IHeader {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSidebar }: IHeader) => {
  const router = useRouter();

  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | React.BaseSyntheticEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileMenu(false);
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
  const openMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  return (
    <Container>
      <TitleWrapper>
        <MenuBtn onClick={() => setSidebar((prev: boolean) => !prev)}>
          <MenuIcon fill="#f5f5f5" />
        </MenuBtn>
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
            <DropDownItem>마이페이지</DropDownItem>
          </DropDownContent>
        </DropDownWrapper>
      </div>
    </Container>
  );
};
export default Header;
