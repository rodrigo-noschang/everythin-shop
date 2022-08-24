import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --yellow: #fbea80;
        --purple: #171430;
        --grey: #3b4344;
        --rating-green: #4DAC68;
        --shadow-grey: #a4a4a4;
    }

    html, body, h1, h2, h3, header, button, input, svg, figure, img, div, main, section, ul, li, footer, a, p, span {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    li {
        list-style-type: none;
    }
`;

export default GlobalStyle;