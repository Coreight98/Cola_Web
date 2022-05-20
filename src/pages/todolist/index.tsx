import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { DragDropContext, DropResult, Droppable, resetServerContext } from 'react-beautiful-dnd'; // eslint-disable-line
import { useRecoilState, useRecoilValue } from 'recoil';

import TodoMenuModal from '@components/molecules/todoMenuModal';
import Calender from '@molecules/calender';
import TodoArea from '@molecules/todoArea';
import { todoModal } from '@store/todo';
import {
  BackgroundView,
  BackgroundSecondView,
  Container,
  CalendarContainer,
  TodoContainer,
  TodoInfoWrapper,
  TodoDate,
  TodoUtils,
  DeleteBtn,
  DeleteBlock,
  TodoWrapper,
} from '@styles/todolist';
import { getTodoList, saveTodoList } from '@utils/api/Todo';
import { ITodoState, todoState } from 'src/store';

const useCalendar = (): [Date, Date, (condition: number) => void] => {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const handleChangeMonth = (condition: number) => setDate(new Date(date.getFullYear(), date.getMonth() + condition));

  return [today, date, handleChangeMonth];
};

const useTodoList = (date: string | Date): [ITodoState, Dispatch<SetStateAction<ITodoState>>] => {
  const [toDos, setTodos] = useRecoilState<ITodoState>(todoState);

  useEffect(() => {
    async function fetchTodo(date: Date) {
      const toDos = await getTodoList(date);
      setTodos(toDos);
    }
    if (date) {
      fetchTodo(new Date(date));
    }
  }, [date]);
  return [toDos, setTodos];
};
const useDragableTodo = () => {
  const [toDos, setTodos] = useRecoilState<ITodoState>(todoState);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setTodos((allBoards: ITodoState) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const toMoveTodo = boardCopy.splice(source.index, 1)[0];
        boardCopy.splice(destination?.index, 0, toMoveTodo);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // cross board movement
      setTodos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const toMoveTodo = sourceBoard.splice(source.index, 1)[0];
        destinationBoard.splice(destination?.index, 0, toMoveTodo);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return onDragEnd;
};
const useDeleteTodo = (): [boolean, () => void, (todoArea: string, todoId: number) => void] => {
  const [toDos, setTodos] = useRecoilState<ITodoState>(todoState);

  const [deleteMode, setDeleteMode] = useState(false);
  const [toDeleteItems, setToDeleteItems] = useState<{
    [key: string]: number[];
  }>({});

  useEffect(() => {
    setToDeleteItems({});
  }, [deleteMode]);

  const onClickDelete = () => {
    deleteTodo();
    setDeleteMode((value) => !value);
  };
  const onCheckDeleteItem = (todoArea: string, todoId: number) => {
    const currentBoard = toDeleteItems[todoArea] ? [...toDeleteItems[todoArea]] : [];

    if (!currentBoard.find((v) => v === todoId)) {
      currentBoard.push(todoId);
    }
    setToDeleteItems((current) => {
      return {
        ...current,
        [todoArea]: currentBoard,
      };
    });
  };

  const deleteTodo = () => {
    for (const folder in toDeleteItems) {
      setTodos((allFolder) => {
        const items = [...allFolder[folder]];
        for (const item of toDeleteItems[folder]) {
          const itemIdx = items.findIndex((v) => v.id === item);
          items.splice(itemIdx, 1);
        }
        return { ...allFolder, [folder]: items };
      });
    }
  };

  return [deleteMode, onClickDelete, onCheckDeleteItem];
};

const Todolist: NextPage = () => {
  const [today, date, handleChangeMonth] = useCalendar();

  const [toDos, setToDos] = useTodoList(date);
  const onDragEnd = useDragableTodo();
  const [deleteMode, onClickDelete, onCheckDeleteItem] = useDeleteTodo();

  const todoMenuModal = useRecoilValue(todoModal);

  const [isWindowReady, setWindowReady] = useState(false);

  useEffect(() => {
    setWindowReady(true);
  }, []);
  useEffect(() => {
    saveTodoList(date, toDos);
  }, [toDos]);

  return (
    <Container>
      <BackgroundView />
      <BackgroundSecondView />
      <CalendarContainer>
        <Calender {...{ date, handleChangeMonth }} />
      </CalendarContainer>
      {isWindowReady && (
        <TodoContainer>
          <TodoInfoWrapper>
            <TodoDate>
              <span>{today.getDate()}</span>
              <span>{today.toDateString().split(' ')[0].toUpperCase()}</span>
            </TodoDate>
            <TodoUtils>
              <button>Menu</button>
              <DeleteBtn deleteMode={deleteMode} onClick={onClickDelete}>
                <DeleteBlock deleteMode={deleteMode}></DeleteBlock>
                삭제
              </DeleteBtn>
            </TodoUtils>
          </TodoInfoWrapper>
          {Object.keys(toDos).length === 0 && 'Loading...'}
          {Object.keys(toDos).length !== 0 && (
            <TodoWrapper>
              <DragDropContext onDragEnd={onDragEnd}>
                {Object.keys(toDos).map((board: string, idx) => (
                  <Droppable key={board + (idx + '')} droppableId={board}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <TodoArea
                          area={board}
                          idx={idx}
                          dragMode={true}
                          deleteMode={deleteMode}
                          checkDelete={onCheckDeleteItem}
                        >
                          {provided.placeholder}
                        </TodoArea>
                      </div>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            </TodoWrapper>
          )}

          {todoMenuModal && <TodoMenuModal></TodoMenuModal>}
        </TodoContainer>
      )}
    </Container>
  );
};

export default Todolist;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
