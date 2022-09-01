import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import TomatoesO8L8 from '../assets/fonts/Tomatoes-O8L8.ttf';
import PoppinsMedium from '../assets/fonts/poppins.medium.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-Semibold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Tomatoes-O8L8';
    src: url(${TomatoesO8L8});
    font-style: normal;
  }
  @font-face {
    font-family: 'poppins.medium';
    src: url(${PoppinsMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenSans-Semibold';
    src: url(${OpenSansSemiBold});
    font-style: normal;
  }
  html{
    font-family: 'Montserrat SemiBold';
    color: var(--black);
  }
  *{
    font-family: 'Montserrat SemiBold';
    color: var(--gray-6);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;
