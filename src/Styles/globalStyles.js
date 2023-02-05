import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    /* Colors */
    --primary: #191d2b;
    --bg-prime: #222629;
    --secondary: #1dc6bf;
    --tertiary: #8252da;
  
    --gradient-primary: linear-gradient(15deg, #8252da 45%, #1dc6bf 100%);
    --gradient-secondary: linear-gradient(90deg, transparent, #8252da);
    --gradient-tertiary: linear-gradient(90deg, #8252da, #1dc6bf);
  
    --background-primary: #111;
    --background-secondary: #8252da;
  
    --text-primary: #ffffff;
    --text-secondary: #191d2b;
    --text-gradient: linear-gradient(15deg, #8252da 15%, #1dc6bf 100%);
  
    --text-hover: #926bda;
    --text-hover-secondary: #191d2b;
    --text-active: #926bda;
  
    --button-primary: #8252da;
    --button-hover: #926bda;
    --button-active: #926bda;
  
    --button-secondary: #1dc6bf;
    --button-secondary-hover: #2de1db;
    --button-secondary-active: #2de1db;
  
    --button-tertiary: #926bda;
    --button-tertiary-hover: rgba(146, 107, 218, 0.3);
    --button-tertiary-active: rgba(146, 107, 218, 0.3);
  
    --white: #ffffff;
    --light-white: #ccd6f6;
    --blue0: #00b4db;
    --blue: #0083b0;
    --black: #000000;
    --grey0: #f8f8f8;
    --grey1: #dbe1e8;
    --grey2: #b2becd;
    --grey3: #6c7983;
    --grey4: #454e56;
    --grey5: #2a2e35;
    --grey6: #12181b;
  
    /* Size */
    --inline: 0.5rem;
    --default: 1rem;
    --gutter: 2rem;
    --bleed: 3rem;
    --whitespace: 5rem;
    --macro: 10rem;
    --mega: 15rem;
  
    /* Text */
    --text-xxl: 8rem;
    --text-xl: 6rem;
    --text-lg: 3rem;
    --text-md: 2rem;
    --text-sm: 1.5rem;
  
    --open-sans: "Open Sans", sans-serif;
    --futura-pt: "Futura PT", sans-serif;
  
    /* Line Heights */
    --line-height-xl: 200%;
    --line-height-lg: 150%;
    --line-height-default: 110%;
    --line-height-sm: 80%;
  }
  
  * {
    /* hide all default scrollbars */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  
    /* stops ability to select text unless specified */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    user-select: none;
  
    /* stops blue box on touch event elements */
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #141e30;
    background-image: linear-gradient(348deg, #141e30 0%, #243b55 100%);
    font-family: var(--futura-pt);
  }

`