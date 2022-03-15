import { useRouter } from 'next/router';

import { Container, TextWrapper, Title, BodyText, DescriptionWrapper, LeftContent } from './styles';

import { IBoardItem } from '@components/templates/board/index.type';

const BoardCard = ({ id }: IBoardItem) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/board/${id}`)}>
      <div style={{ borderRadius: '1rem', height: '60%', background: '#5f5f5f' }}></div>
      <TextWrapper>
        <Title>글 제목</Title>
        <BodyText>본문 내용 일부</BodyText>
      </TextWrapper>
      <DescriptionWrapper>
        <LeftContent>
          <div>
            <span>프로필</span>
            <span>닉네임</span>
          </div>
          <span>2022.03.13</span>
        </LeftContent>
        <div>
          <span>댓글</span>
          <span>좋아요</span>
        </div>
      </DescriptionWrapper>
    </Container>
  );
};
export default BoardCard;
