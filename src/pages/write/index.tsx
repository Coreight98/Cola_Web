import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

import { Container, EditorWrapper, Wrapper, HashtagInput, TitleInput, VerticalLine } from './styles';

import Button from '@components/atoms/button';
import Hashtag from '@components/atoms/chip/hashtag';
import { MODE } from '@constants/index';

interface RefProps {
  [key: string]: HTMLInputElement;
}

const PostEditor = dynamic(() => import('@components/molecules/editor'), { ssr: false });
const PostViewer = dynamic(() => import('@components/molecules/editorViewer'), { ssr: false });

const Write = () => {
  const [markdownContent, setMarkdownContent] = useState<string>(`자유롭게 작성해보세요.`);
  const [editMode, setEditMode] = useState<typeof MODE[number]>('all');
  const [chipList, setChipList] = useState<string[]>([]);
  const inputRef = useRef<RefProps>({
    hashtag: '' as unknown as HTMLInputElement,
    title: '' as unknown as HTMLInputElement,
  });

  const handleChangeMode = (v: typeof MODE[number]) => setEditMode(v);

  const addChipList = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    setChipList([...chipList, inputRef.current.hashtag.value]);
    inputRef.current.hashtag.value = '';
  };

  const deleteChip = (index: number) => setChipList(chipList.filter((v, i) => i !== index));

  return (
    <Container>
      <h2>글쓰기</h2>
      <Wrapper>
        <TitleInput ref={(el) => (inputRef.current.title = el as HTMLInputElement)} placeholder="제목 입력칸" />
        <Wrapper>
          {MODE.map((element: string) => (
            <Button key={element} title={element} onClick={() => handleChangeMode(element)} />
          ))}
        </Wrapper>
      </Wrapper>
      <EditorWrapper style={{ border: '1px solid' }}>
        {editMode !== 'view' && (
          <PostEditor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />
        )}
        {editMode === 'all' && <VerticalLine />}
        {editMode !== 'edit' && (
          <PostViewer markdownContent={markdownContent} title={inputRef.current.title.value} chipList={chipList} />
        )}
      </EditorWrapper>
      <EditorWrapper>
        {chipList.map((element, index) => (
          <Hashtag key={element} title={element} onClick={() => deleteChip(index)} />
        ))}
        <HashtagInput
          ref={(el) => (inputRef.current.hashtag = el as HTMLInputElement)}
          onKeyPress={addChipList}
          placeholder="태그를 입력하세요."
        />
      </EditorWrapper>
    </Container>
  );
};
export default Write;
