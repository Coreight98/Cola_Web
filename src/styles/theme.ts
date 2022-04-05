import { Theme } from '@emotion/react';
import { string } from 'yup';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      White: string;
      Begonia: string;
      Emerald: string;
      VeryLightBlue: string;
      JordyBlue: string;
      backgroundColor: string;
    };
  }
}
export const theme: Theme = {
  colors: {
    White: '#FFFFFF',
    Begonia: '#FF7373',
    Emerald: '#5ED68E',
    VeryLightBlue: '#6C7BFA',
    JordyBlue: '#90A8F0',
    backgroundColor: '#FAFBFD',
  },
};
