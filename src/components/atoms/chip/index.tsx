import { Container } from './styles';

import Plus from 'public/plus_circle_outline.svg';

const Chip = ({ title, handleClick }: { title: string; handleClick: () => void }) => {
  return (
    <Container onClick={handleClick}>
      <p>{title}</p>
      <Plus />
    </Container>
  );
};

export default Chip;
