import { useRouter } from 'next/router';

import {
  BoardImage,
  Container,
  TextWrapper,
  Title,
  BodyText,
  SubInfo,
  DescriptionWrapper,
  UserInfo,
  Separator,
  Likes,
} from './styles';

import { IBoardItem } from '@components/templates/board/index.type';

const BoardCard = ({ id }: IBoardItem) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/board/${id}`)}>
      <a href="#" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
        <BoardImage>{/* <img /> */}</BoardImage>
      </a>
      <TextWrapper>
        <a href="#">
          <Title>글 제목</Title>
          <div>
            <BodyText>본문 내용 일부</BodyText>
          </div>
        </a>
        <SubInfo>
          <span>2022년 3월 13일</span>
          <Separator>•</Separator>
          <span>9개의 댓글</span>
        </SubInfo>
      </TextWrapper>
      <DescriptionWrapper>
        <UserInfo>
          <img></img>
          <span>
            by <b>username</b>
          </span>
        </UserInfo>
        <Likes>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
          </svg>
          <span>13</span>
        </Likes>
      </DescriptionWrapper>
    </Container>
  );
};
export default BoardCard;
