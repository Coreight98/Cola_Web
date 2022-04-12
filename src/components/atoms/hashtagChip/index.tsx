import { Container, RemoveBtn } from './styles';

interface Props {
  title: string;
  size: 'full' | 'sidebar' | 'small';
  onClick?: () => void;
  onRemoveChip?: () => void;
}

const HashtagChip = ({ title, onClick, onRemoveChip, size }: Props) => {
  return (
    <Container onClick={onClick} size={size}>
      <p>
        <span>#</span>
        {title}
      </p>
      {onRemoveChip !== undefined && (
        <RemoveBtn
          size={size}
          onClick={(e) => {
            e.stopPropagation();
            onRemoveChip();
          }}
        >
          x Delete
        </RemoveBtn>
      )}
    </Container>
  );
};
export default HashtagChip;
