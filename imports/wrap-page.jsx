import { AnaliticsProvider } from './packages/analitics';
import { defaultTheme } from './themes/default';

import 'normalize.css';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';

export const wrapPage = Component => {
  return () => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SnackbarProvider maxSnack={3}>
          <AnaliticsProvider 
            facebookPixel={process.env.BG_TOKEN}
            googleAnalitics={process.env.GA_TOKEN}
            yandexMetrika={process.env.YM_TOKEN}
          >
            <Component />
          </AnaliticsProvider>
        </SnackbarProvider>
      </ThemeProvider>
    );
  };
};
