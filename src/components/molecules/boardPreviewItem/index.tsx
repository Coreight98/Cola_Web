import { useRouter } from 'next/router';

import {
  Container,
  TextWrapper,
  TopContent,
  WriterDescription,
  Thumbnail,
  Title,
  BodyText,
  BottomContent,
} from './styles';

import { IBoardItem } from '@components/templates/board/index.type';

const BoardPreviewItem = ({ id }: IBoardItem) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(`/board/${id}`)}>
      <TextWrapper>
        <TopContent>
          <Title>글 제목</Title>
          <WriterDescription>
            <span>작성자</span>
            <span>2022-03-12</span>
          </WriterDescription>
        </TopContent>
        <BodyText>글 내용</BodyText>
        <BottomContent>
          <span>댓글</span>
          <span>좋아요</span>
        </BottomContent>
      </TextWrapper>
      <Thumbnail />
    </Container>
  );
};
export default BoardPreviewItem;
