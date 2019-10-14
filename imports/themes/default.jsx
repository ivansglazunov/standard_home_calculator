import { createMuiTheme } from "@material-ui/core/styles";

export const fontFamily = 'Helvetica, sans-serif';

export const defaultTheme = createMuiTheme({
  typography: {
    fontFamily,
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: '0px !important',
        textTransform: 'none',
      },
    },
    MuiList: {
      root: {
        fontFamily,
      },
    },
    MuiInputBase: {
      input: {
        padding: '3px 0',
      },
    },
    MuiFormControl: {
      root: {
        marginTop: 10,
        marginBottom: 10,
      },
      marginNormal: {
        marginTop: 10,
        marginBottom: 10,
      },
    },
  },
});
