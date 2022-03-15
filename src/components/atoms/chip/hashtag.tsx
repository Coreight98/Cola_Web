import { HashtagContainer } from './styles';

interface Props {
  title: string;
  onClick?: () => void;
}

const Hashtag = ({ title, onClick }: Props) => {
  return <HashtagContainer onClick={onClick}>{title}</HashtagContainer>;
};

export default Hashtag;
