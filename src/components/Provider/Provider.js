import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;              
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    ul,
    ol {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    html {
        font-size: 16px;
        
    }

    body {
        font-family: ${theme.fonts.primary};
        font-size: 0.875rem;
        counter-reset: tab;
        
        ::-webkit-scrollbar {
            width: 0;
        }

        ::-webkit-scrollbar-track {
            background: hsl(240, 66%, 8%);
            background-clip: content-box;
        }

        ::-webkit-scrollbar-thumb {
            background: hsl(0, 0%, 100%);
            border-radius: 100vw;            
        }
        
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
