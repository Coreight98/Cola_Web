import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 1rem 0;
  height: 100%;
`;
const CalendarContainer = styled.div`
  width: 700px;
  height: 100%;
  padding: 3rem 2rem 1rem 2rem;
`;
const TodoContainer = styled.div`
  width: 600px;
  height: 100%;
  padding: 2rem 4rem;
  overflow-y: scroll;
  background-color: ${({ theme: { colors } }) => colors.blue[500]};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    width: 6px;
    background-color: ${({ theme: { colors } }) => colors.blue[100]};
    border-radius: 4px;
  }
`;
const TodoInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-bottom: 2px solid white;
`;
const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TodoDate = styled(TodoInfo)`
  & span:nth-of-type(1) {
    font-size: 4rem;
    font-weight: 600;
  }
  & span:nth-of-type(2) {
    font-size: 1.5rem;
  }
`;
const TodoUtils = styled(TodoInfo)`
  button {
    height: 2rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
export { Container, CalendarContainer, TodoContainer, TodoInfoWrapper, TodoDate, TodoUtils };
