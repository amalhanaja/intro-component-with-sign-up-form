import * as React from 'react';
import Logo from '../../components/Logo';
import styled, { ThemeProvider } from '../../styles/styled-components';
import DefaultTheme from '../../styles/themes';
import GlobalStyle from '../../styles/globalStyle';

const Wrapper = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    pointer-events: none;
    svg {
      height: 40vmin;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: ${(props): string => props.theme.colors.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${({ theme }): string => theme.colors.textPrimary};
  }

  .App-link {
    color: ${({ theme }): string => theme.colors.primary};
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <Wrapper className="App">
      <header className="App-header">
        <div className="App-logo">
          <Logo />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper>
  </ThemeProvider>
);

export default App;
