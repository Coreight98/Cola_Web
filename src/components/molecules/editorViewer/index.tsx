import { marked } from 'marked';

import { ViewArea, Wrapper } from './styles';

import Hashtag from '@components/atoms/chip/hashtag';
interface Props {
  markdownContent: string;
  title?: string;
  chipList: string[];
}

const Preview = ({ markdownContent, title, chipList }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{title}</p>
      <Wrapper>
        {chipList.map((text) => (
          <Hashtag key={text} title={text} />
        ))}
      </Wrapper>
      <ViewArea dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </div>
  );
};

export default Preview;
