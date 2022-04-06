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
      <p style={{ textOverflow: 'ellipsis' }}>
        <span style={{ marginRight: '0.3rem' }}>#</span>
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
          x
        </RemoveBtn>
      )}
    </Container>
  );
};
export default HashtagChip;
