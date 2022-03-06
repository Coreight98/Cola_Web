import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Container, ProfileWrapper, Username, CategoryTitle, CategoryItem } from './styles';

import { sideBarSelector } from '@atoms/sidebar';

const SideBar = () => {
  const router = useRouter();
  const sideBarWidth = useRecoilValue(sideBarSelector);

  return (
    <Container sideBarWidth={sideBarWidth}>
      <ProfileWrapper>
        <Username>은승균 님</Username>
      </ProfileWrapper>

      <CategoryTitle>카테고리</CategoryTitle>
      <section>
        <CategoryItem onClick={() => router.push('/')}>Home</CategoryItem>
        <CategoryItem onClick={() => router.push('/board')}>Board</CategoryItem>
        <CategoryItem onClick={() => router.push('/todomate')}>ToDo Mate</CategoryItem>
      </section>
    </Container>
  );
};
export default SideBar;
