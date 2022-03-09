import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import {
  SimpleContainer,
  Container,
  ProfileWrapper,
  Username,
  SingInText,
  CategoryTitle,
  CategoryItem,
} from './styles';

import CategoryIcon from '@assets/icon/category_sidebar.svg';
import EditIcon from '@assets/icon/edit.svg';
import HashtagIcon from '@assets/icon/hashtag.svg';
import UserDefault from '@assets/icon/user_default.svg';
import { sideBarState } from '@atoms/sidebar';
import HashtagChip from '@components/atoms/hashtagChip';

const SideBar = () => {
  const router = useRouter();
  const isSideBarOpen = useRecoilValue(sideBarState);

  return (
    <>
      <Container isSideBarOpen={isSideBarOpen}>
        <ProfileWrapper>
          <UserDefault width="40px" height="40px" />
          <SingInText onClick={() => router.push('/signIn')}>로그인이 필요합니다</SingInText>
          {/* <Username>은승균 님</Username> */}
        </ProfileWrapper>

        <CategoryTitle>
          <CategoryIcon />
          <span>카테고리</span>
        </CategoryTitle>
        <section>
          <CategoryItem onClick={() => router.push('/')}>
            H<span>ome</span>
          </CategoryItem>
          <CategoryItem onClick={() => router.push('/board')}>
            B<span>oard</span>
          </CategoryItem>
          <CategoryItem onClick={() => router.push('/todomate')}>
            T<span>oDo Mate</span>
          </CategoryItem>
        </section>
        <hr />
        <CategoryTitle>
          <HashtagIcon width="20px" height="20px" />
          <span>관심목록</span>

          <EditIcon width="20px" height="20px" cursor="pointer" />
        </CategoryTitle>
        <section>
          <HashtagChip
            title="C"
            onClick={() => {
              console.log('onClick Category chip');
            }}
            onRemoveChip={() => {
              console.log('onRemove Chip');
            }}
            size="full"
          />
        </section>
      </Container>
      <SimpleContainer isSideBarOpen={isSideBarOpen}>
        <ProfileWrapper>
          <UserDefault width="40px" height="40px" />
        </ProfileWrapper>

        <CategoryTitle>
          <CategoryIcon />
        </CategoryTitle>
        <section>
          <CategoryItem onClick={() => router.push('/')}>H</CategoryItem>
          <CategoryItem onClick={() => router.push('/board')}>B</CategoryItem>
          <CategoryItem onClick={() => router.push('/todomate')}>T</CategoryItem>
        </section>
        <hr />
        <CategoryTitle>
          <HashtagIcon width="20px" height="20px" />
        </CategoryTitle>
        <section>
          <HashtagChip
            title="C"
            onClick={() => {
              console.log('onClick Category chip');
            }}
            onRemoveChip={() => {
              console.log('onRemove Chip');
            }}
            size="small"
          />
        </section>
      </SimpleContainer>
    </>
  );
};
export default SideBar;
