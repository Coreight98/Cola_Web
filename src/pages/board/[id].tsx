import UserDefault from '@atoms/icon/userDefault';
import styled from '@emotion/styled';

import BoardContent from '@organisms/boardContent';
import Comment from '@organisms/comment';
import { theme } from '@styles/theme';

const Container = styled.div`
  margin: 2rem 1rem;
`;

const CommentInput = styled.input`
  width: 100%;
  min-height: 3rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.blue[500]};
`;

const CommentWrapper = styled.div``;

const CommentForm = () => {
  return (
    <Container>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <UserDefault />
        <p>작성자 이름</p>
      </div>
      <CommentInput placeholder="댓글 추가 .." />
    </Container>
  );
};

const BoardDetail = () => {
  return (
    <div>
      <BoardContent content="제목" />
      <CommentForm />
      {/* 추후 lazy loading 지원 예정  */}
      <CommentWrapper>
        {[
          { name: 'guest', contents: 'dwdwdwwd' },
          { name: 'guest', contents: 'wdwdwdwd' },
          { name: 'guest', contents: 'wdwdwdw' },
          { name: 'guest', contents: 'wdwdwdwd' },
        ].map(({ name, contents }) => (
          <Comment name={name} contents={contents} />
        ))}
      </CommentWrapper>
    </div>
  );
};
export default BoardDetail;
