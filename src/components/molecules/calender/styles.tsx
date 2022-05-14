import styled from '@emotion/styled';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const CalenderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 2.4rem;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

const DateWrapper = styled(FlexColumn)`
  text-align: center;
`;
const MonthText = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blue[500]};
`;
const YearText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.blue[100]};
`;

const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;
const DayText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.gray[900]};
  position: relative;
  padding: 0 0.5rem;
  /* border-bottom: 0.3rem solid ${({ theme: { colors } }) => colors.blue[500]}; ; */
`;

interface ICurrentDay {
  isCurrent: boolean;
}
const CurrentDayMarker = styled.div<ICurrentDay>`
  display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
  margin-top: 0.2rem;
  width: 100%;
  height: 0.3rem;
  border-radius: 0.2rem;
  background-color: ${({ theme: { colors } }) => colors.blue[500]};
`;
export { DateWrapper, CalenderNav, DayWrapper, MonthText, YearText, DayText, CurrentDayMarker };
