import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from 'react';

import { InputProps } from './index,type';
import { Container, HashtagBar, Wrapper, TitleInput } from '@styles/write';

import All from 'public/all.svg';
import All_Check from 'public/all_check.svg';
import Edit from 'public/edit.svg';
import Edit_Check from 'public/edit_check.svg';
import Preview from 'public/preview.svg';
import Preview_Check from 'public/preview_check.svg';

import Button from '@components/atoms/button';
import HashtagChip from '@components/atoms/hashtagChip';
import MarkdownEditor from '@components/organisms/markdownEditor';
import { MODE, WRITE_REF } from '@constants/index';
import SubmitBtn from '@components/atoms/button/submit';
import { FlexWrapper } from '@styles/global';

const Write = () => {
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
      {/* <h2>글쓰기</h2> */}
      <TitleInput {...InputProps.title} ref={(el) => selectRef(el)(WRITE_REF.title)} autoFocus />
      <Wrapper style={{ gridArea: 'mode' }}>
        <div onClick={() => handleChangeMode('edit')}>{editMode === 'edit' ? <Edit_Check /> : <Edit />}</div>
        <div onClick={() => handleChangeMode('all')}>{editMode === 'all' ? <All_Check /> : <All />}</div>
        <div onClick={() => handleChangeMode('view')}>{editMode === 'view' ? <Preview_Check /> : <Preview />}</div>
      </Wrapper>
      <MarkdownEditor {...{ editMode, title: inputRef.current[WRITE_REF.title]?.value, chipList }} />
      <HashtagBar>
        {chipList.map((chip, i) => (
          <HashtagChip key={chip} title={chip} onRemoveChip={() => deleteChip(i)} size="small" />
        ))}
        <input {...InputProps.hashtag} ref={(el) => selectRef(el)(WRITE_REF.hashtag)} onKeyPress={addChipList} />
      </HashtagBar>
      <FlexWrapper style={{ gridArea: 'btn', justifyContent: 'flex-end' }}>
        <SubmitBtn size="small">완료</SubmitBtn>
      </FlexWrapper>
    </Container>
  );
};
export default Write;
