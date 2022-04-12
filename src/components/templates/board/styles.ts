import styled from '@emotion/styled';

import { BoardLayout } from 'src/store/board';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  max-width: 1440px;
`;

interface BoardListProps {
  type: BoardLayout;
}
const BoardList = styled.div<BoardListProps>`
  margin-top: 20px;
  flex: 1;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ type }) => (type === BoardLayout.SIMPLE_LIST ? '50px' : '1.2rem')};
`;

export { Container, BoardList };
