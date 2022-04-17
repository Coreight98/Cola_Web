import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { DragDropContext, DropResult, Droppable, resetServerContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';

import { Container, CalendarContainer } from '@styles/todolist';

import Calender from '@molecules/calender';
import TodoArea from '@molecules/todoArea';
import { todoState } from 'src/store';

const Todolist: NextPage = () => {
  const [isWindowReady, setWindowReady] = useState(false);
  useEffect(() => {
    setWindowReady(true);
  }, []);
  const [date, setDate] = useState(new Date());

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
      <CalendarContainer>
        <Calender {...{ date, handleChangeMonth }} />
      </CalendarContainer>
      {isWindowReady && (
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
      )}
    </Container>
  );
};

export default Todolist;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
