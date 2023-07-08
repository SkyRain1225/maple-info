import { ThemeProvider } from 'styled-components';

import { GlobalStyled } from '~/styles/GlobalStyled';
import { theme } from '~/styles/themes';

import { Main } from './pages';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Main />
    </ThemeProvider>
  );
};

export default App;
