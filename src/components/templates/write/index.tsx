import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react';

import { InputProps } from './index,type';
import { Container, EditorWrapper, Wrapper } from './styles';

import Button from '@components/atoms/button';
import HashtagChip from '@components/atoms/hashtagChip';
import Input from '@components/atoms/input';
import MarkdownEditor from '@components/organisms/markdownEditor';
import { MODE, WRITE_REF } from '@constants/index';

const WriteTemp = () => {
  const [editMode, setEditMode] = useState<typeof MODE[number]>('all');
  const [chipList, setChipList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const selectRef = (el: HTMLInputElement | null) => (value: WRITE_REF) =>
    (inputRef.current[value] = el as HTMLInputElement);

  const handleChangeMode = (v: typeof MODE[number]) => setEditMode(v);

  const addChipList = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    setChipList([...chipList, inputRef.current[WRITE_REF.hashtag].value]);
    inputRef.current[WRITE_REF.hashtag].value = '';
  };

  const deleteChip = (index: number) => setChipList(chipList.filter((v, i) => i !== index));

  return (
    <Container>
      <h2>글쓰기</h2>
      <Wrapper>
        <Input {...InputProps.title} ref={(el) => selectRef(el)(WRITE_REF.title)} autoFocus />
        <Wrapper>
          {MODE.map((mode: string) => (
            <Button key={mode} onClick={() => handleChangeMode(mode)}>
              {mode}
            </Button>
          ))}
        </Wrapper>
      </Wrapper>
      <MarkdownEditor {...{ editMode, title: inputRef.current[WRITE_REF.title]?.value, chipList }} />
      <EditorWrapper>
        {chipList.map((chip, i) => (
          <HashtagChip key={chip} title={chip} onRemoveChip={() => deleteChip(i)} size="small" />
        ))}
        <Input {...InputProps.hashtag} ref={(el) => selectRef(el)(WRITE_REF.hashtag)} onKeyPress={addChipList} />
      </EditorWrapper>
    </Container>
  );
};
export default WriteTemp;
