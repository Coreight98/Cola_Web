import { Theme } from '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      White: string;
      Begonia: string;
      Emerald: string;
      VeryLightBlue: string;
      JordyBlue: string;
      Vodka: string;
      GhostWhite: string;
      Grey: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
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
    Vodka: '#B4BCFC',
    GhostWhite: '#FAFBFD',
    Grey: '#00000029',
  },
  breakpoints: {
    lg: '1200px',
    md: '768px',
    sm: '480px',
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
