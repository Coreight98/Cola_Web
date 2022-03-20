import { atom } from 'recoil';

import { toDos as dummyToDos, doings as dummyDoings, dones as dummyDones } from '@constants/todoDummy';

export interface IToDo {
  id: number;
  content: string;
}
export interface ITodoState {
  [key: string]: IToDo[];
}
export const todoState = atom<ITodoState>({
  key: 'todoState',
  default: {
    ToDo: [...dummyToDos],
    Doing: [...dummyDoings],
    Done: [...dummyDones],
  },
});
