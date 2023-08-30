import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const PresentationContainer = styled(DefaultContainer)`
    background-color: var(--theme-00);
`

export const PresentationContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20vh 0;
    gap: 5vh;
    color: white;

    h1 {
        font-size: 70px;
    }

    h2 {
        line-height: 1.4rem;
        font-size: 20px;
        text-align: center;
    }

    @media(min-width: 1200px) {
        padding: 15vh 0;

        h1 {
            font-size: 70px;
        }

        h2 {
            line-height: 3rem;
            font-size: 28px;
            text-align: center;
            max-width: 70%;
        }
    }
`