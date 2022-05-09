import { Container, Box, DayText } from './styles';
interface Props {
  date: number;
  day: number;
  status: 'prev' | 'this' | 'today';
}
const CalenderDayElement = ({ status, date, day }: Props) => {
  return (
    <Container status={status}>
      <DayText status={status}>{day}</DayText>
      <Box />
    </Container>
  );
};

export default CalenderDayElement;
