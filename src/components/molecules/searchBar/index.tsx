import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Container, HeaderBtn, InputModal, HashtagWrapper } from './styles';

import HashtagChip from '@components/atoms/hashtagChip';
import Input from '@components/atoms/input';

const SearchBar = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>();
  const divRef = useRef<HTMLDivElement>();
  const [chipList, setChipList] = useState<string[]>([]);

  const addChipList = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (event.key !== ',' || inputRef.current === undefined) return;
    setChipList([...chipList, inputRef.current.value.split(',')[0]]);
    inputRef.current.value = '';
  };

  const deleteChip = (index: number) => setChipList(chipList.filter((v, i) => i !== index));

  const handleClick = (e: any) => {
    if (!(divRef.current && !divRef.current.contains(e.target))) return;
    setFocus((v) => (v ? false : v));
  };

  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [divRef]);

  return (
    <Container>
      <div ref={(el) => (divRef.current = el as HTMLInputElement)} onFocus={(e) => setFocus(true)}>
        <Input type="medium" ref={(el) => (inputRef.current = el as HTMLInputElement)} onKeyUp={addChipList} />
        {focus && (
          <InputModal>
            <HashtagWrapper>
              {chipList.map((chip, i) => (
                <HashtagChip key={chip + i} title={chip} size="small" onRemoveChip={() => deleteChip(i)} />
              ))}
            </HashtagWrapper>
          </InputModal>
        )}
      </div>
      <HeaderBtn type="button" style={{ border: 'none' }} onClick={handleSubmit}>
        검색
      </HeaderBtn>
    </Container>
  );
};

export default SearchBar;
