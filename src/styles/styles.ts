import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --vividCyan: #01ffff;
    --grayWhite: #2a2a2a;
    --lightGray: #ccc;
    --black: #1c1c1c;
    --white: #fff;
    --gray: #232323;
  }

  body {
    overflow-x: hidden;
    background: var(--black);
    color: var(--vividCyan);
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }
`;

export const StyledContainerWrapper = styled.div`
  padding: 60px;
`;

export { GlobalStyle as default };
