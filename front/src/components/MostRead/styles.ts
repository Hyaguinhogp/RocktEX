import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const MostReadContainer = styled(DefaultContainer)`
    background-color: var(--theme-00);
    padding-top: 50px;
    padding-bottom: 50px;
`

export const MostReadContent = styled(DefaultContent)`
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
`