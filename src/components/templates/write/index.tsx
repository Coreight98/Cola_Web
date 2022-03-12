import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react';

import { InputProps } from './index,type';
import { Container, EditorWrapper, Wrapper } from './styles';

import Button from '@components/atoms/button';
import Hashtag from '@components/atoms/chip/hashtag';
import Input from '@components/atoms/input';
import MarkdownEditor from '@components/organisms/markdownEditor';
import { MODE, writeRef } from '@constants/index';

const WriteTemp = () => {
  const [editMode, setEditMode] = useState<typeof MODE[number]>('all');
  const [chipList, setChipList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const selectRef = (el: HTMLInputElement | null) => (value: writeRef) =>
    (inputRef.current[value] = el as HTMLInputElement);

  const handleChangeMode = (v: typeof MODE[number]) => setEditMode(v);

  const addChipList = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    setChipList([...chipList, inputRef.current[writeRef.hashtag].value]);
    inputRef.current[writeRef.hashtag].value = '';
  };

  const deleteChip = (index: number) => setChipList(chipList.filter((v, i) => i !== index));

  return (
    <Container>
      <h2>글쓰기</h2>
      <Wrapper>
        <Input {...InputProps.title} ref={(el) => selectRef(el)(writeRef.title)} autoFocus />
        <Wrapper>
          {MODE.map((mode: string) => (
            <Button key={mode} title={mode} onClick={() => handleChangeMode(mode)} />
          ))}
        </Wrapper>
      </Wrapper>
      <MarkdownEditor {...{ editMode, title: inputRef.current[writeRef.title]?.value, chipList }} />
      <EditorWrapper>
        {chipList.map((chip, i) => (
          <Hashtag key={chip} title={chip} onClick={() => deleteChip(i)} />
        ))}
        <Input {...InputProps.hashtag} ref={(el) => selectRef(el)(writeRef.hashtag)} onKeyPress={addChipList} />
      </EditorWrapper>
    </Container>
  );
};
export default WriteTemp;
