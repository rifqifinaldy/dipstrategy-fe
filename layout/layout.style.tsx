import { createGlobalStyle } from "styled-components";

// Initiate Global State as It's just one page so i only created here
export const GlobalStyle = createGlobalStyle`
  /* ---- CSS RESET CHEAT-SHEET ---- */
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background: #ffffff;
    line-height: 1.5;
    font-family: 'Anek Gujarati', sans-serif;
  }
  /* ---- CSS RESET CHEAT-SHEET ---- */

`;
