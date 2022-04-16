import { Theme } from '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
      };
      gray: {
        100: string;
        900: string;
      };
      green: {
        600: string;
      };
      red: {
        600: string;
      };
      white: string;
      shadow: string;
      background: {
        100: string;
      };
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
    };
  }
}

export const theme: Theme = {
  colors: {
    blue: {
      '100': '#DDE1FC',
      '200': '#90A8F0',
      '300': '#B4BCFC',
      '400': '#8693FF',
      '500': '#6C7BFA',
    },
    gray: {
      '900': '#4F4F53',
      '100': '#AAAAAA',
    },
    background: {
      '100': '#FAFBFD',
    },
    green: {
      '600': '#5ED68E',
    },
    red: {
      '600': '#FF7373',
    },
    white: '#FFFFFF',
    shadow: '${({theme})=>theme.colors.shadow}',
  },
  breakpoints: {
    lg: '1200px',
    md: '768px',
    sm: '480px',
  },
};
