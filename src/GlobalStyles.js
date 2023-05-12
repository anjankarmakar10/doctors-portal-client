import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
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
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
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
a{
  text-decoration: none;
}
input ,textarea{
  font: inherit;
}


/* DESIGN TOKENS */
html {
  --clr-bg: #fff;
  --clr-blue: #0FCFEC;
  --clr-green: #19D3AE;
  --clr-dark: #3A4256;
  --clr-lin-green: linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%);

}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1 ;
}

html, body, #root {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #fff;
  color: black ;
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

p{
  font-size: 1rem;
}

h1{
  font-size: 3rem;
}

@media (max-width: 768px) {
  h1{
  font-size: 2.5rem;
}
}

`;

export default GlobalStyles;
