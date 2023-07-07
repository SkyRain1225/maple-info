import { ThemeProvider } from 'styled-components';

import { GlobalStyled } from '~/styles/GlobalStyled';
import { theme } from '~/styles/themes';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      {/* Input Pages Here */}
    </ThemeProvider>
  );
};

export default App;
