import { useRecoilState, useSetRecoilState } from 'recoil';

import { ModalBg, ModalContent, MenuItem, TodoTitle } from './styles';

import { todoModal, todoModalContent } from '@store/todo';

const TodoMenuModal = () => {
  const setTodoMenuModal = useSetRecoilState(todoModal);
  const [todo, setTodo] = useRecoilState(todoModalContent);
  return (
    <ModalBg>
      <ModalContent>
        <TodoTitle>
          <span>{todo.content}</span>
        </TodoTitle>
        <MenuItem>
          <span>수정</span>
        </MenuItem>
        <MenuItem>
          <span onClick={() => setTodoMenuModal(false)}>닫기</span>
        </MenuItem>
      </ModalContent>
    </ModalBg>
  );
};
export default TodoMenuModal;
