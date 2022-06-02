import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-inline-start: 0;
  }
  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
  input::-webkit-search-cancel-button {-webkit-appearance: none}
  body{
    font-family: 'Avenir', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }  
`