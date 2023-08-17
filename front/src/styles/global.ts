import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root {
        --theme-00: #1D1F21;
        --theme-01: #007BFF;
        --theme-02: #0047AB;
        --theme-03: #72B0D9;
        --theme-04: #1282C2;

        --random-00: #D2345A;
        --random-01: #3457D2;
        --random-02: #E4D9DC;

        --grey-00: #0B0D0D;
        --grey-01: #212529;
        --grey-02: #495057;
        --grey-03: #868E96;
        --grey-04: #ADB5BD;
        --grey-05: #CED4DA;
        --grey-06: #DEE2E6;
        --grey-07: #E9ECEF;
        --grey-08: #F1F3F5;
        --grey-09: #F8F9FA;
        --grey-10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        --grey-00: #1E1F1F;

        --Heading-0-500: 500 65px/64px 'Lexend', sans-serif;
        --Heading-1-500: 500 40px/50px 'Lexend', sans-serif;
        --Heading-1-400: 400 40px/50px 'Lexend', sans-serif;
        --Heading-2-500: 500 36px/45px 'Lexend', sans-serif;
        --Heading-2-400: 400 36px/45px 'Lexend', sans-serif;
        --Heading-3-500: 500 32px/40px 'Lexend', sans-serif;
        --Heading-3-400: 400 32px/40px 'Lexend', sans-serif;
        --Heading-3-300: 300 32px/40px 'Lexend', sans-serif;
        --Heading-4-400: 400 28px/35px 'Lexend', sans-serif;
        --Heading-5-400: 400 24px/30px 'Lexend', sans-serif;
        --Heading-5-300: 300 24px/30px 'Lexend', sans-serif;
        --Heading-6-500: 500 20px/25px 'Lexend', sans-serif;
        --Heading-6-400: 400 20px/25px 'Lexend', sans-serif;
        --Heading-6-300: 300 20px/25px 'Lexend', sans-serif;
        --Heading-7-500: 500 16px/20px 'Lexend', sans-serif;
        --Heading-7-400: 400 16px/20px 'Lexend', sans-serif;
        --Heading-7-300: 300 16px/20px 'Lexend', sans-serif;
        --Heading-8-400: 400 12px/16px 'Lexend', sans-serif;
        --Heading-8-300: 300 12px/16px 'Lexend', sans-serif;
        --Heading-9-300: 300 8px/12px 'Lexend', sans-serif;

        --body-1-400: 400 16px/28px 'Inter', sans-serif;
        --body-1-600: 600 16px/28px 'Inter', sans-serif;
        --body-2-400: 400 14px/24px 'Inter', sans-serif;
        --body-2-500: 500 14px/24px 'Inter', sans-serif;
        --body-2-600: 600 14px/24px 'Inter', sans-serif;

        --button-big-text: 600 16px 'Inter', sans-serif;
        --button-medium-text: 600 14px 'Inter', sans-serif;

        --input-placeholder: 400 16px 'Inter', sans-serif;
        --input-label: 500 14px/16.94px 'Inter', sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, input, blockquote, pre,
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
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: 'Lexend', sans-serif;
        vertical-align: baseline;
    }
    html{
        height: 100%;
    }
    body {
        background-color: white;
        min-height: 100%;
        line-height: 1;
        overflow-x: hidden;
    }

    .modal_active {
        overflow: hidden;
    }

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
`;

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
`;

export const DefaultContent = styled.div`
    width: 100%;
    max-width: 1200px;
`;

export const DefaultPage = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 62px;
`