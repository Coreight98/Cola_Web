import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { Container, ProfileWrapper, Username, CategoryTitle, CategoryItem } from './styles';

import { sideBarSelector } from '@atoms/sidebar';
import HashtagChip from '@components/atoms/hashtagChip';

const SideBar = () => {
  const router = useRouter();
  const sideBarWidth = useRecoilValue(sideBarSelector);

  return (
    <Container sideBarWidth={sideBarWidth}>
      <ProfileWrapper>
        <Username isSideBarOpen={sideBarWidth === 200}>
          은<span>승균 님</span>
        </Username>
      </ProfileWrapper>

      <CategoryTitle isSideBarOpen={sideBarWidth === 200}>카테고리</CategoryTitle>
      <section>
        <CategoryItem isSideBarOpen={sideBarWidth === 200} onClick={() => router.push('/')}>
          H<span>ome</span>
        </CategoryItem>
        <CategoryItem isSideBarOpen={sideBarWidth === 200} onClick={() => router.push('/board')}>
          B<span>oard</span>
        </CategoryItem>
        <CategoryItem isSideBarOpen={sideBarWidth === 200} onClick={() => router.push('/todomate')}>
          T<span>oDo Mate</span>
        </CategoryItem>
      </section>
      <hr />
      <CategoryTitle isSideBarOpen={sideBarWidth === 200}>관심목록</CategoryTitle>
      <section>
        <HashtagChip
          title="C"
          onClick={() => {
            console.log('onClick Category chip');
          }}
          onRemoveChip={() => {
            console.log('onRemove Chip');
          }}
          size={sideBarWidth === 200 ? 'full' : 'small'}
        />
      </section>
    </Container>
  );
};
export default SideBar;
