import { useState } from 'react';

import dynamic from 'next/dynamic';

import { Container, VerticalLine } from './styles';

import { WRITE_EXAMPLE, MODE } from '@constants/index';

const PostEditor = dynamic(() => import('@components/molecules/editor'), { ssr: false });
const PostViewer = dynamic(() => import('@components/molecules/previewer'), { ssr: false });

interface Props {
  editMode: typeof MODE[number];
  chipList: string[];
  title: string;
}

const MarkdownEditor = ({ editMode, chipList, title }: Props) => {
  const [markdownContent, setMarkdownContent] = useState<string>(WRITE_EXAMPLE);
  return (
    <Container>
      {editMode !== 'view' && <PostEditor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />}
      {editMode === 'all' && <VerticalLine />}
      {editMode !== 'edit' && <PostViewer markdownContent={markdownContent} title={title} chipList={chipList} />}
    </Container>
  );
};
export default MarkdownEditor;
