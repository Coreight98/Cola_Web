import { RefObject, useRef, useState } from 'react';

import { CheckBoxWrapper, CheckBox } from './styles';

import { theme } from '@styles/theme';

interface Props {
  content: string;
  target: string;
  inputRef: RefObject<HTMLInputElement>;
  handleFocus: (key: string) => void;
}

const Type = {
  todo: theme.colors.White,
  inProgress: theme.colors.Emerald,
  done: theme.colors.Begonia,
};

const TodoCheckBox = ({ content, target, handleFocus, inputRef }: Props) => {
  const [typeStatus, setTypeStatus] = useState<keyof typeof Type>('todo');

  const handleChangeType = () =>
    setTypeStatus(typeStatus === 'todo' ? 'inProgress' : typeStatus === 'inProgress' ? 'done' : 'todo');

  return (
    <>
      {content !== '' ? (
        <CheckBoxWrapper>
          {/* <input type="checkbox" /> */}
          <CheckBox onClick={handleChangeType} typeColor={Type[typeStatus]}></CheckBox>
          <div key={content}>{content}</div>
        </CheckBoxWrapper>
      ) : (
        <input
          ref={inputRef}
          onBlur={() => handleFocus(target)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleFocus(target);
            }
          }}
          autoFocus
        />
      )}
    </>
  );
};

export default TodoCheckBox;
