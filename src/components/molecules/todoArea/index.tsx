import { useRef, useState } from 'react';

import { GetServerSideProps } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';

import { Container, Wrapper, FolderTitleWrapper, BtnAddTodo } from './styles';

import DraggableTodo from '@components/atoms/todoCheckBox/draggable';
import TodoCheckBox from '@components/atoms/todoCheckBox/index';
import { todoState } from 'src/store';

export interface ITodoAreaProps {
  area: string;
  idx: number;
  // toDos: string[];
  dragMode?: boolean;
  children: any;
}
interface Props {
  [key: string]: string[];
}

const TodoArea = ({ area, idx, dragMode = false, children }: ITodoAreaProps) => {
  const [feed, setFeed] = useRecoilState(todoState);

  const [focus, setFocus] = useState(false);
  // const [feed, setFeed] = useState<Props>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (key: string) => {
    // setFeed({ ...feed, [key]: feed[key] === undefined ? [''] : [...feed[key], ''] });
    setFocus(true);
  };
  const handleFocus = (key: string) => {
    if (inputRef.current === null) return;
    // inputRef.current.value !== ''
    //   ? setFeed({
    //       ...feed,
    //       [key]: [
    //         ...feed[key].slice(0, -1),
    //         { id: Number(new Date().getTime()), content: inputRef.current.value + '' },
    //       ],
    //     })
    //   : setFeed({ ...feed, [key]: feed[key].slice(0, -1) });
    setFocus(false);
  };
  return (
    <Container>
      <FolderTitleWrapper>
        <h3>{area}</h3>
        <BtnAddTodo onClick={() => !focus && handleClick(area)}>+</BtnAddTodo>
      </FolderTitleWrapper>
      <Wrapper>
        {
          // dragMode에 따라 드래그 가능한 컴포넌트 or 일반 컴포넌트 렌더링
          feed[area]?.map(({ id, content }, index) =>
            dragMode ? (
              <DraggableTodo
                key={id}
                toDoId={id}
                toDoContent={content}
                target={area}
                handleFocus={handleFocus}
                inputRef={inputRef}
                index={index}
              />
            ) : (
              <TodoCheckBox
                key={id}
                toDoId={id}
                toDoContent={content}
                target={area}
                handleFocus={handleFocus}
                inputRef={inputRef}
                index={index}
              />
            ),
          )
        }
        {dragMode && children}
      </Wrapper>
    </Container>
  );
};
export default TodoArea;
