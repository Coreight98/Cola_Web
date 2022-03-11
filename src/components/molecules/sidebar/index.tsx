import { useRouter } from 'next/router';

import {
  Container,
  SidebarIconContainer,
  SidebarTextContainer,
  ProfileWrapper,
  CategoryWrapper,
  SidebarItem,
  CategoryItem,
} from './styles';

import CategoryIcon from '@assets/icon/category_sidebar.svg';
import HashtagIcon from '@assets/icon/hashtag.svg';
import UserDefault from '@assets/icon/user_default.svg';
import HashtagChip from '@components/atoms/hashtagChip';

const categories = [
  {
    id: 1,
    title: '자유게시판',
    link: '/board',
  },
  {
    id: 2,
    title: '질문게시판',
    link: '/board',
  },
  {
    id: 3,
    title: '정보게시판',
    link: '/board',
  },
  {
    id: 4,
    title: 'Todo Mate',
    link: '/todomate',
  },
];
const hashtags = [
  {
    id: 11,
    title: 'Front-end',
  },
  {
    id: 12,
    title: 'Back-end',
  },
  {
    id: 13,
    title: 'React',
  },
  {
    id: 14,
    title: 'C',
  },
];

export interface ISidebar {
  sidebar: boolean;
}
const SideBar = ({ sidebar }: ISidebar) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <SidebarIconContainer>
          <ProfileWrapper>
            <SidebarItem>
              <UserDefault width="40px" height="40px" />
            </SidebarItem>
          </ProfileWrapper>
          <CategoryWrapper>
            <CategoryIcon />
          </CategoryWrapper>
          <CategoryWrapper>
            <HashtagIcon width="20px" height="20px" />
          </CategoryWrapper>
        </SidebarIconContainer>
        <SidebarTextContainer sidebar={sidebar}>
          <ProfileWrapper onClick={() => router.push('/signIn')}>
            <SidebarItem>로그인</SidebarItem>
          </ProfileWrapper>
          <CategoryWrapper>
            <h4 style={{ padding: 0, margin: 0, marginBottom: '1rem' }}>카테고리</h4>
            {categories.map((category) => (
              <CategoryItem key={category.id} onClick={() => router.push(category.link)}>
                {category.title}
              </CategoryItem>
            ))}
          </CategoryWrapper>
          <CategoryWrapper>
            <section style={{}}>
              {hashtags.map((hashtag) => (
                <HashtagChip
                  key={hashtag.id}
                  title={hashtag.title}
                  size="full"
                  onClick={() => {
                    console.log('onClick Category chip');
                  }}
                  onRemoveChip={() => {
                    console.log('onRemove Chip');
                  }}
                />
              ))}
            </section>
          </CategoryWrapper>
        </SidebarTextContainer>
      </Container>
      {/* <Container isSideBarOpen={isSideBarOpen}>
        <ProfileWrapper>
          <UserDefault width="40px" height="40px" />
          <SingInText onClick={() => router.push('/signIn')}>로그인이 필요합니다</SingInText>
        </ProfileWrapper>

        <CategoryTitle>
          <CategoryIcon />
          <span>카테고리</span>
        </CategoryTitle>
        <section>
          {categories.map((category) => (
            <CategoryItem key={category.id} onClick={() => router.push(category.link)}>
              {category.title}
            </CategoryItem>
          ))}
        </section>
        <hr />
        <CategoryTitle>
          <HashtagIcon width="20px" height="20px" />
          <span>관심목록</span>

          <EditIcon width="20px" height="20px" cursor="pointer" />
        </CategoryTitle>
        <section style={{ display: 'flex', width: '180px', flexWrap: 'wrap' }}>
          {hashtags.map((hashtag) => (
            <HashtagChip
              key={hashtag.id}
              title={hashtag.title}
              size="full"
              onClick={() => {
                console.log('onClick Category chip');
              }}
              onRemoveChip={() => {
                console.log('onRemove Chip');
              }}
            />
          ))}
        </section>
      </Container>
      <SimpleContainer onClick={() => setSideBar(true)} isSideBarOpen={isSideBarOpen}>
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
      </SimpleContainer> */}
    </>
  );
};
export default SideBar;
