import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  html::-webkit-scrollbar { 
    display: none;
  }
  body {
    font-family: Mono;
    width: 100%;
    height: 100vh;
    background-color: #0a192f;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #a8b2d1;
    &:hover {
      color: #64ffda;
    }
  }
  span {
    color: #64ffda;
  }
  li {
    list-style-type: none;
  }
  section {
    margin: 0 200px;
    padding-top: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1300px) {
      margin: 0 100px;
    }
    @media screen and (max-width: 540px) {
      margin: 0 15px;
      padding-top: 100px;
    }
  }

  .section-title {
    font-family: CalibreSB;
    font-size: clamp(26px, 5vw, 32px);
    color: #C9D6F7;
    margin-bottom: 40px;
    position: relative;
    span {
      color: #64ffda;
      font-family: Mono;
      font-size: clamp(16px, 3vw, 20px);
    }
    &:after {
      content: "";
      position: absolute;
      top: 12px;
      margin-left: 20px;
      width: 50%;
      height: 1px;
      background-color: #a8b2d1;
    }
  }
`;

export default GlobalStyles;
