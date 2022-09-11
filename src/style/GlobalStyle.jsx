

import { createGlobalStyle } from 'styled-components';
import Background from '../assets/images/background3.jpg'


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #233142;
    --gray-1: #BCB4B4;
    --gray-3: #748DA6;
    --gray-4: #9D9D9D;
    --gray-5: #6D8299;
    --gray-6: #7C99AC;
    --deep-dark: #262626;
    --steel-1: #5b84bc;
    --gray-2: #140303;
    --white : white;
    --black: black;
    --blue-1: #A5DEF1;
    --blue-2: #82A6CB;
    --blue-3: #3667A6;
    --blue-4: #214177;
    --blue-5: #1C3879;
    --dark-green: #143A52;
    --gray-green: #6E828A;
    --light-blue: #CDE3EB;
    --light-gray: #E3EFF3;
  }
  html{
    font-size: 12px;
    font-family: 'Montserrat SemiBold';
    background-color: var(--dark-green);
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