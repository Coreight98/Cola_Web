import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  max-width: 1440px;
`;

const BoardList = styled.div`
  flex: 1;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export { Container, BoardList };
