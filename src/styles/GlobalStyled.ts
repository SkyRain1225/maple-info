import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  @font-face {
    font-family: 'NanumBarunGothic';
    src: url('~/fonts/NanumBarunGothic.eot');
    font-weight: normal;
    
  }

  :root {
    --font-nanum: 'NanumBarunGothic';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-nanum);
  }
`;
