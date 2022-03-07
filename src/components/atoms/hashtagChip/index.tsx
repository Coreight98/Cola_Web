import { Container, RemoveBtn } from './styles';

const HashtagChip = ({ title, onClick, onRemoveChip, size }: any) => {
  return (
    <Container onClick={onClick} size={size}>
      <p>{title}</p>
      <RemoveBtn
        onClick={(e) => {
          e.stopPropagation();
          onRemoveChip();
        }}
      >
        x
      </RemoveBtn>
    </Container>
  );
};
export default HashtagChip;
