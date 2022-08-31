

import { createGlobalStyle } from 'styled-components';
import Background from '../assets/images/background.png'


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #233142;
    --gray-1: #BCB4B4;
    --deep-dark: #262626;
    --steel-1: #5b84bc;
    --gray-2: #140303;
    --white : white;
    --black: black;
    --blue-1: #A5DEF1;
    --blue-2: #82A6CB;
    --blue-3: #3667A6;
    --blue-4: #214177;
  }
  html{
    font-size: 10px;
    font-family: 'Poppins';
    background-color: var(--dark-bg);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;