import { Theme } from '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      White: string;
      Begonia: string;
      Emerald: string;
      VeryLightBlue: string;
      JordyBlue: string;
      backgroundColor: string;
      primaryColor: string;
      primaryLightColor: string;
      secondaryColor: string;
    };
    text: {
      colors: {
        black: string;
        darkGray: string;
        gray: string;
        lightGray: string;
        basic: string;
      };
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
    primaryColor: '#6C7BFA',
    primaryLightColor: '#8693FF',
    secondaryColor: '#90A8F0',
  },
  text: {
    colors: {
      black: '#212529',
      darkGray: '#495057',
      gray: '#868E96',
      lightGray: '#CED4DA',
      basic: '#4f4f53',
    },
  },
};
