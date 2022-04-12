import { atom } from 'recoil';

export enum BoardLayout {
  'TILE',
  'SIMPLE_LIST',
  'PREVIEW_LIST',
}

export const boardTypeState = atom<BoardLayout>({
  key: 'boardType',
  default: BoardLayout.TILE,
});
