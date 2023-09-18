import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const SearchPostsContainer = styled(DefaultContainer)``

export const SearchPostsContent = styled(DefaultContent)`
    h1 {
        font: var(--Heading-3-400);
        margin: 8vh 0 2vh 0;

    }

    .search-string {
        font: var(--Heading-3-300);
    }

    .result-pages {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2vh;
        margin-bottom: 8vh;
        gap: 20vw;
        font: var(--Heading-5-300);
    }
    
    @media(min-width: 1200px) {
        .posts {
            display: grid;
            grid-template-columns: 45% 45%;
            justify-content: space-between;
        }
    }
`