import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: 'Capriola';
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body.dark {
    --borders: linear-gradient(180deg, rgb(40, 23, 76),rgb(232, 90, 94));
    --texts: #E9ECF5;
    --text-color-shadow: rgba(255,255,255, .1);
    --postColor: #fff;
    --highlight: #CCD6EB;
    --mediumBackground: linear-gradient(180deg, rgb(40, 23, 76),rgb(232, 90, 94));
    --background: linear-gradient(180deg, rgb(40, 23, 76),rgb(232, 90, 94));
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --text-color-shadow: rgba(0,0,0,.1);
    --highlight: #222;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }
`
export default GlobalStyles