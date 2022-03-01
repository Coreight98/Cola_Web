import { Container, Box } from './styles';
interface Props {
  date: number;
  day: number;
  status: 'prev' | 'this' | 'today';
}
const CalenderDayElement = ({ status, date, day }: Props) => {
  return (
    <Container style={status === 'prev' ? { visibility: 'hidden' } : {}}>
      <Box />
      <p style={status === 'today' ? { borderBottom: '1px solid' } : {}}>{day}</p>
    </Container>
  );
};

export default CalenderDayElement;
