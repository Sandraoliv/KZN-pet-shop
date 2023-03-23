import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    transition: 1s;
    font-family: 'Tilt Neon', 'Inter', sans-serif;
  }

  html{
    height: 100%;
    width: 100%;
  }

  body{
    height: 100%;
    width: 100%;
  }

  #root{
   height: 100%;
   width: 100%;
  }

  svg {
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }


  :root {

    --color-primary: #fff2ea;
    --color-secondary: #ff9b00;
    --color-tertiary: #18a8e5;
    --color-assistant: #adce53;
    --color-tertiary-transparent:#e8f6fd;
    --color-secondary-hover : #f57c00;

    --negative: #e60000;
    --negative-hover:#e63738;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;

    --grey-0: #F5F5F5;
    --grey-100: #E0E0E0;
    --grey-300: #828282;
    --grey-600: #333333;

  }
`;
