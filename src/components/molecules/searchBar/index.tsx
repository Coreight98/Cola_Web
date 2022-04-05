import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Container, HeaderBtn, InputModal, HashtagWrapper } from './styles';

import SearchIcon from '@assets/icon/search.svg';
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
      <div
        style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '28px' }}
        ref={(el) => (divRef.current = el as HTMLInputElement)}
        onFocus={(e) => setFocus(true)}
      >
        <Input
          type="medium"
          width="calc(100% - 54px)"
          height="100%"
          style={{ borderRadius: '28px', boxShadow: 'none', paddingLeft: '1rem' }}
          ref={(el) => (inputRef.current = el as HTMLInputElement)}
          onKeyUp={addChipList}
        />
        {focus && (
          <InputModal>
            <HashtagWrapper>
              {chipList.map((chip, i) => (
                <HashtagChip key={chip + i} title={chip} size="small" onRemoveChip={() => deleteChip(i)} />
              ))}
            </HashtagWrapper>
          </InputModal>
        )}
        <HeaderBtn type="button" onClick={handleSubmit}>
          <SearchIcon />
        </HeaderBtn>
      </div>
    </Container>
  );
};

export default SearchBar;
