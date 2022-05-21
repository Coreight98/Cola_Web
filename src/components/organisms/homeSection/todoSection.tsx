import styled from '@emotion/styled';

import Calender from '@components/molecules/calender';
import { useCalendar } from '@pages/todolist';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 5px;
  padding: 2rem;
  gap: 1rem;
  height: 100%;
  overflow: hidden;

  h2 {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
  div {
    margin: 0 0.1rem;
    span {
      font-size: 1rem;
    }
    div > div {
      width: 2rem;
      height: 2rem;
    }
  }
  p {
    font-size: 0.9rem;
    margin: 0.2rem;
  }
`;

const ProgressWrapper = styled.div`
  height: 100%;
  width: 20rem;
  box-shadow: 0px 0px 6px #00000029;
  background: ${({ theme: { colors } }) => colors.blue[500]};
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ProgressDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 1.5rem;
  }
`;
const ProgressItemWrapper = styled.div`
  flex: 1;
  background: white;
  width: 100%;
  border-radius: 5px;
`;
const TodoWrapper = styled.div`
  height: 100%;
  flex: 1;
  box-shadow: 0px 0px 6px #00000029;
  background: ${({ theme: { colors } }) => colors.blue[500]};
  display: flex;
`;
const LeftSection = styled.div`
  height: 100%;
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  color: white;
  h2 {
    margin: 0;
    font-size: 2.4rem;
  }
  h3 {
    margin: 0;
    font-size: 1.8rem;
  }
`;
const RightSection = styled.div`
  background: white;
  flex: 1;
`;

const TodoSection = () => {
  const [today, date, handleChangeMonth] = useCalendar();

  return (
    <>
      <CalendarWrapper>
        <Calender date={date} handleChangeMonth={handleChangeMonth} />
      </CalendarWrapper>
      <TodoWrapper>
        <LeftSection>
          <div>
            <h2>{today.getDate()}</h2>
            <h3>{today.getDay()}</h3>
          </div>
          <div>
            <p>오늘의 할 일</p>
            <span>0 / 8</span>
          </div>
        </LeftSection>
        <RightSection></RightSection>
      </TodoWrapper>
      <ProgressWrapper>
        <ProgressDateWrapper>
          <div>
            <span>JULY</span>
            <span>WEEK</span>
          </div>
          <div>
            <span>1</span>
          </div>
        </ProgressDateWrapper>
        <ProgressItemWrapper></ProgressItemWrapper>
      </ProgressWrapper>
    </>
  );
};
export default TodoSection;
