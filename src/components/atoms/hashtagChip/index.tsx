import { Container, RemoveBtn } from './styles';

interface Props {
  title: string;
  size: 'full' | 'small';
  onClick?: () => void;
  onRemoveChip?: () => void;
}

const HashtagChip = ({ title, onClick, onRemoveChip, size }: Props) => {
  return (
    <Container onClick={onClick} size={size}>
      <p style={{ textOverflow: 'ellipsis' }}>{title}</p>
      {onRemoveChip !== undefined && (
        <RemoveBtn
          onClick={(e) => {
            e.stopPropagation();
            onRemoveChip();
          }}
        >
          x
        </RemoveBtn>
      )}
    </Container>
  );
};
export default HashtagChip;
