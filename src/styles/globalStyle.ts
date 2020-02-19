import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ theme }): string => theme.fontSize.base};
    background: ${({ theme }): string => theme.colors.primaryRed}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
