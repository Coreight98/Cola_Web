import { useRouter } from 'next/router';

import { Container, Title, DescriptionWrapper, SubDescription } from './styles';

import { IBoardItem } from '@components/templates/board/index.type';

const BoardSimpleItem = ({ id }: IBoardItem) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/board/${id}`)}>
      <Title>글 제목</Title>
      <DescriptionWrapper>
        <span>작성자 콜라</span>
        <span>2022-03-12</span>

        <SubDescription>
          <span>조회수 123</span>
          <span>좋아요 10</span>
          <span>댓글 12</span>
        </SubDescription>
      </DescriptionWrapper>
    </Container>
  );
};
export default BoardSimpleItem;
