import { marked } from 'marked';

import { ViewArea, Wrapper, Container } from './styles';

import Hashtag from '@components/atoms/chip/hashtag';
interface Props {
  markdownContent: string;
  title?: string;
  chipList: string[];
}

const Preview = ({ markdownContent, title, chipList }: Props) => {
  return (
    <Container>
      <p>{title}</p>
      <Wrapper>
        {chipList.map((text) => (
          <Hashtag key={text} title={text} />
        ))}
      </Wrapper>
      <ViewArea dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </Container>
  );
};

export default Preview;
