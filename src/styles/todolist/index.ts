import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  max-height: 786px;
  height: 100%;
  margin: auto 0;
  box-shadow: 0px 0px 6px ${({ theme: { colors } }) => colors.shadow};
  position: relative;
  border-radius: 5px;
`;
const BackgroundView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  max-height: 786px;
  bottom: -0.5rem;
  right: -0.5rem;
  background: none;
  border: none;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 6px ${({ theme: { colors } }) => colors.shadow};
  z-index: 2;
`;
const BackgroundSecondView = styled(BackgroundView)`
  bottom: -1rem;
  right: -1rem;
  z-index: 1;
`;
const CalendarContainer = styled.div`
  width: 700px;
  height: 100%;
  padding: 3rem 2rem 1rem 2rem;
  z-index: 10;
  background: white;
  border-radius: 5px 0px 0px 5px;
`;
const TodoContainer = styled.div`
  position: relative;
  border-radius: 0px 5px 5px 0px;
  z-index: 10;
  width: 600px;
  height: 100%;
  padding: 2rem 4rem;
  overflow: hidden;
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
const TodoWrapper = styled.div`
  overflow-y: scroll;
  height: 35em;
  padding: 0.4rem;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 6px;
    background: #eee;
    border-radius: 4px;
  }
`;
export {
  Container,
  BackgroundView,
  BackgroundSecondView,
  CalendarContainer,
  TodoContainer,
  TodoInfoWrapper,
  TodoDate,
  TodoUtils,
  TodoWrapper,
};
