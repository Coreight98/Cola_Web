import { atom, selector } from 'recoil';

export const sideBarState = atom({
  key: 'sidebar',
  default: false,
});

export const sideBarSelector = selector({
  key: 'sideBarSelector',
  get: ({ get }) => {
    const sidebar = get(sideBarState);
    if (sidebar) {
      console.log('sidebar', 200);
      return 200;
    } else {
      console.log('sidebar', 80);
      return 80;
    }
  },
});
