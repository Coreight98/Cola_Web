import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: calc(100vw - 90px);
  height: 100%;
  gap: 3rem;
`;
const CalendarContainer = styled.div`
  width: 50%;
  height: 50%;
`;

export { Container, CalendarContainer };
