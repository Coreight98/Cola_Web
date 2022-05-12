import { useEffect, useState } from 'react';

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
  TodoWrapper,
} from '@styles/todolist';
import { todoState } from 'src/store';

const Todolist: NextPage = () => {
  const todoMenuModal = useRecoilValue(todoModal);

  const [isWindowReady, setWindowReady] = useState(false);
  useEffect(() => {
    setWindowReady(true);
  }, []);
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const handleChangeMonth = (condition: number) => setDate(new Date(date.getFullYear(), date.getMonth() + condition));

  const [toDos, setToDos] = useRecoilState(todoState);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
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
      setToDos((allBoards) => {
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
              <button>Delete</button>
            </TodoUtils>
          </TodoInfoWrapper>
          <TodoWrapper>
            <DragDropContext onDragEnd={onDragEnd}>
              {Object.keys(toDos).map((board: string, idx) => (
                <Droppable key={board + (idx + '')} droppableId={board}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <TodoArea area={board} idx={idx} dragMode={true}>
                        {provided.placeholder}
                      </TodoArea>
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          </TodoWrapper>

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
