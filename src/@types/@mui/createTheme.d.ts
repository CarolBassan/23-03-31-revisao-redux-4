import '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    status: {
      danger: string;
    };

  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string;
    },
  }

  export interface TypeBackground {
    paper1: string
    btnDisabled: string,
    editing: string
  }
}
