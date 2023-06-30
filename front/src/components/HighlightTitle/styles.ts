import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HighlightTitleContainer = styled(DefaultContainer)`
    align-items: end;
    height: 130px;
    padding-bottom: 15px;
    background-color: var(--theme-04);

    h1 {
        font: var(--Heading-2-400);
        font-family: 'Oswald', sans-serif;
        color: white;
    }

    @media (min-width: 1200px) {
        h1 {
            font: var(--Heading-1-400);
            font-family: 'Oswald', sans-serif;
        }
    }
`

export const HighlightTitleContent = styled(DefaultContent)``