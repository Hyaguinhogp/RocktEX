import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const SearchPostsContainer = styled(DefaultContainer)`
    min-height: 70vh;
    align-items: start;
`

export const SearchPostsContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    justify-content: space-between;

    h1 {
        font: var(--Heading-4-400);
        margin: 8vh 0 2vh 0;

    }

    .no-results {
        font: var(--Heading-4-300);
    }

    .search-string {
        font: var(--Heading-4-300);
    }

    .result-pages {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2vh;
        margin-bottom: 8vh;
        gap: 20vw;
        font: var(--Heading-5-300);
        justify-self: end;
    }
    
    @media(min-width: 1200px) {
        .posts {
            display: grid;
            grid-template-columns: 45% 45%;
            justify-content: space-between;
        }
    }
`