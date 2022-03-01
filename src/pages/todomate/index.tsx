import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Container, Wrapper, CheckBoxWrapper } from './styles';

import Chip from '@atoms/chip';
import Calender from '@molecules/calender';

interface Props {
  [key: string]: string[];
}
const Todomate = () => {
  const [focus, setFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [feed, setFeed] = useState<Props>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const targetList = ['목표', '아침'];
  const handleChangeMonth = (condition: number) => setDate(new Date(date.getFullYear(), date.getMonth() + condition));
  const handleClick = (key: string) => {
    setFeed({ ...feed, [key]: feed[key] === undefined ? [''] : [...feed[key], ''] });
    setFocus(true);
  };
  const handleFocus = (key: string) => {
    if (inputRef.current === null) return;
    inputRef.current.value !== ''
      ? setFeed({ ...feed, [key]: [...feed[key].slice(0, -1), inputRef.current.value] })
      : setFeed({ ...feed, [key]: feed[key].slice(0, -1) });
    setFocus(false);
  };

  return (
    <>
      <Container>
        <Calender {...{ date: date, handleChangeMonth }} />
      </Container>
      <Wrapper>
        {targetList.map((target: string) => (
          <>
            <Chip key={target} title={target} handleClick={() => !focus && handleClick(target)} />
            {feed[target]?.map((element) =>
              element !== '' ? (
                <CheckBoxWrapper>
                  <input type="checkbox" />
                  <div key={element}>{element}</div>
                </CheckBoxWrapper>
              ) : (
                <input ref={inputRef} onBlur={() => handleFocus(target)} autoFocus />
              ),
            )}
          </>
        ))}
      </Wrapper>
    </>
  );
};

export default Todomate;
