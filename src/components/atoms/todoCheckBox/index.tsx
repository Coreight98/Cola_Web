import { RefObject, useRef, useState } from 'react';

import { GetServerSideProps } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';

import { CheckBoxWrapper, CheckBox } from './styles';

import { theme } from '@styles/theme';

export interface Props {
  toDoId: number;
  toDoContent: string;
  target: string;
  inputRef: RefObject<HTMLInputElement>;
  handleFocus: (key: string) => void;
  index: number;
}

export const Type = {
  todo: theme.colors.White,
  inProgress: theme.colors.Emerald,
  done: theme.colors.Begonia,
};

const TodoCheckBox = ({ toDoId, toDoContent, target, handleFocus, inputRef, index }: Props) => {
  const [typeStatus, setTypeStatus] = useState<keyof typeof Type>('todo');

  const handleChangeType = () =>
    setTypeStatus(typeStatus === 'todo' ? 'inProgress' : typeStatus === 'inProgress' ? 'done' : 'todo');

  return (
    <>
      {toDoContent && toDoId ? (
        <CheckBoxWrapper>
          {/* <input type="checkbox" /> */}
          <CheckBox onClick={handleChangeType} typeColor={Type[typeStatus]}></CheckBox>
          <div key={toDoId}>{toDoContent}</div>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
