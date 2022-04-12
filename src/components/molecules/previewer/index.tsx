import { useCallback } from 'react';

import { marked } from 'marked';

import { ViewArea, Wrapper, Container } from './styles';

import HashtagChip from '@components/atoms/hashtagChip';
interface Props {
  markdownContent: string;
  title?: string;
  chipList: string[];
}

const Preview = ({ markdownContent, title, chipList }: Props) => {
  return (
    <Container>
      <p>{title}</p>
      {/* <Wrapper>
        {chipList.map((text) => (
          <HashtagChip key={text} title={text} size="small" />
        ))}
      </Wrapper> */}
      <ViewArea dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </Container>
  );
};

export default Preview;
