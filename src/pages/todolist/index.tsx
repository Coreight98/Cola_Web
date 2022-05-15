import { useState } from 'react';

import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { resetServerContext } from 'react-beautiful-dnd'; // eslint-disable-line

import TodoContent from '@molecules/todoContent';
import EditTodoContent from '@molecules/todoContent/edit';
import Calender from '@molecules/calender';

import {
  BackgroundView,
  BackgroundSecondView,
  Container,
  CalendarContainer,
  TodoContainer,
  MenuBtn,
} from '@styles/todolist';

const useCalendar = (): [Date, Date, (condition: number) => void] => {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const handleChangeMonth = (condition: number) => setDate(new Date(date.getFullYear(), date.getMonth() + condition));

  return [today, date, handleChangeMonth];
};

const Todolist: NextPage = () => {
  const [today, date, handleChangeMonth] = useCalendar();
  const [mode, setMode] = useState('default');
  return (
    <Container>
      <BackgroundView />
      <BackgroundSecondView />
      <CalendarContainer>
        <Calender {...{ date, handleChangeMonth }} />
      </CalendarContainer>
      <TodoContainer>
        {mode === 'default' && <TodoContent today={today} />}
        {mode === 'edit' && <EditTodoContent />}
        <MenuBtn onClick={() => setMode((v) => (v === 'default' ? 'edit' : 'default'))}>메뉴</MenuBtn>
      </TodoContainer>
    </Container>
  );
};

export default Todolist;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext();

  return { props: { data: [] } };
};
