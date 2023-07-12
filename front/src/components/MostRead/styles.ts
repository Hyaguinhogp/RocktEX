import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const MostReadContent = styled.div`
    display: flex;
    flex-direction: column;
    color: white;

    .most-read__title-container {
        margin-bottom: 20px;
        h2 {
            position: relative;
            right: -20px;
            font: var(--Heading-3-400);
            font-family: "Oswald", sans-serif;
            z-index: 2;
        }
    }

    .title-detail {
        position: relative;
        width: 120px;
        height: 12px;
        background-color: var(--theme-04);
        top: -10px;
    }

    .most-reads {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .read-more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
        font: var(--Heading-7-300);
        color: var(--grey-05);
        text-decoration: underline;
    }

    @media (min-width: 1200px) {
        width: 50%;
    }
`