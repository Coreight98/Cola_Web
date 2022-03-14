import { useRouter } from 'next/router';

import { Container, ListWrapper, ListItem } from './styles';

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

const SideBar = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <ListWrapper>
          <ListItem>
            <a href="javascript:void(0)" onClick={() => router.push('/board')}>
              <i className="fa fa-book fa-2x"></i>
              <span className="nav-text">자유게시판</span>
            </a>
          </ListItem>
          <ListItem>
            <a href="javascript:void(0)" onClick={() => router.push('/board')}>
              <i className="fa fa-question fa-2x"></i>
              <span>질문게시판</span>
            </a>
          </ListItem>
          <ListItem>
            <a href="javascript:void(0)" onClick={() => router.push('/board')}>
              <i className="fa fa-file-invoice fa-2x"></i>
              <span>정보게시판</span>
            </a>
          </ListItem>
          <ListItem>
            <a href="javascript:void(0)" onClick={() => router.push('/todomate')}>
              <i className="fa fa-calendar-check fa-2x"></i>
              <span>TodoList</span>
            </a>
          </ListItem>
        </ListWrapper>

        <ListWrapper className="logout">
          {hashtags.map((hashtag) => (
            <HashtagChip
              key={hashtag.id}
              title={hashtag.title}
              onClick={() => {
                console.log('onClick Category chip');
              }}
              onRemoveChip={() => {
                console.log('onRemove Chip');
              }}
            />
          ))}
        </ListWrapper>
      </Container>
      <style jsx>
        {`
          @import url(https://use.fontawesome.com/releases/v5.2.0/css/all.css);
        `}
      </style>
    </>
  );
};
export default SideBar;
