import { Theme } from '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      White: string;
      Begonia: string;
      Emerald: string;
    };
  }
}
export const theme: Theme = {
  colors: {
    White: '#FFFFFF',
    Begonia: '#FF7373',
    Emerald: '#5ED68E',
  },
};
