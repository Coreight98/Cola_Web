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
`;

const MenuBtn = styled.button`
  position: absolute;
  z-index: 999;
  top: 4rem;
  right: 4rem;
`;

export { Container, BackgroundView, BackgroundSecondView, CalendarContainer, TodoContainer, MenuBtn };
